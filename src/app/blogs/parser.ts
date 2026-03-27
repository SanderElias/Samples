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
    const { markedHighlight } = await import('marked-highlight');
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

    marked = new Marked(
      markedHighlight({
        emptyLangClass: 'hljs',
        langPrefix: 'hljs language-',
        highlight(code, lang, info) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        }
      })
    );
  } catch (err) {
    console.error('Error setting up syntax highlighting:', err);
  }

  const context = await marked
    .use({
      gfm: true
    })
    // .use(markedFootnote())
    .parse(content);

  // by default all links open in the same tab, this forces external links to open in a new tab
  return context
    // Make scrollable code block containers keyboard-focusable for a11y.
    .replaceAll('<pre>', '<pre tabindex="0" aria-label="Code block">')
    // Ensure markdown task-list checkboxes have accessible names.
    .replaceAll(
      '<input checked="" disabled="" type="checkbox">',
      '<input checked="" disabled="" type="checkbox" aria-label="Checklist item">'
    )
    .replaceAll(
      '<input disabled="" type="checkbox">',
      '<input disabled="" type="checkbox" aria-label="Checklist item">'
    )
    .replaceAll('href="http', 'target="_blank" rel="noopener noreferrer" href="http')
    // Lift the icon out of its <p> and wrap all remaining blockquote content in
    // a single <div>. This gives the grid exactly two children: the icon (col 1)
    // and one wrapper (col 2), so the icon always spans the full content height.
    .replace(
      /<blockquote>\n?<p>(<span class=icon>[\s\S]*?<\/span>)([\s\S]*?)<\/p>([\s\S]*?)<\/blockquote>/g,
      (_, icon, firstParaRest, remaining) => {
        const content = (firstParaRest.trim() ? `<p>${firstParaRest}</p>` : '') + remaining;
        return `<blockquote>\n${icon}<div>${content}</div></blockquote>`;
      }
    );
}
