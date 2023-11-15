import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressesService {
  addresses$ = this.http.get('assets/addresses.csv', { responseType: 'text' }).pipe(
    map(csv => csv.split('\r').map(line => line.split(','))),
    map(([header, ...rows]) =>
      rows.map(row =>
        row.reduce((rec, val, i) => {
          rec['id'] = i * 133;
          rec[unquote(header[i])] = unquote(val);
          return rec;
        }, {})
      )
    )
  );

  constructor(private http: HttpClient) {}
}

function unquote(str) {
  return str?.replace(/^"(.*)"$/, '$1');
}
