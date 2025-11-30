import type { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, take } from 'rxjs/operators';

import { RakiService } from '../raki.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  raki = inject(RakiService);

  search = new FormControl();

  list$ = this.search.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(artist => this.raki.artist(artist)),
    take(5)
  );

  ngOnInit() {}
}
