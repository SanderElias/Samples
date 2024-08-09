import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { Observable, of, Subject, timer } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ArtObject, CollectionObject, RakiObject } from './rakiCollection';

/**
 * If you want to use this get your own key at:
 * https://www.rijksmuseum.nl/en/rijksstudio/my/profile
 */
const key = '4a3Fxmua';

const serialize = o => Object.keys(o).reduce((search, k) => (search += `${k}=${encodeURIComponent(o[k])}&`), '');

const collection = searchObj => `https://www.rijksmuseum.nl/api/en/collection/?${serialize(searchObj)}key=${key}&format=json`;

const detail = detailNumber => `https://www.rijksmuseum.nl/api/en/collection/${detailNumber}?key=${key}&format=json`;

/**
 * If you want to use this get your own key at:
 * https://www.rijksmuseum.nl/en/rijksstudio/my/profile
 * API details:
 * https://rijksmuseum.github.io/
 */
@Injectable({
  providedIn: 'root',
  deps: [HttpClient],
})
export class RakiService {
  private http = inject(HttpClient);

  private artCount = 4000;
  private detailNumber = new Subject<string | undefined>();

  detail$: Observable<RakiObject.ArtDetailObject[]> = this.detailNumber.pipe(
    switchMap(number => (number ? this.http.get<RakiObject.RootObject>(detail(number)).pipe(map(r => [r.artObject])) : of([])))
  );

  private selection = {
    p: 0,
    ps: 1,
    type: 'painting',
  };

  randomImage$ = this.http.get<CollectionObject>(collection(this.selection)).pipe(
    tap(r => (this.artCount = r.count)),
    switchMap(() => timer(0, 20000)),
    switchMap(() => this.getArtObject$),
    // please note that switchmMap handles a promise also!
    switchMap(artObject => this.preload(artObject.webImage.url))
  );

  private getArtObject$: Observable<ArtObject> = Observable.create(obs => {
    obs.next({
      ...this.selection,
      p: Math.floor(Math.random() * this.artCount),
    });
    obs.complete();
  }).pipe(
    switchMap(selection =>
      this.http.get<CollectionObject>(collection(selection)).pipe(
        map(r => r.artObjects[0]),
        catchError(() => timer(500).pipe(switchMap(() => this.getArtObject$)))
      )
    ),
    switchMap((artObject: ArtObject) => (artObject.webImage && artObject.webImage.url ? of(artObject) : this.getArtObject$)),
    catchError(_e => of([]))
  );

  loadDetail(objectNumber: string | undefined) {
    this.detailNumber.next(objectNumber);
  }

  artist(q) {
    console.log(q, serialize({ q }));
    return this.http.get<CollectionObject>(collection({ q })).pipe(
      map(r => r.artObjects),
      map((artObjects: ArtObject[]) => artObjects.reduce((acc, e) => (e.hasImage ? acc.concat(e) : acc), [] as ArtObject[])),
      tap(r => console.log(r))
    );
  }

  private preload(url): Promise<string> {
    if (typeof document === 'undefined') return;
    return new Promise((resolve, reject) => {
      const resolveWithUrl = () => resolve(`url(${url})`);
      const img = document.createElement('img');
      img.addEventListener('load', resolveWithUrl);
      img.addEventListener('error', reject);
      img.src = url;
    });
  }
}
