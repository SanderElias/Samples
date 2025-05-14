import { Injectable } from '@angular/core';
import { get, set } from 'idb-keyval';
import { firstValueFrom, map, merge, mergeMap, ReplaySubject, shareReplay, startWith, switchMap, tap } from 'rxjs';
import { PackageJson } from '@npm/types';

@Injectable({
  providedIn: 'root'
})
export class PackageJsonService {
  fileHandle$ = new ReplaySubject<FileSystemFileHandle>(1);
  #contents$ = new ReplaySubject<WireItPackageJson>(1);
  #undoBuffer = new Map<string, WireItEntry>();

  file$ = this.fileHandle$.pipe(
    switchMap(fileHandle => fileHandle.getFile()),
    tap(file => console.log('file', file)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  pjObject$ = merge(
    this.file$.pipe(
      switchMap(file => file.text()),
      map(contents => JSON.parse(contents) as WireItPackageJson)
    ),
    this.#contents$
  ).pipe(
    map(this.optimize),
    tap(contents => set('lastPackageJson', contents)),
    tap(contents => console.table(Object.values(contents.wireit || {}))),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  /**
   * Remove all empty properties from the wireit object
   * @param c
   * @returns
   */
  optimize(c: WireItPackageJson) {
    const { wireit, ...rest } = c;
    if (!wireit) return c;
    const result = Object.entries(wireit).reduce(
      (acc, [key, value]) => {
        const newVal = Object.entries(value).reduce((acc, [key, value]) => {
          if (Array.isArray(value)) {
            const arr = value.filter(val => !!val);
            if (arr.length === 0) {
              return acc;
            }
            return { ...acc, [key]: arr };
          }
          if (value === '') return acc;
          if (value === undefined) return acc;
          if (value === null) return acc;
          if (value === false) return acc;
          return { ...acc, [key]: value };
        }, {});
        return { ...acc, [key]: newVal };
      },
      {} as Record<string, WireItEntry>
    );
    /** maintain the order */
    const copy = { ...c };
    copy.wireit = result;
    return copy;
  }

  async upgrade(key: string) {
    const current = await firstValueFrom(this.pjObject$);
    const command = current?.scripts?.[key];
    if (command && !command.includes('wireit')) {
      current.wireit ??= {};
      const entry = this.#undoBuffer.get(key) || {
        command,
        dependencies: []
      };
      entry.command = command;
      current.wireit[key] ??= entry;
      current.scripts[key] = `wireit`;
    }
    this.#contents$.next(current);
  }

  async renameWireit(name, newName) {
    const current = await firstValueFrom(this.#contents$);
    current.wireit ??= {};
    if (current.wireit[newName]) {
      return false;
    }
    if (current.wireit[name]) {
      current.wireit[newName] = current.wireit[name];
      delete current.wireit[name];
      delete current.scripts[name];
      current.scripts[newName] = `wireit`;
      Object.values(current.wireit).forEach(entry => {
        entry.dependencies = entry.dependencies?.map(dep => (dep === name ? newName : dep));
      });
    }
    this.#contents$.next(current);
  }

  async updateWireItEntry(name: string, props: WireItEntry) {
    const current = await firstValueFrom(this.#contents$);
    current.wireit ??= {};
    if (!current.wireit[name]) {
      return false;
    }
    current.wireit[name] = props;
    this.#contents$.next(current);
    return true;
  }

  async addWireitScript(name: string, props: WireItEntry) {
    const current = await firstValueFrom(this.pjObject$);
    current.wireit ??= {};
    if (current.wireit[name]) {
      console.warn('already exists');
      return false;
    }
    current.wireit[name] = {
      command: '',
      ...props
    };
    current.scripts[name] = `wireit`;
    this.#contents$.next(current);
    return true;
  }

  async removeWireitScript(name: string) {
    const current = await firstValueFrom(this.#contents$);
    if (current.wireit?.[name]) {
      delete current.wireit[name];
      delete current.scripts[name];
    }
    this.#contents$.next(current);
  }

  async downgrade(key: string) {
    const current = await firstValueFrom(this.#contents$);
    if (current.wireit?.[key]) {
      current.scripts[key] = current.wireit[key].command;
      this.#undoBuffer.set(key, { ...current.wireit[key] });
      delete current.wireit[key];
    }
    this.#contents$.next(current);
  }

  async setHandle(fileHandle: FileSystemFileHandle, keep = true) {
    await verifyPermission(fileHandle);
    if (keep) {
      //store the fileHandle in indexedDB, mostly ignored now.
      await set('fileHandle', fileHandle);
    }
    console.log('setHandle', fileHandle);
    this.fileHandle$.next(fileHandle);
  }

  constructor() {
    get('lastPackageJson').then(contents => {
      if (contents.name) {
        this.#contents$.next(contents as WireItPackageJson);
      }
    });
  }
}

export interface WireItPackageJson extends PackageJson {
  wireit?: {
    [key: string]: WireItEntry;
  };
}

export interface WireItEntry {
  command?: string;
  dependencies?: string[];
  service?: boolean;
  files?: string[];
  output?: string[];
  clean?: boolean | 'if-file-deleted';
  packageLocks?: string[];
}

async function verifyPermission(fileHandle: FileSystemFileHandle, readWrite = true) {
  console.log('verifyPermission', fileHandle, readWrite);
  const options = {} as any;
  if (readWrite) {
    options.mode = 'readwrite';
  }
  // Check if permission was already granted. If so, return true.
  // @ts-ignore
  if ((await fileHandle.queryPermission(options)) === 'granted') {
    return true;
  }
  // @ts-ignore
  // Request permission. If the user grants permission, return true.
  if ((await fileHandle.requestPermission(options)) === 'granted') {
    return true;
  }
  // The user didn't grant permission, so return false.
  return false;
}
