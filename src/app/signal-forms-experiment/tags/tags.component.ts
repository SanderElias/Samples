import { JsonPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Control, Field } from '@angular/forms/signals';
import { UpdateNativeErrorsDirective } from '../update-native-errors.directive';

@Component({
  selector: 'fieldset [tags]',
  imports: [Control, JsonPipe, UpdateNativeErrorsDirective],
  template: `
    <legend>Tags <button type="button" class="action" (click)="addTag()">+</button></legend>
    @for (tag of tags(); track $index) {
      <div class="tags">
        <button type="button" class="action" (click)="delTag($index)" [disabled]="isLastOne()">🗑️</button>
        <input type="text" [control]="tag" [attr.name]="'tag-' + $index" showError />
      </div>
    }
  `,
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  tags = input.required<Field<string[], string>>();
  isLastOne = computed(() => this.tags()().value().length === 1);

  addTag() {
    // this.relation().tags.push('new tag');
    this.tags()().value.update(tags => [...tags, '']);
  }

  delTag(index: number) {
    const tags = this.tags()().value;
    if (tags().length > 1) {
      tags.update(tags => tags.filter((t, i) => i !== index));
    }
  }
}
