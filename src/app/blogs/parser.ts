import { marked } from 'marked';
import markedFootnote from 'marked-footnote'

const icons = {
  TIP: '💡',
  WARNING: '⚠️',
  IMPORTANT: '❗',
  NOTE: '🛈'
};

export async function parser(content: string) {
  try {
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

  const context = marked
    .use({
      gfm: true
    })
    .use(markedFootnote())
    .parse(content);

  return context.toString();
}

