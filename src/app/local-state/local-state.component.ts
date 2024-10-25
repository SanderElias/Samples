import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-local-state',
    templateUrl: './local-state.component.html',
    styles: [],
    imports: [RouterOutlet]
})
export class LocalStateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
