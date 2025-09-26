import { afterRenderEffect, Component, signal, ViewEncapsulation } from '@angular/core';
import { applyEach, disabled, form, minLength, readonly, required, schema, type FieldPath, type Field } from '@angular/forms/signals';
import { TreeNodeEditComponent } from './tree-node-edit/tree-node-edit.component';

import { SignalTreeNode } from './signal-tree-node.model';

@Component({
  selector: 'se-signal-tree',
  imports: [TreeNodeEditComponent],
  template: `
    <h2>Signal Tree Component <small><a href="/signalForms">complex? form</a></small></h2>
    <se-tree-node-edit [treeNode]="fd"></se-tree-node-edit>
  `,
  styleUrl: './signal-tree.component.css',
})
export class SignalTreeComponent {
  tree = signal<SignalTreeNode>({
    id: 'root',
    name: 'Root',
    children: [
      {
        id: '1',
        name: 'Node 1',
        children: [
          { id: '1.1', name: 'node 1.1', children: [] },
          { id: '1.2', name: 'Node 1.2', children: [] }
        ]
      },
      { id: '2', name: 'Node 2', children: [] }
    ]
  });

  fd = form(this.tree, validateSignalTreeNode);

}

const validateSignalTreeNode = schema((tn: FieldPath<SignalTreeNode>) => {
  disabled(tn.id);
  readonly(tn.id);


  required(tn.name, { message: 'Name is required' });
  minLength(tn.name, 2, { message: 'Name must be at least 2 characters' });

  applyEach(tn.children, validateSignalTreeNode);
});
