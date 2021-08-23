import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Relation } from '../../relations.service';

@Component({
  selector: 'app-relation',
  template: `
    <h4>{{relation?.name}}</h4>
  `,
  styles: [`
    :host {
      display: inline-block;
      width: fit-content;
      padding: 5px;
      border-radius: 5px;
      background-color: #f5f5f5;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
      margin: 7px;
      cursor: pointer;
      height: 1.5rem;
    }
    h4 {
      padding:2px;
      margin:0px;
    }
  `]
})
export class RelationComponent implements OnInit {
  @Input() relation: Relation
  @HostListener('click') onClick() {
    console.log(this.relation.id + ' clicked');
    this.router.navigate(['/relations', this.relation.id]);
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
