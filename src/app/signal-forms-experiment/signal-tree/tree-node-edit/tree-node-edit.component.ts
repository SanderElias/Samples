import { Component, input, ViewEncapsulation } from '@angular/core';
import { Control, Field } from '@angular/forms/signals';
import { ShowErrorsInDom } from '../../util/show-errors-in-dom.directive';
import type { SignalTreeNode } from '../signal-tree-node.model';

@Component({
  selector: 'se-tree-node-edit',
  imports: [Control, ShowErrorsInDom],
  template: `<label>
      <span>Node ID</span>
      <input type="text" [control]="treeNode().id" disabled readonly />
    </label>
    <label>
      <span>Name</span>
      <input type="text" [control]="treeNode().name" showError="" />
    </label>
    <button type="button" (click)="addChild()">Add Child</button>
    @if (treeNode().children().value().length !== 0) {
      <div class="children">
        <h5>Children</h5>
        @for (child of treeNode().children; track $index) {
          <!-- <div>{{ child.name }} </div> -->
          <se-tree-node-edit [treeNode]="child"></se-tree-node-edit>
        }
      </div>
    }`,
  styleUrl: './tree-node-edit.component.css',
})
export class TreeNodeEditComponent {
  treeNode = input.required<Field<SignalTreeNode>>();

  addChild() {
    const children = this.treeNode().children;
    children().value.update((cs) => [
      { id: crypto.randomUUID(), name: '', children: [] },
      ...cs,
    ]);
  }
}
