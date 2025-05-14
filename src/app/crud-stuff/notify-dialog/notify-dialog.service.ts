import { Injectable, signal, TemplateRef } from '@angular/core';

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
  show = (message: string, title?: string, type: 'info' | 'error' | 'warning' = 'error') => {
    this.message.set(message);
    title && this.title.set(title);
    this.type.set(type);
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
