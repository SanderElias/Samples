import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddressesService {
  private http = inject(HttpClient);

  addresses$ = this.http.get('assets/addresses.csv', { responseType: 'text' }).pipe(
    map(csv => csv.split('\r').map(line => line.split(','))),
    map(([header, ...rows]) =>
      rows.map((row, id) =>
        row.reduce(
          (rec, val, i) => {
            // rec['id'] = i * 133;
            rec[unquote(header[i])] = unquote(val);
            return rec;
          },
          { id }
        )
      )
    )
  );
}

function unquote(str) {
  return str?.replace(/^"(.*)"$/, '$1');
}
