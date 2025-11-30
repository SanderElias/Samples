import type { OnInit} from '@angular/core';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styles: [],
  imports: []
})
export class ModalDemoComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal: any;
  shown = false;

  ngOnInit() {
    // console.log(this.modal);
    setTimeout(() => (this.shown = true), 1500);
  }
}
