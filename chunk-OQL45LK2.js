import {
  userCard
} from "./chunk-G7MDJQAV.js";
import {
  Observable,
  retry
} from "./chunk-CYK2LKQE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// node_modules/.pnpm/sse.js@2.8.0/node_modules/sse.js/lib/sse.js
var SSE = function(url, options) {
  if (!(this instanceof SSE)) {
    return new SSE(url, options);
  }
  this.url = url;
  options = options || {};
  this.headers = options.headers || {};
  this.payload = options.payload !== void 0 ? options.payload : "";
  this.method = options.method || this.payload && "POST" || "GET";
  this.withCredentials = !!options.withCredentials;
  this.debug = !!options.debug;
  this.autoReconnect = options.autoReconnect !== void 0 ? options.autoReconnect : false;
  this.reconnectDelay = options.reconnectDelay !== void 0 ? options.reconnectDelay : 3e3;
  this.maxRetries = options.maxRetries !== void 0 ? options.maxRetries : null;
  this.retryCount = 0;
  this.reconnectTimer = null;
  this.useLastEventId = options.useLastEventId !== void 0 ? options.useLastEventId : true;
  this.FIELD_SEPARATOR = ":";
  this.listeners = {};
  this.xhr = null;
  this.readyState = SSE.INITIALIZING;
  this.progress = 0;
  this.chunk = "";
  this.lastEventId = "";
  this._hasParsedBom = false;
  this.addEventListener = function(type, listener) {
    if (this.listeners[type] === void 0) {
      this.listeners[type] = [];
    }
    if (this.listeners[type].indexOf(listener) === -1) {
      this.listeners[type].push(listener);
    }
  };
  this.removeEventListener = function(type, listener) {
    if (this.listeners[type] === void 0) {
      return;
    }
    const filtered = [];
    this.listeners[type].forEach(function(element) {
      if (element !== listener) {
        filtered.push(element);
      }
    });
    if (filtered.length === 0) {
      delete this.listeners[type];
    } else {
      this.listeners[type] = filtered;
    }
  };
  this.dispatchEvent = function(e) {
    if (!e) {
      return true;
    }
    if (this.debug) {
      console.debug(e);
    }
    e.source = this;
    const onHandler = "on" + e.type;
    if (this.hasOwnProperty(onHandler)) {
      this[onHandler].call(this, e);
      if (e.defaultPrevented) {
        return false;
      }
    }
    if (this.listeners[e.type]) {
      return this.listeners[e.type].every(function(callback) {
        callback(e);
        return !e.defaultPrevented;
      });
    }
    return true;
  };
  this._markClosed = function() {
    this.xhr = null;
    this.progress = 0;
    this.chunk = "";
    this._setReadyState(SSE.CLOSED);
    if (this.autoReconnect) {
      if (this.maxRetries !== null && this.retryCount >= this.maxRetries) {
        if (this.debug) {
          console.debug(
            `SSE max retries (${this.maxRetries}) reached, stopping reconnection attempts`
          );
        }
        this.autoReconnect = false;
        this.close();
        return;
      }
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
      }
      if (this.debug) {
        console.debug(
          `SSE will attempt to reconnect in ${this.reconnectDelay}ms (attempt ${this.retryCount + 1}${this.maxRetries ? "/" + this.maxRetries : ""})`
        );
      }
      this.reconnectTimer = setTimeout(() => {
        this.reconnectTimer = null;
        this.retryCount++;
        this.stream();
      }, this.reconnectDelay);
    }
  };
  this._setReadyState = function(state) {
    const event = new CustomEvent("readystatechange");
    event.readyState = state;
    this.readyState = state;
    this.dispatchEvent(event);
  };
  this._onStreamFailure = function(e) {
    const event = new CustomEvent("error");
    event.responseCode = e.currentTarget.status;
    event.data = e.currentTarget.response;
    this.dispatchEvent(event);
    this._markClosed();
  };
  this._onStreamAbort = function() {
    this.dispatchEvent(new CustomEvent("abort"));
    this._markClosed();
  };
  this._onStreamProgress = function(e) {
    if (!this.xhr) {
      return;
    }
    if (this.xhr.status < 200 || this.xhr.status >= 300) {
      this._onStreamFailure(e);
      return;
    }
    this.retryCount = 0;
    let data = this.xhr.responseText.substring(this.progress);
    this.progress += data.length;
    if (!this._hasParsedBom && this.chunk.length === 0) {
      if (data.charCodeAt(0) === 65279) {
        data = data.substring(1);
      }
      this._hasParsedBom = true;
    }
    const parts = (this.chunk + data).split(/(\r\n\r\n|\r\r|\n\n)/g);
    const lastPart = parts.pop();
    parts.forEach(
      function(part) {
        if (part.trim().length > 0) {
          this.dispatchEvent(this._parseEventChunk(part));
        }
      }.bind(this)
    );
    this.chunk = lastPart;
  };
  this._onStreamLoaded = function(e) {
    this._onStreamProgress(e);
    this.dispatchEvent(this._parseEventChunk(this.chunk));
    this.chunk = "";
    this._markClosed();
  };
  this._parseEventChunk = function(chunk) {
    if (!chunk || chunk.length === 0) {
      return null;
    }
    if (this.debug) {
      console.debug(chunk);
    }
    const e = { id: null, retry: null, data: null, event: null };
    chunk.split(/\n|\r\n|\r/).forEach(
      function(line) {
        const index = line.indexOf(this.FIELD_SEPARATOR);
        let field, value;
        if (index > 0) {
          const skip = line[index + 1] === " " ? 2 : 1;
          field = line.substring(0, index);
          value = line.substring(index + skip);
        } else if (index < 0) {
          field = line;
          value = "";
        } else {
          return;
        }
        if (!(field in e)) {
          return;
        }
        if (field === "data" && e[field] !== null) {
          e["data"] += "\n" + value;
        } else {
          e[field] = value;
        }
      }.bind(this)
    );
    if (e.id !== null && e.id.indexOf("\0") === -1) {
      this.lastEventId = e.id;
    }
    if (e.retry !== null && /^[0-9]+$/.test(e.retry)) {
      this.reconnectDelay = parseInt(e.retry, 10);
    }
    if (e.data === null) {
      return null;
    }
    const event = new CustomEvent(e.event || "message");
    event.id = e.id;
    event.data = e.data || "";
    event.lastEventId = this.lastEventId;
    return event;
  };
  this._onReadyStateChange = function() {
    if (!this.xhr) {
      return;
    }
    if (this.xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
      const headers2 = {};
      const headerPairs = this.xhr.getAllResponseHeaders().trim().split("\r\n");
      for (const headerPair of headerPairs) {
        const [key, ...valueParts] = headerPair.split(":");
        const value = valueParts.join(":").trim();
        headers2[key.trim().toLowerCase()] = headers2[key.trim().toLowerCase()] || [];
        headers2[key.trim().toLowerCase()].push(value);
      }
      const event = new CustomEvent("open");
      event.responseCode = this.xhr.status;
      event.headers = headers2;
      this.dispatchEvent(event);
      this._setReadyState(SSE.OPEN);
    }
  };
  this.stream = function() {
    if (this.xhr) {
      return;
    }
    this._setReadyState(SSE.CONNECTING);
    this.xhr = new XMLHttpRequest();
    this.xhr.addEventListener("progress", this._onStreamProgress.bind(this));
    this.xhr.addEventListener("load", this._onStreamLoaded.bind(this));
    this.xhr.addEventListener(
      "readystatechange",
      this._onReadyStateChange.bind(this)
    );
    this.xhr.addEventListener("error", this._onStreamFailure.bind(this));
    this.xhr.addEventListener("abort", this._onStreamAbort.bind(this));
    this.xhr.open(this.method, this.url);
    for (let header in this.headers) {
      this.xhr.setRequestHeader(header, this.headers[header]);
    }
    if (this.useLastEventId && this.lastEventId.length > 0) {
      this.xhr.setRequestHeader("Last-Event-ID", this.lastEventId);
    }
    this.xhr.withCredentials = this.withCredentials;
    this.xhr.send(this.payload);
  };
  this.close = function() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.autoReconnect = false;
    if (this.xhr) {
      this.xhr.abort();
    }
  };
  if (options.start === void 0 || options.start) {
    this.stream();
  }
};
SSE.INITIALIZING = -1;
SSE.CONNECTING = 0;
SSE.OPEN = 1;
SSE.CLOSED = 2;

