import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styles: [],
})
export class ModalDemoComponent implements OnInit {
  @ViewChild('modal', {static:true}) modal
  constructor() {}

  ngOnInit() {
    console.log(this.modal)
    setTimeout(() => this.modal['shown'] = true,1500)
  }
}
