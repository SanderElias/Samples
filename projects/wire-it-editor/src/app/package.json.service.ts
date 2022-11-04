import { Injectable } from '@angular/core';
import { set } from 'idb-keyval';
import { firstValueFrom, map, mergeMap, ReplaySubject, shareReplay, startWith, switchMap, tap } from 'rxjs';
import {PackageJson} from '@npm/types'

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
  )

  pjObject$ = this.file$.pipe(
    switchMap(file => file.text()),
    map(contents => JSON.parse(contents) as WireItPackageJson),
    mergeMap(contents => this.#contents$.pipe(startWith(contents))),
    shareReplay({ bufferSize: 1, refCount: true })
  )

  async upgrade(key: string) {
    const current = await firstValueFrom(this.pjObject$);
    const command = current?.scripts?.[key];
    if (command && !command.includes('wireit')) {
      current.wireit ??= {};;
      const entry = this.#undoBuffer.get(key) || {
        command,
        dependencies: [],
      };
      entry.command = command;
      current.wireit[key] ??= entry;
      current.scripts[key] = `wireit`;
    }
    this.#contents$.next(current);
    console.dir(current);
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



}

export interface WireItPackageJson extends PackageJson {

  wireit?: {
    [key: string]: WireItEntry
  }
}

export interface WireItEntry {
  command?: string;
  dependencies?: string[];
  files?: string[];
  output?: string[];
  clean?: boolean | "if-file-deleted"
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