// src/app/crud-stuff/couch-event-lister.ts
function couchEventLister(base = "http://localhost:5984", db) {
  const dbUrl = `${base}/${db}`;
  return new Observable((subscriber) => {
    const eventSource = new SSE(`${dbUrl}/_changes?feed=eventsource&include_docs=false&since=now&heartbeat=3000`, {
      withCredentials: true,
      autoReconnect: true,
      // Enable auto-reconnect
      reconnectDelay: 1e3,
      // Wait 1 seconds before reconnecting
      maxRetries: null,
      // Retry indefinitely (set a number to limit retries)
      useLastEventId: true,
      // Send Last-Event-ID header on reconnect (recommended)
      start: false
      // We'll start it manually after setting up handlers
    });
    eventSource.onmessage = (event) => {
      try {
        const { data } = event;
        if (data !== "\n") {
          const json = JSON.parse(data);
          subscriber.next(json);
        } else {
        }
      } catch (err) {
        console.error("Error parsing CouchDB event data:", err);
      }
    };
    eventSource.onerror = (error) => {
      console.error("CouchDB EventSource error:", error);
      subscriber.error(error);
      eventSource.close();
    };
    eventSource.stream();
    console.log("CouchDB event listener started");
    return () => {
      eventSource.close();
      console.log("CouchDB event listener closed");
    };
  }).pipe(
    retry(5)
    // Retry up to 5 times on error
  );
}

