import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-home',
  templateUrl: './back-home.component.html',
  styles: []
})
export class BackHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  handle() {
    this.router.navigate([])
  }

}
