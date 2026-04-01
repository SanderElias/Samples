import { blockIconExtension, renderBlockIconBlockquote } from './block-icon';
import { escapeMermaidSource } from './mermaid';

export type MarkDown = string;

export async function parser(content: MarkDown): Promise<string> {
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
    // Keep all custom Markdown parsing and rendering in one marked hook so the
    // special cases stay close to the default lexer and renderer they extend.
    marked.use({
      extensions: [blockIconExtension],
      renderer: {
        // Mermaid fences become a custom element so the browser can render
        // them later with the local Mermaid package.
        code({ text, lang }) {
          if (lang?.toLowerCase() === 'mermaid') {
            return `<mermaid-diagram>${escapeMermaidSource(
              text.trim()
            )}</mermaid-diagram>`;
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
        },
        blockquote(token) {
          // The icon is already a token by the time we render, so the layout
          // decision is based on the parsed token tree instead of string search.
          return renderBlockIconBlockquote(token, this.parser);
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

  return context;
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
