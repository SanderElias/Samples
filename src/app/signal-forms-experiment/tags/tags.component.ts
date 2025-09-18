import { JsonPipe } from '@angular/common';
import { afterRenderEffect, Component, computed, ElementRef, inject, input, viewChild } from '@angular/core';
import { Control, Field, MaxLengthValidationError } from '@angular/forms/signals';
import { UpdateNativeErrorsDirective } from '../update-native-errors.directive';
import { after } from 'node:test';

@Component({
  selector: 'fieldset [tags]',
  imports: [Control, JsonPipe, UpdateNativeErrorsDirective],
  template: `
    <legend>
      Tags
      @if (maxLength() !== null) {
        <span class="error"> (max {{ maxLength() }} tags)</span>
      }
      <button type="button" class="action" (click)="addTag()">+</button>
    </legend>
    <input type="text" name="tags" #tagsInput style="display: none;" />
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

  tagsInput = viewChild('tagsInput', { read: ElementRef });

  isLastOne = computed(() => this.tags()().value().length === 1);

  maxLength = computed(() => {
    const error = (this.tags()().errors() || []).find(e => e instanceof MaxLengthValidationError);

    return error === undefined ? null : error.maxLength;
  });

  _ = afterRenderEffect(() => {
    /**
     * ok, this is kind of stupid
     * a fieldset is only marked invalid if one of its children is invalid
     * but the tags are dynamic, so if there is a validation error on the tags array itself
     * (like max length exceeded) there is no way to show that in the UI
     * so we have to set the custom validity on an input element ourself
     * which is hidden from the ui
     **/
    const errors = this.tags()().errors() || [];
    const elm = this.tagsInput()!.nativeElement as HTMLInputElement;
    if (errors.length > 0) {
      elm.setCustomValidity('error in tags');
    } else {
      elm.setCustomValidity('');
    }
  });

  addTag() {
    // this.relation().tags.push('new tag');
    this.tags()().value.update(tags => [...tags, 'New Tag']);
  }

  delTag(index: number) {
    const tags = this.tags()().value;
    if (tags().length > 1) {
      tags.update(tags => tags.filter((t, i) => i !== index));
    }
  }
}
