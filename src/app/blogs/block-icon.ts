import type { Token, Tokens, TokenizerAndRendererExtension } from 'marked';

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

interface BlockIconToken extends Tokens.Generic {
  type: 'blockicon';
  iconName: IconNames;
}

interface ParserLike {
  parse(tokens: Token[]): string;
  parseInline(tokens: Token[]): string;
}

export const blockIconExtension: TokenizerAndRendererExtension = {
  name: 'blockicon',
  level: 'inline',
  start(src: string) {
    const index = src.indexOf('[!');
    return index >= 0 ? index : undefined;
  },
  tokenizer(src: string) {
    const match = src.match(/^\[\!(.+?)\]/);
    if (!match) {
      return;
    }

    return {
      type: 'blockicon',
      raw: match[0],
      iconName: resolveIconName(match[1])
    } satisfies BlockIconToken;
  },
  renderer(token: Tokens.Generic) {
    if (!isBlockIconToken(token)) {
      return false;
    }

    return renderIcon(token.iconName);
  }
};

export function renderBlockIconBlockquote(
  token: Tokens.Blockquote,
  parser: ParserLike
) {
  const iconBlockquote = extractIconBlockquote(token);
  if (!iconBlockquote) {
    return false;
  }

  const iconHtml = renderIcon(iconBlockquote.iconToken.iconName);
  const firstParagraphHtml = iconBlockquote.leadingTokens.length
    ? `<p>${parser.parseInline(iconBlockquote.leadingTokens)}</p>`
    : '';
  const remainingHtml = iconBlockquote.trailingTokens.length
    ? parser.parse(iconBlockquote.trailingTokens)
    : '';

  return `<blockquote>\n${iconHtml}<div>${firstParagraphHtml}${remainingHtml}</div></blockquote>`;
}

function extractIconBlockquote(token: Tokens.Blockquote) {
  const firstToken = token.tokens[0];
  const firstParagraphTokens =
    firstToken?.type === 'paragraph' ? (firstToken.tokens ?? []) : [];
  if (
    !firstToken ||
    firstToken.type !== 'paragraph' ||
    firstParagraphTokens.length === 0
  ) {
    return undefined;
  }

  const iconToken = firstParagraphTokens[0];
  if (!isBlockIconToken(iconToken)) {
    return undefined;
  }

  return {
    iconToken,
    leadingTokens: firstParagraphTokens.slice(1),
    trailingTokens: token.tokens.slice(1)
  };
}

function isBlockIconToken(
  token: Token | BlockIconToken
): token is BlockIconToken {
  return token.type === 'blockicon';
}

function resolveIconName(value: string): IconNames {
  const normalized = value.toUpperCase();
  return Object.keys(icons).includes(normalized)
    ? (normalized as IconNames)
    : 'UHM';
}

function renderIcon(iconName: IconNames) {
  return `<span class=icon><svg role="img" class="icon" aria-label="${iconName}"><use href="#icon-${iconName.toLowerCase()}"></use></svg></span>`;
}
