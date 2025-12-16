import { micromark } from 'micromark';
import { gfm, gfmHtml } from 'micromark-extension-gfm';
import { type Effects, type Extension, type State, type TokenizeContext } from 'micromark-util-types';
import {marked} from 'marked'

const icons = {
  'TIP': '💡',
  'WARNING': '⚠️',
  'IMPORTANT': '❗',
  'NOTE': '📝'
}

export async function parser(content: string) {
  try {
  const blockIcons = /\[\!(.+?)\]/g;
  for (const match of content.matchAll(blockIcons)) {
    const fullMatch = match[0];
    const iconName = match[1] as keyof typeof icons;
    const iconHtml = `<span class="icon">${icons[iconName]}</span>`;
    console.log(iconHtml);
    content = content.replace(fullMatch, iconHtml);
  }} catch (err) {
    console.error('Error processing block icons:', err);
  }

  const context = marked.use({
    gfm: true,
  }

  ).parse(content)

  return context.toString();

}

export async function mmparser(content: string) {
  try {
    const html = micromark(content, {
      allowDangerousHtml: true,
      extensions: [gfm(), quoteHeader],
      htmlExtensions: [gfmHtml()]
    });
    // console.log('html', html);
    return html;
  } catch (err) {
    console.error(err);
    return '<p>Error processing blog content.</p>';
  }
}

const QuoteHeaderConstruct = { name: 'quoteheader', tokenize: quoteHeaderTokenize };
const startToken = '['.charCodeAt(0);
const endToken = ']'.charCodeAt(0);
const kindToken = '!'.charCodeAt(0);

const quoteHeader: Extension = { text: { [startToken]: QuoteHeaderConstruct } };

function quoteHeaderTokenize(this: TokenizeContext, effects: Effects, ok: State, nok: State): State {
  return start;

  function start(code) {
    effects.enter('quoteHeader' as any);
    effects.enter('variableMarker' as any);
    effects.consume(code);
    effects.exit('variableMarker' as any);
    effects.enter('variableString' as any);
    return begin;
  }

  function begin(code) {
    return isEOL(code) ? nok(code) : inside(code);
  }

  function inside(code) {
    if (isEOL(code)) {
      return nok(code);
    }

    if (code === kindToken) {
      effects.enter('kindMarker' as any);
      effects.consume(code);
      effects.exit('kindMarker' as any);
      return insideKind;
    }

    console.log('code', String.fromCharCode(code));
    effects.consume(code);
    return inside;
  }

  function insideKind(code) {
    if (isEOL(code)) {
      return nok(code);
    }

    if (code === endToken) {
      effects.exit('variableString' as any);
      effects.enter('variableMarker' as any);
      effects.consume(code);
      effects.exit('variableMarker' as any);
      effects.exit('quoteHeader' as any);
      return inside;
    }
    return inside(code);
  }
}

function isEOL(code) {
  return code === -5 || code === -4 || code === -3 || code === null;
}
