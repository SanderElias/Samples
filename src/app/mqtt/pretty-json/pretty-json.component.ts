import { afterRenderEffect, Component, computed, ElementRef, inject, input } from '@angular/core';

import { PrettyJSONCustomElement } from './pj';

let prettyJsonLoaded = false;

@Component({
  selector: 'pretty-json',
  imports: [],
  template: ``,
  styles: `
    :host {
      display: block;
    }
  `
})
export class PrettyJson {
  #elm = inject(ElementRef).nativeElement as HTMLElement;
  json = input<Record<string, any> | string | undefined>();
  #verifiedJson = computed(() => {
    let json = this.json();
    try {
      JSON.stringify(json);
    } catch {
      // inform the user that the JSON is invalid
      json = { error: 'Invalid JSON' };
    }
    return json;
  });

  #_ = afterRenderEffect({
    write: () => {
      // @ts-expect-error // TS doesn't know I added this ;-P
      this.#elm.update(this.#verifiedJson());
    }
  });

  constructor() {
    // safeguard for environments where customElements is not defined
    if (typeof customElements !== 'undefined') {
      this.#elm.innerText = '{}'; // ensure the custom element has something to render
      if (!customElements.get('pretty-json')) {
        customElements.define('pretty-json', PrettyJSONCustomElement);
      }
    }
  }
}
