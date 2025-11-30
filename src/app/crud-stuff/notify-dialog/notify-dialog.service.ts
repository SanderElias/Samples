import type { TemplateRef } from '@angular/core';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyDialogService {
  shown = signal(false);
  message = signal('');
  template = signal<TemplateRef<unknown> | undefined>(undefined);
  title = signal('Sorry, something went wrong');
  type = signal<'info' | 'error' | 'warning'>('error');
  dismissButtonText = signal('dismiss');

  showTemplate = (template: TemplateRef<unknown>) => {
    this.template.set(template);
    this.shown.set(true);
  };
  show = ({
    message = '',
    title = this.title(),
    type = this.type(),
    dismissButtonText = this.dismissButtonText()
  }: {
    // the message to show in the dialog
    message?: string;
    // the title that will be used, if not provided, the default title will be used
    title?: string;
    // the type of the dialog, if not provided it will be error, not used yes
    type?: 'info' | 'error' | 'warning';
    // the text for the dismiss button, if not provided it will be 'dismiss'
    dismissButtonText?: string;
  }) => {
    this.message.set(message);
    title && this.title.set(title);
    this.type.set(type);
    this.dismissButtonText.set(dismissButtonText);
    this.shown.set(true);
  };
  close = () => {
    this.shown.set(false);
    this.template.set(undefined);
    this.message.set('');
    this.type.set('error');
    this.title.set('Sorry, something went wrong');
    this.dismissButtonText.set('dismiss');
  };
  isShown = () => {
    return this.shown();
  };
}
