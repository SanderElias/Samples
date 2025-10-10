import { afterRenderEffect, Component, computed, ElementRef, input, viewChild } from '@angular/core';
import { Control, MaxLengthValidationError, type FieldContext, type FieldTree } from '@angular/forms/signals';
import { ShowErrorsInDom } from '../util/show-errors-in-dom.directive';

@Component({
  selector: 'fieldset [tags]',
  imports: [Control, ShowErrorsInDom],
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
  tags = input.required<FieldTree<string[], string>>();
  tagsInput = viewChild('tagsInput', { read: ElementRef });
  tagsList = computed(() => this.tags()());

  isLastOne = computed(() => this.tagsList().value().length === 1);

  maxLength = computed(() => {
    const error = (this.tagsList().errors() || []).find(e => e instanceof MaxLengthValidationError);

    return error === undefined ? null : error.maxLength;
  });

  _ = afterRenderEffect(() => {
    /**
     * ok, this is kind of stupid
     * a fieldset is only marked invalid if one of its children is invalid
     * but the tags are dynamic, so if there is a validation error on the tags array itself
     * (like max length exceeded) there is no way to surface that in the UI
     * so we have to set the custom validity on an hidden input element
     * which then in turn will mark the fieldset as invalid
     **/
    const errors = this.tagsList().errors() || [];
    const elm = this.tagsInput()!.nativeElement as HTMLInputElement;
    if (errors.length > 0) {
      elm.setCustomValidity('error in tags');
    } else {
      elm.setCustomValidity('');
    }
  });

  addTag() {
    // this.relation().tags.push('new tag');
    this.tagsList().value.update(tags => ['', ...tags]);
  }

  delTag(index: number) {
    const tags = this.tagsList().value;
    if (tags().length > 1) {
      tags.update(tags => tags.filter((t, i) => i !== index));
    }
  }
}
