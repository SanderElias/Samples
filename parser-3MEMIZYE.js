import "./chunk-KCHQYSDT.js";

// src/app/blogs/block-icon.ts
var icons = {
  TIP: "\u{1F4A1}",
  WARNING: "\u26A0\uFE0F",
  IMPORTANT: "\u2757",
  NOTE: "\u{1F6C8}",
  MENU: "\u2261",
  CLOSE: "\u2715",
  UHM: "\u2049\uFE0F"
};
var blockIconExtension = {
  name: "blockicon",
  level: "inline",
  start(src) {
    const index = src.indexOf("[!");
    return index >= 0 ? index : void 0;
  },
  tokenizer(src) {
    const match = src.match(/^\[\!(.+?)\]/);
    if (!match) {
      return;
    }
    return {
      type: "blockicon",
      raw: match[0],
      iconName: resolveIconName(match[1])
    };
  },
  renderer(token) {
    if (!isBlockIconToken(token)) {
      return false;
    }
    return renderIcon(token.iconName);
  }
};
function renderBlockIconBlockquote(token, parser2) {
  const iconBlockquote = extractIconBlockquote(token);
  if (!iconBlockquote) {
    return false;
  }
  const iconHtml = renderIcon(iconBlockquote.iconToken.iconName);
  const firstParagraphHtml = iconBlockquote.leadingTokens.length ? `<p>${parser2.parseInline(iconBlockquote.leadingTokens)}</p>` : "";
  const remainingHtml = iconBlockquote.trailingTokens.length ? parser2.parse(iconBlockquote.trailingTokens) : "";
  return `<blockquote>
${iconHtml}<div>${firstParagraphHtml}${remainingHtml}</div></blockquote>`;
}
function extractIconBlockquote(token) {
  const firstToken = token.tokens[0];
  const firstParagraphTokens = firstToken?.type === "paragraph" ? firstToken.tokens ?? [] : [];
  if (!firstToken || firstToken.type !== "paragraph" || firstParagraphTokens.length === 0) {
    return void 0;
  }
  const iconToken = firstParagraphTokens[0];
  if (!isBlockIconToken(iconToken)) {
    return void 0;
  }
  return {
    iconToken,
    leadingTokens: firstParagraphTokens.slice(1),
    trailingTokens: token.tokens.slice(1)
  };
}
function isBlockIconToken(token) {
  return token.type === "blockicon";
}
function resolveIconName(value) {
  const normalized = value.toUpperCase();
  return Object.keys(icons).includes(normalized) ? normalized : "UHM";
}
function renderIcon(iconName) {
  return `<span class=icon><svg role="img" class="icon" aria-label="${iconName}"><use href="#icon-${iconName.toLowerCase()}"></use></svg></span>`;
}

// src/app/blogs/mermaid.ts
var mermaidLoader;
var mermaidRenderCount = 0;
function escapeMermaidSource(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
}
function decodeHtmlEntities(value) {
  return value.replaceAll("&amp;gt;", ">").replaceAll("&amp;lt;", "<").replaceAll("&gt;", ">").replaceAll("&lt;", "<").replaceAll("&amp;", "&");
}
function loadMermaid() {
  if (!mermaidLoader) {
    mermaidLoader = import("./mermaid.core-5JNNSBUF.js").then(({ default: mermaid }) => mermaid);
  }
  return mermaidLoader;
}
if (typeof HTMLElement !== "undefined") {
  class MermaidDiagramElement extends HTMLElement {
    #renderToken = 0;
    connectedCallback() {
      void this.#render();
    }
    disconnectedCallback() {
      this.#renderToken++;
    }
    async #render() {
      const source = decodeHtmlEntities(this.textContent ?? "").trim();
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
        theme: typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "default"
      });
      const { svg, bindFunctions } = await mermaid.render(`mermaid-${++mermaidRenderCount}`, source);
      if (token !== this.#renderToken) {
        return;
      }
      this.innerHTML = svg;
      bindFunctions?.(this);
    }
  }
  if (typeof customElements !== "undefined" && !customElements.get("mermaid-diagram")) {
    customElements.define("mermaid-diagram", MermaidDiagramElement);
  }
}

// src/app/blogs/parser.ts
async function parser(content) {
  const { Marked } = await import("./marked.esm-FPULIYXD.js");
  let marked = new Marked();
  try {
    const { default: hljs } = await import("./core-POSF6I7K.js");
    const { default: typescript } = await import("./typescript-UVPZ7VR7.js");
    const { default: css } = await import("./css-HVQWK7SY.js");
    const { default: html } = await import("./xml-SZAGSW6J.js");
    const { default: javascript } = await import("./javascript-NN3KFZMS.js");
    const { default: plaintext } = await import("./plaintext-FGHQEFGB.js");
    hljs.registerLanguage("plaintext", plaintext);
    hljs.registerLanguage("typescript", typescript);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("html", html);
    hljs.registerLanguage("javascript", javascript);
    marked = new Marked();
    marked.use({
      extensions: [blockIconExtension],
      renderer: {
        // Mermaid fences become a custom element so the browser can render
        // them later with the local Mermaid package.
        code({ text, lang }) {
          if (lang?.toLowerCase() === "mermaid") {
            return `<mermaid-diagram>${escapeMermaidSource(text.trim())}</mermaid-diagram>`;
          }
          const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
          const className = lang ? `hljs language-${lang}` : "hljs";
          return `<pre tabindex="0" aria-label="Code block"><code class="${className}">${hljs.highlight(text, { language }).value}</code></pre>`;
        },
        // Mark task-list checkboxes as plain disabled inputs, but give them an
        // accessible name so screen readers still announce what they are.
        checkbox({ checked }) {
          return `<input ${checked ? 'checked="" ' : ""}disabled="" type="checkbox" aria-label="Checklist item">`;
        },
        // External links should open in a new tab, but internal blog links
        // should keep the normal in-app navigation.
        link({ href, title, tokens }) {
          if (!isExternalHttpLink(href)) {
            return false;
          }
          const titleAttribute = title ? ` title="${escapeAttribute(title)}"` : "";
          return `<a target="_blank" rel="noopener noreferrer" href="${escapeAttribute(href)}"${titleAttribute}>${this.parser.parseInline(tokens)}</a>`;
        },
        blockquote(token) {
          return renderBlockIconBlockquote(token, this.parser);
        }
      }
    });
  } catch (err) {
    console.error("Error setting up syntax highlighting:", err);
  }
  const context = await marked.use({
    gfm: true
  }).parse(content);
  return context;
}
function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}
function isExternalHttpLink(href) {
  return /^https?:\/\//i.test(href);
}
export {
  parser
};