// src/app/crud-stuff/couch-helpers.ts
var baseFallback = "https://couchdb.eliasweb.nl";
var headers = {
  "Content-Type": "application/json",
  credentials: "include",
  mode: "cors"
};
async function goAddData(iterations = 5, ammountPerIteration = 1e3, base = baseFallback) {
  const fakerModule = import("./dist-I7CSMJRU.js");
  const module = await fakerModule;
  const url = `${base}/relations/_bulk_docs`;
  for (let i = 0; i <= iterations; i += 1) {
    const newRelations = [];
    for (let j = 0; j < ammountPerIteration; j += 1) {
      const relation = await userCard(module.faker);
      newRelations.push(__spreadProps(__spreadValues({}, relation), { _id: relation.id }));
    }
    await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ docs: newRelations })
    });
  }
}
async function createIndexes(base = baseFallback) {
  await createIndex("name", base);
  await createIndex("username", base);
  await createIndex("email", base);
  console.log("Indexes created");
}
async function createIndex(fieldName, base = baseFallback) {
  const url = `${base}/relations/_index`;
  const body = {
    index: { fields: [fieldName] },
    name: fieldName,
    type: "json",
    ddoc: "fieldIndex-" + fieldName
  };
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    throw new Error(`Error creating index: ${res.statusText}`);
  }
  const data = await res.json();
  console.log("Index created", data);
  return data;
}

// src/app/crud-stuff/utils/earlyread-undefined.ts
var earlyReadToUndefined = (data) => {
  try {
    return data();
  } catch (err) {
    const e = err;
    if (e?.message?.startsWith("NG0950")) {
      return void 0;
    }
    throw e;
  }
};

export {
  couchEventLister,
  goAddData,
  createIndexes,
  earlyReadToUndefined
};
