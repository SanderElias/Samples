const icons = {
  TIP: '💡',
  WARNING: '⚠️',
  IMPORTANT: '❗',
  NOTE: '🛈',
  MENU: '≡',
  CLOSE: '✕',
  UHM: '⁉️'
};

export type IconNames = keyof typeof icons;

export type MarkDown = string;

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

export async function parser(content: MarkDown): Promise<string> {
  try {
    // replace GFM block icons like [!TIP], [!WARNING], [!IMPORTANT], [!NOTE]
    // with a span containing the corresponding icon, so I can style it with CSS
    const blockIcons = /\[\!(.+?)\]/g;
    for (const match of content.matchAll(blockIcons)) {
      const fullMatch = match[0];
      // if no matching icon found, use UHM as default
      const iconName = (
        Object.keys(icons).includes(match[1].toUpperCase())
          ? match[1].toUpperCase()
          : 'UHM'
      ) as IconNames;
      const iconHtml = `<span class=icon><svg role="img" class="icon" aria-label="${iconName}"><use href="#icon-${iconName.toLowerCase()}"></use></svg></span>`;
      content = content.replace(fullMatch, iconHtml);
    }
  } catch (err) {
    console.error('Error processing block icons:', err);
  }

  // dynamically import marked to reduce initial bundle size
  const { Marked } = await import('marked');
  let marked = new Marked();
  try {
    const { default: hljs } = await import('highlight.js/lib/core');
    const { default: typescript } =
      await import('highlight.js/lib/languages/typescript');
    const { default: css } = await import('highlight.js/lib/languages/css');
    const { default: html } = await import('highlight.js/lib/languages/xml');
    const { default: javascript } =
      await import('highlight.js/lib/languages/javascript');
    const { default: plaintext } =
      await import('highlight.js/lib/languages/plaintext');

    hljs.registerLanguage('plaintext', plaintext);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('css', css);
    hljs.registerLanguage('html', html);
    hljs.registerLanguage('javascript', javascript);

    marked = new Marked();
    // Keep all custom Markdown rendering in one marked hook so the special
    // cases stay close to the default renderer they extend.
    marked.use({
      renderer: {
        // Mermaid fences become a custom element so the browser can render
        // them later with the local Mermaid package.
        code({ text, lang }) {
          if (lang?.toLowerCase() === 'mermaid') {
            return `<mermaid-diagram>${escapeHtml(text.trim())}</mermaid-diagram>`;
          }
          const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext';
          const className = lang ? `hljs language-${lang}` : 'hljs';
          // Make code blocks keyboard-focusable so users can scroll them with
          // the keyboard when they overflow horizontally.
          return `<pre tabindex="0" aria-label="Code block"><code class="${className}">${hljs.highlight(text, { language }).value}</code></pre>`;
        },
        // Mark task-list checkboxes as plain disabled inputs, but give them an
        // accessible name so screen readers still announce what they are.
        checkbox({ checked }) {
          // The checkbox itself remains disabled because the markdown task is
          // informational, but the label preserves the meaning for assistive tech.
          return `<input ${checked ? 'checked="" ' : ''}disabled="" type="checkbox" aria-label="Checklist item">`;
        },
        // External links should open in a new tab, but internal blog links
        // should keep the normal in-app navigation.
        link({ href, title, tokens }) {
          if (!isExternalHttpLink(href)) {
            return false;
          }

          const titleAttribute = title
            ? ` title="${escapeAttribute(title)}"`
            : '';
          return `<a target="_blank" rel="noopener noreferrer" href="${escapeAttribute(
            href
          )}"${titleAttribute}>${this.parser.parseInline(tokens)}</a>`;
        }
      }
    });
  } catch (err) {
    console.error('Error setting up syntax highlighting:', err);
  }

  const context = await marked
    .use({
      gfm: true
    })
    // .use(markedFootnote())
    .parse(content);

  return (
    context
      // Preserve the existing blockquote icon layout by wrapping the non-icon
      // content in a dedicated container for the CSS grid.
      // Lift the icon out of its <p> and wrap all remaining blockquote content in
      // a single <div>. This gives the grid exactly two children: the icon (col 1)
      // and one wrapper (col 2), so the icon always spans the full content height.
      .replace(
        /<blockquote>\n?<p>(<span class=icon>[\s\S]*?<\/span>)([\s\S]*?)<\/p>([\s\S]*?)<\/blockquote>/g,
        (_, icon, firstParaRest, remaining) => {
          const content =
            (firstParaRest.trim() ? `<p>${firstParaRest}</p>` : '') + remaining;
          return `<blockquote>\n${icon}<div>${content}</div></blockquote>`;
        }
      )
  );
}

function escapeHtml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
}

function escapeAttribute(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;');
}

function isExternalHttpLink(href: string) {
  return /^https?:\/\//i.test(href);
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
        theme: matchMedia('(prefers-color-scheme: dark)').matches
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
