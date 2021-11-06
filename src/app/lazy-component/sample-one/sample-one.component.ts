import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-one',
  templateUrl: './sample-one.component.html',
  styles: [
  ]
})
export default class SampleOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [],
  exports: [],
  declarations: [SampleOneComponent],
  providers: [],
})
class Step1Module { }
