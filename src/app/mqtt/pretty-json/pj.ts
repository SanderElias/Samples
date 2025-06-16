/**
 * copy'd this from: https://github.com/mohsen1/pretty-json/tree/main
 * added a way to set the json after first render.
 */


class PrettyJSONError extends Error {
  /**
   *
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = 'PrettyJSONError';
  }
}

export class PrettyJSONCustomElement extends HTMLElement {
  /**
   * @type {any}
   */
  #input;

  /**
   * @type {boolean}
   */
  #isExpanded;

  static get observedAttributes() {
    return ['expand', 'key', 'truncate-string'];
  }

  // Default colors and styles
  static DEFAULT_VARIABLES = {
    light: {
      keyColor: '#cc0000',
      arrowColor: '#737373',
      braceColor: '#0030f0',
      bracketColor: '#0030f0',
      stringColor: '#009900',
      numberColor: '#0000ff',
      nullColor: '#666666',
      booleanColor: '#d23c91',
      commaColor: '#666666',
      ellipsisColor: '#666666',
      indent: '2rem',
      fontSize: '1rem',
      fontFamily: 'monospace'
    },
    dark: {
      keyColor: '#f73d3d',
      arrowColor: '#6c6c6c',
      braceColor: '#0690bc',
      bracketColor: '#0690bc',
      stringColor: '#21c521',
      numberColor: '#0078b3',
      nullColor: '#8c8888',
      booleanColor: '#c737b3',
      commaColor: '#848181',
      ellipsisColor: '#c2c2c2',
      indent: '2rem',
      fontSize: '1rem',
      fontFamily: 'monospace'
    }
  };

  #getCssVariables() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const variables = prefersDarkMode ? PrettyJSONCustomElement.DEFAULT_VARIABLES.dark : PrettyJSONCustomElement.DEFAULT_VARIABLES.light;
    if (!this.shadowRoot) {
      return variables;
    }
    const style = getComputedStyle(this.shadowRoot.host);

