import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Slide, SlidesService } from '../slides.service';

@Component({
  selector: 'markdown-edit',
  template: `<a routerLink="/home"><h1>Edit</h1></a>
    <select-file (fileName)="setSlide($event)"></select-file>
    <label
      ><input type="checkbox" [checked]="fancy" (change)="fancy = !fancy" /> Fancy Editor</label
    >
    <md-edit *ngIf="fancy" [markdown]="markDown" (updates)="update($event)"></md-edit>
    <textarea *ngIf="!fancy" (input)="update($event.target.value)">{{ markDown }}</textarea> `,
  styles: [
    `
      :host {
        display: block;
      }
      textarea {
        width: 98vw;
        height: 300px;
      }
    `,
  ],
})
export class EditComponent implements OnInit {
  fancy = false;
  slide: Slide;
  markDown = '';
  ngOnInit() {}

  setSlide(slide: Slide) {
    this.slide = slide;
    this.markDown = slide.markdown;
  }

  constructor(private sld: SlidesService) {}

  updateFancy() {
    this.fancy = !this.fancy;
  }
  update(markdown: string) {
    markdown = markdown.trim();
    if (markdown !== this.slide.markdown) {
      const newSlide = {...this.slide, markdown}
      this.sld.save(newSlide);
      this.setSlide(newSlide)
    }
  }
}
