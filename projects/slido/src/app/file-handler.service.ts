import { afterNextRender, effect, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { asyncComputed } from '@se-ng/signal-utils';
import { ob } from 'dist/samples/browser/chunk-T5E62NYD';
import { get, set } from 'idb-keyval';

interface FileState {
  permission: WritableSignal<boolean>;
  handle: FileSystemFileHandle | undefined;
  name: string;
  file: Signal<File | undefined>;
  content: WritableSignal<string>;
}

const defaultFileOptions: OpenFilePickerOptions = {
  types: [
    {
      description: 'Presentations',
      accept: {
        'text/*': ['.md']
      }
    }
  ],
  startIn: 'documents',
  excludeAcceptAllOption: false,
  multiple: false
};

const defaultState: FileState = {
  permission: signal(false),
  handle: undefined,
  name: '',
  file: signal(undefined),
  content: signal('')
};

@Injectable({
  providedIn: 'root'
})
export class FileHandlerService {
  #pickerOpts = defaultFileOptions;
  #fileHandle = signal<FileSystemFileHandle | undefined>(undefined);

  $state: Signal<FileState> = asyncComputed(async () => {
    const handle = this.#fileHandle();
    if (!handle) {
      return defaultState;
    }
    let file: WritableSignal<File | undefined> = signal(undefined);
    let content = signal('');
    const permission = signal(await verifyPermission(handle));
    if (permission()) {
      // I can only read a file with read/wrote permission when the users grants permission
      file.set(await handle.getFile());
    }
    if (file()) {
      // when we have a file, use the inbuild textParser to get the context.
      content.set(await file()!.text());
    }

    return {
      permission,
      handle,
      name: handle.name,
      file,
      content
    };
  }, defaultState);

  #monitor = effect(onCleanup => {
    if (!('FileSystemObserver' in self)) {
      console.warn('FileSystemObserver not available, perhaps enable it in "about:flags"');
      this.#monitor.destroy();
      return;
    }
    const fileHandle = this.$state().handle;
    if (!fileHandle) {
      return;
    }
    const handler = async (records: any[]) => {
      for (const record of records) {
        if (record.type === 'modified' && this.$state().permission()) {
          try {
            const file = await fileHandle.getFile();
            const updatedContent = await file.text();
            this.$state().content.set(updatedContent);
          } catch (e) {
            console.error('error', e);
          }
        }
      }
    };
    // @ts-expect-error
    const observer = new FileSystemObserver(handler);
    observer.observe(fileHandle);
    onCleanup(() => {
      observer.disconnect();
    });
  });

  select = async () => {
    if (window?.showOpenFilePicker === undefined) {
      return;
    }
    if (!window.isSecureContext) {
      throw new Error('Insecure context, some features may not work');
    }
    try {
      const [fileHandle] = await window.showOpenFilePicker(this.#pickerOpts);
      this.#fileHandle.set(fileHandle);
      set('lastPresentationUsed', fileHandle);
    } catch (e) {
      console.error('error', e);
      await window.showDirectoryPicker().catch(e => {
        console.error('error', e);
      });
    }
  };

  setHandle = (handle: FileSystemFileHandle) => {
    this.#fileHandle.set(handle);
    set('lastPresentationUsed', handle);
  };

  _ = afterNextRender(async () => {
    if (typeof window === 'undefined' || window?.indexedDB === undefined) {
      return; // no indexedDB or windows in SSR
    }
    const fileHandle = await get('lastPresentationUsed');
    if (fileHandle) {
      this.#fileHandle.set(fileHandle);
    }
  });

  save = async (newContent: string) => {
    const handle = this.#fileHandle();
    if (!handle || !newContent.trim()) {
      return;
    }
    const writable = await handle.createWritable();
    await writable.write(newContent);
    await writable.close();
  };

  askPermission = async () => {
    const handle = this.#fileHandle();
    if (!handle) {
      return;
    }
    const permission = await requestPermission(handle);
    this.$state().permission.set(permission);
  };
}

async function verifyPermission(
  fileHandle: FileSystemFileHandle,
  mode: FileSystemHandlePermissionDescriptor['mode'] = 'readwrite'
): Promise<boolean> {
  const options: FileSystemHandlePermissionDescriptor = {
    mode
  };
  // Check if permission was already granted. If so, return true.
  try {
    if ((await fileHandle.queryPermission(options)) === 'granted') {
      return true;
    }
  } catch (e) {
    console.error('verifyPermission', e);
  }
  // The user didn't grant permission, so return false.
  return false;
}

async function requestPermission(
  fileHandle: FileSystemFileHandle,
  mode: FileSystemHandlePermissionDescriptor['mode'] = 'readwrite'
): Promise<boolean> {
  console.log('verifyPermission', fileHandle);
  const options: FileSystemHandlePermissionDescriptor = {
    mode
  };
  // Check if permission was already granted. If so, return true.
  try {
    // Request permission. If the user grants permission, return true.
    if ((await fileHandle.requestPermission(options)) === 'granted') {
      return true;
    }
  } catch (e) {
    console.error('verifyPermission', e);
  }
  // The user didn't grant permission, so return false.
  return false;
}
