interface MermaidApi {
  initialize(options: {
    startOnLoad: boolean;
    theme: 'default' | 'dark';
  }): void;
  render(
    id: string,
    source: string
  ): Promise<{ svg: string; bindFunctions?: (element: HTMLElement) => void }>;
}

let mermaidLoader: Promise<MermaidApi> | undefined;
let mermaidRenderCount = 0;

export function escapeMermaidSource(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
}

function decodeHtmlEntities(value: string) {
  return value
    .replaceAll('&amp;gt;', '>')
    .replaceAll('&amp;lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&lt;', '<')
    .replaceAll('&amp;', '&');
}

function loadMermaid() {
  if (!mermaidLoader) {
    mermaidLoader = import('mermaid').then(({ default: mermaid }) => mermaid);
  }

  return mermaidLoader;
}

if (typeof HTMLElement !== 'undefined') {
  class MermaidDiagramElement extends HTMLElement {
    #renderToken = 0;

    connectedCallback() {
      void this.#render();
    }

    disconnectedCallback() {
      this.#renderToken++;
    }

    async #render() {
      const source = decodeHtmlEntities(this.textContent ?? '').trim();
      if (!source) {
        return;
      }

      const token = ++this.#renderToken;
      const mermaid = await loadMermaid();
      if (token !== this.#renderToken) {
        return;
      }

      mermaid.initialize({
        startOnLoad: false,
        theme:
          typeof matchMedia !== 'undefined' &&
          matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'default'
      });

      const { svg, bindFunctions } = await mermaid.render(
        `mermaid-${++mermaidRenderCount}`,
        source
      );

      if (token !== this.#renderToken) {
        return;
      }

      this.innerHTML = svg;
      bindFunctions?.(this);
    }
  }

  if (
    typeof customElements !== 'undefined' &&
    !customElements.get('mermaid-diagram')
  ) {
    // The upstream plugin renders Mermaid immediately; we defer that work to a
    // custom element because this app loads article HTML asynchronously.
    customElements.define('mermaid-diagram', MermaidDiagramElement);
  }
}
