import type { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-home',
  templateUrl: './back-home.component.html',
  styles: []
})
export class BackHomeComponent implements OnInit {
  private router = inject(Router);

  ngOnInit() {}

  handle() {
    this.router.navigate([]);
  }
}
