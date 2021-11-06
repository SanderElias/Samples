import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-two',
  templateUrl: './sample-two.component.html',
  styles: [
  ]
})
export default class SampleTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [],
  exports: [],
  declarations: [SampleTwoComponent],
  providers: [],
})
class Step1Module { }
