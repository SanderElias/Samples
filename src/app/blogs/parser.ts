import { Str } from 'messagepack';
import { micromark } from 'micromark';
import { gfm, gfmHtml } from 'micromark-extension-gfm';
import { Extension, type Effects, type State, type TokenizeContext } from 'micromark-util-types';

export async function parser(content: string) {
  const html = micromark(content, {
    allowDangerousHtml: true,
    extensions: [gfm(), quoteHeader],
    htmlExtensions: [gfmHtml()]
  });
  // console.log('html', html);
  return html;
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
