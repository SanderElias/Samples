import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import type { Observer} from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

export const fileRead = (blob: Blob) =>
  new Observable((inner: Observer<string>) => {
    if (!(blob instanceof Blob)) {
      inner.error(new Error('`blob` must be an instance of File or Blob.'));
      return;
    }
    const fr = new FileReader();
    const resultHandler = r => {
      inner.next(r.target.result as string);
      inner.complete();
    };
    const errorHandler = e => inner.error(e);
    fr.addEventListener('load', resultHandler);
    fr.addEventListener('error', errorHandler);
    fr.readAsDataURL(blob);
    return () => {
      /** make sure to release the events so the filereader can be garbage collected */
      fr.removeEventListener('load', resultHandler);
      fr.removeEventListener('error', errorHandler);
    };
  });

@Injectable({
  providedIn: 'root'
})
export class ImageToUrlDataService {
  private http = inject(HttpClient);

  convert(url: string) {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      switchMap(fileRead),
      catchError(err => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}
