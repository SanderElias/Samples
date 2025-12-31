const icons = {
  TIP: '💡',
  WARNING: '⚠️',
  IMPORTANT: '❗',
  NOTE: '🛈'
};

export type MarkDown = string;

export async function parser(content: MarkDown): Promise<string> {
  try {
    // replace GFM block icons like [!TIP], [!WARNING], [!IMPORTANT], [!NOTE]
    // with a span containing the corresponding icon, so I can style it with CSS
    const blockIcons = /\[\!(.+?)\]/g;
    for (const match of content.matchAll(blockIcons)) {
      const fullMatch = match[0];
      const iconName = match[1] as keyof typeof icons;
      const iconHtml = `<span class="icon" data-icon="${iconName}">${icons[iconName]}</span>`;
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
    const { default: typescript } = await import('highlight.js/lib/languages/typescript');
    const { default: css } = await import('highlight.js/lib/languages/css');
    const { default: html } = await import('highlight.js/lib/languages/xml');
    const { default: javascript } = await import('highlight.js/lib/languages/javascript');
    const { default: plaintext } = await import('highlight.js/lib/languages/plaintext');

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
  return context.replaceAll('href="http', 'target="_blank" rel="noopener noreferrer" href="http');
}