    return {
      keyColor: style.getPropertyValue('--key-color') || variables.keyColor,
      arrowColor: style.getPropertyValue('--arrow-color') || variables.arrowColor,
      braceColor: style.getPropertyValue('--brace-color') || variables.braceColor,
      bracketColor: style.getPropertyValue('--bracket-color') || variables.bracketColor,
      stringColor: style.getPropertyValue('--string-color') || variables.stringColor,
      numberColor: style.getPropertyValue('--number-color') || variables.numberColor,
      nullColor: style.getPropertyValue('--null-color') || variables.nullColor,
      booleanColor: style.getPropertyValue('--boolean-color') || variables.booleanColor,
      commaColor: style.getPropertyValue('--comma-color') || variables.commaColor,
      ellipsisColor: style.getPropertyValue('--ellipsis-color') || variables.ellipsisColor,
      indent: style.getPropertyValue('--indent') || variables.indent,
      fontSize: style.getPropertyValue('--font-size') || variables.fontSize,
      fontFamily: style.getPropertyValue('--font-family') || variables.fontFamily
    };
  }

  get #styles() {
    const variables = this.#getCssVariables();
    return `/* css */
    :host {
      --key-color: ${variables.keyColor};
      --arrow-color: ${variables.arrowColor};
      --brace-color: ${variables.braceColor};
      --bracket-color: ${variables.bracketColor};
      --string-color: ${variables.stringColor};
      --number-color: ${variables.numberColor};
      --null-color: ${variables.nullColor};
      --boolean-color: ${variables.booleanColor};
      --comma-color: ${variables.commaColor};
      --ellipsis-color: ${variables.ellipsisColor};
      --indent: ${variables.indent};
      --font-size: ${variables.fontSize};
      --font-family: ${variables.fontFamily};
    }
    button {
      border: none;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      font-size: var(--font-size);
      vertical-align: text-bottom;
    }
    .container {
      font-family: var(--font-family);
      font-size: var(--font-size);
    }
    .key {
      color: var(--key-color);
      margin-right: 0.5rem;
      padding: 0;
    }
    .key .arrow {
      width: 1rem;
      height: 0.75rem;
      margin-left: -1.25rem;
      padding-right: 0.25rem;
      vertical-align: baseline;
    }
    .arrow .triangle {
      fill: var(--arrow-color);
    }
    .comma {
      color: var(--comma-color);
    }
    .brace {
      color: var(--brace-color);
    }
    .string,
    .url {
      color: var(--string-color);
    }
    .number,
    .bigint {
      color: var(--number-color);
    }
    .null {
      color: var(--null-color);
    }
    .boolean {
      color: var(--boolean-color);
    }

    .ellipsis {
      width: 1rem;
      padding: 0;
      color: var(--ellipsis-color);
    }
    .ellipsis::after {
      content: "…";
    }
    .string .ellipsis::after {
      color: var(--string-color);
    }
    .triangle {
      fill: black;
      stroke: black;
      stroke-width: 0;
    }
    .row {
      padding-left: var(--indent);
    }
    .row .row {
      display: block;
    }
    .row > div,
    .row > span {
      display: inline-block;
    }
  `;
  }

  constructor() {
    super();

    this.#isExpanded = true;
    this.attachShadow({ mode: 'open' });
  }

  get #expandAttributeValue() {
    const expandAttribute = this.getAttribute('expand');
    if (expandAttribute === null) {
      return 1;
    }
    const expandValue = Number.parseInt(expandAttribute);
    return isNaN(expandValue) || expandValue < 0 ? 0 : expandValue;
  }

  get #truncateStringAttributeValue() {
    const DEFAULT_TRUNCATE_STRING = 500;
    const truncateStringAttribute = this.getAttribute('truncate-string');
    if (truncateStringAttribute === null) {
      return DEFAULT_TRUNCATE_STRING;
    }
    const truncateStringValue = Number.parseInt(truncateStringAttribute);
    return isNaN(truncateStringValue) || truncateStringValue < 0 ? 0 : truncateStringValue;
  }

  #toggle() {
    this.#isExpanded = !this.#isExpanded;
    this.setAttribute('expand', this.#isExpanded ? String(this.#expandAttributeValue + 1) : '0');
    this.#render();
  }

  /**
   * @param {Record<any, any> | any[] | Primitive | AnyFunction} input
   * @param {number} expand
   * @param {string} [key]
   * @returns {HTMLElement}
   */
  #createChild(input, expand, key) {
    if (this.#isPrimitiveValue(input)) {
      const container = this.#createContainer();
      container.appendChild(this.#createPrimitiveValueElement(input));
      return container;
    }
    return this.#createObjectOrArray(input);
  }

  /**
   * @param {any} input
   * @returns {input is Primitive}
   */
  #isPrimitiveValue(input) {
    return typeof input !== 'object' || input === null;
  }

  #isValidStringURL() {
    try {
      new URL(this.#input);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * @param {Primitive} input
   * @returns {HTMLElement}
   */
  #createPrimitiveValueElement(input) {
    const container = document.createElement('div');
    const type = typeof input === 'object' ? 'null' : typeof input;
    container.className = `primitive value ${type}`;
    if (typeof input === 'string') {
      if (this.#isValidStringURL()) {
        const anchor = document.createElement('a');
        anchor.className = 'url';
        anchor.href = this.#input;
        anchor.target = '_blank';
        anchor.textContent = input;
        container.append('"', anchor, '"');
      } else if (input.length > this.#truncateStringAttributeValue) {
        container.appendChild(this.#createTruncatedStringElement(input));
      } else {
        container.textContent = JSON.stringify(input);
      }
    } else {
      container.textContent = JSON.stringify(input);
    }
    return container;
  }

  /**
   * @param {string} input
   */
  #createTruncatedStringElement(input) {
    const container = document.createElement('div');
    container.dataset.expandedTimes = '1';
    container.className = 'truncated string';
    const ellipsis = document.createElement('button');
    ellipsis.className = 'ellipsis';

    ellipsis.addEventListener('click', () => {
      const expandedTimes = Number.parseInt(container.dataset.expandedTimes ?? '1');
      container.dataset.expandedTimes = String(expandedTimes + 1);
      const expandedString = input.slice(0, (expandedTimes + 1) * this.#truncateStringAttributeValue);
      const textChild = container.childNodes[1];
      container.replaceChild(document.createTextNode(expandedString), textChild);
    });

    container.append('"', input.slice(0, this.#truncateStringAttributeValue), ellipsis, '"');
    return container;
  }

  /**
   * @returns {HTMLElement}
   */
  #createContainer() {
    const container = document.createElement('div');
    container.className = 'container';
    return container;
  }

  /**
   * @param {Record<any, any> | any[]} object
   * @returns {HTMLElement}
   */
  #createObjectOrArray(object) {
    const isArray = Array.isArray(object);
    const objectKeyName = this.getAttribute('key');
    const expand = this.#expandAttributeValue;
    const truncateString = this.#truncateStringAttributeValue; // Get the truncate string attribute value

    const container = this.#createContainer();
    container.classList.add(isArray ? 'array' : 'object');

    if (objectKeyName) {
      // if objectKeyName is provided, then it is a row
      container.classList.add('row');
      const keyElement = this.#createKeyElement(objectKeyName, {
        withArrow: true,
        expanded: this.#isExpanded
      });
      keyElement.addEventListener('click', this.#toggle.bind(this));
      container.appendChild(keyElement);
    }

    const openingBrace = document.createElement('span');
    openingBrace.className = 'open brace';
    openingBrace.textContent = isArray ? '[' : '{';
    container.appendChild(openingBrace);

    const closingBrace = document.createElement('span');
    closingBrace.className = 'close brace';
    closingBrace.textContent = isArray ? ']' : '}';

    if (!this.#isExpanded) {
      const ellipsis = document.createElement('button');
      ellipsis.className = 'ellipsis';
      container.appendChild(ellipsis);
      ellipsis.addEventListener('click', this.#toggle.bind(this));
      container.appendChild(closingBrace);
      return container;
    }

    Object.entries(object).forEach(([key, value], index) => {
      // for primitives we make a row here
      if (this.#isPrimitiveValue(value)) {
        const rowContainer = document.createElement('div');
        rowContainer.className = 'row';
        if (!isArray) {
          const keyElement = this.#createKeyElement(key);
          rowContainer.appendChild(keyElement);
        }
        rowContainer.appendChild(this.#createPrimitiveValueElement(value));
        container.appendChild(rowContainer);
        const isLast = index === Object.keys(object).length - 1;
        if (!isLast) {
          const comma = document.createElement('span');
          comma.className = 'comma';
          comma.textContent = ',';
          rowContainer.appendChild(comma);
        }
        return;
      }

      // for objects and arrays we make a "container row"
      const prettyJsonElement = document.createElement('pretty-json');
      prettyJsonElement.textContent = JSON.stringify(value);
      prettyJsonElement.setAttribute('expand', String(expand - 1));
      prettyJsonElement.setAttribute('truncate-string', String(truncateString)); // Set the truncate-string attribute
      prettyJsonElement.setAttribute('key', key);
      container.appendChild(prettyJsonElement);
    });

    container.appendChild(closingBrace);
    return container;
  }

  /**
   * @param {{ expanded?: boolean }} [options]
   * @returns {SVGElement}
   */
  #createArrowElement({ expanded = false } = {}) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100');
    svg.setAttribute('height', '100');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('class', 'arrow');
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

    polygon.setAttribute('class', 'triangle');
    polygon.setAttribute('points', '0,0 100,50 0,100');

    if (expanded) {
      polygon.setAttribute('transform', 'rotate(90 50 50)');
    }

    svg.appendChild(polygon);

    return svg;
  }

  /**
   * @param {string} key
   * @param {{ withArrow?: boolean, expanded?: boolean }} [options]
   * @returns {HTMLElement}
   */
  #createKeyElement(key, { withArrow = false, expanded = false } = {}) {
    const keyElement = document.createElement(withArrow ? 'button' : 'span');
    keyElement.className = 'key';
    if (withArrow) {
      const arrow = this.#createArrowElement({ expanded });
      keyElement.appendChild(arrow);
    }
    const keyName = document.createElement('span');
    keyName.className = 'key-name';
    keyName.textContent = JSON.stringify(key);
    keyElement.appendChild(keyName);
    const colon = document.createElement('span');
    colon.className = 'colon';
    colon.textContent = ':';
    keyElement.appendChild(colon);
    return keyElement;
  }

  #render() {
    if (!this.shadowRoot) {
      throw new PrettyJSONError('Shadow root not available');
    }
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(this.#createChild(this.#input, this.#expandAttributeValue, undefined));

    if (this.shadowRoot.querySelector('[data-pretty-json]')) {
      return;
    }

    const styles = document.createElement('style');
    styles.setAttribute('data-pretty-json', '');
    styles.textContent = this.#styles;
    this.shadowRoot.appendChild(styles);
  }

  /**
   * Handle when attributes change
   * @param {string} name
   * @param {string} _oldValue
   * @param {string | null} newValue
   */
  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === 'expand') {
      if (newValue === null) {
        this.#isExpanded = false;
      } else {
        const expandValue = Number.parseInt(newValue);
        this.#isExpanded = !isNaN(expandValue) && expandValue > 0;
      }
      this.#render();
    }
  }

  connectedCallback() {
    try {
      this.#input = JSON.parse(this.textContent ?? '');
    } catch (jsonParseError) {
      const message = `Error parsing JSON: ${jsonParseError instanceof Error ? jsonParseError.message : 'Unknown error'}`;
      throw new PrettyJSONError(message);
    }
    this.#render();
  }

  /**
   * I added this method to allow updating the JSON after the first render.
   * This is useful for cases where the JSON data changes dynamically.
   * @param json
   */
  update(json: Record<string, any>) {
    this.#input = json;
    this.#render();
  }
}
