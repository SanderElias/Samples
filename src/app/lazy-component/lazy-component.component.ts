import { NgComponentOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-lazy-component',
    templateUrl: './lazy-component.component.html',
    styles: [],
    imports: [NgComponentOutlet]
})
export class LazyComponentComponent implements OnInit {
  steps = [
    { file: () => import('./sample-one/sample-one.component') },
    { file: () => import('./sample-two/sample-two.component') },
    { file: () => import('./sample-three/sample-three.component') },
  ];
  currentStep = 2;
  component: any;

  async update(toStep: number) {
    const step = this.steps[toStep];
    const { default: component } = await step.file();
    this.component = component;
  }

  ngOnInit() {
    this.update(this.currentStep);
  }
}
