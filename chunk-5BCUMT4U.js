import {
  couchEventLister,
  earlyReadToUndefined,
  goAddData
} from "./chunk-UUZ4MBE7.js";
import {
  HttpCache,
  addCachingContext
} from "./chunk-GO6WCT67.js";
import {
  NotifyDialogService
} from "./chunk-U7E63UVH.js";
import {
  rxResource,
  toSignal
} from "./chunk-T62MM3GH.js";
import {
  LoggedIn
} from "./chunk-3GOW2HFT.js";
import {
  deepDiff,
  deepEqual
} from "./chunk-VOWQP44C.js";
import {
  HttpClient,
  httpResource
} from "./chunk-NMBS7RAC.js";
import {
  isPlatformBrowser
} from "./chunk-PESRSGYJ.js";
import {
  DestroyRef,
  EMPTY,
  Injectable,
  Injector,
  NEVER,
  Observable,
  PLATFORM_ID,
  ReplaySubject,
  Subject,
  combineLatest,
  computed,
  debounceTime,
  distinctUntilChanged,
  effect,
  filter,
  firstValueFrom,
  inject,
  map,
  of,
  setClassMetadata,
  share,
  shareReplay,
  signal,
  startWith,
  tap,
  timer,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-LHOZ36SL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KCHQYSDT.js";

// src/app/mqtt/mqtt-device-settings.service.ts
var httpCachedOptions = __spreadValues({}, addCachingContext({
  credentials: "include",
  mode: "cors"
}));
var MqttDeviceSettingsService = class _MqttDeviceSettingsService {
  #http;
  #notifyDialog;
  #cache;
  #des;
  #refresh;
  // guard to avoid repeatedly attempting database creation when multiple
  // errors fire in quick succession (prevents repeated PUT /<db>/ calls)
  #dbCreateAttempted;
  #listRes;
  #list;
  constructor() {
    this.user = inject(LoggedIn).user;
    this.injector = inject(Injector);
    this.base = computed(
      () => `https://${this.user() === void 0 ? "demodb" : "couchdb"}.eliasweb.nl`,
      ...ngDevMode ? [{ debugName: "base" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.baseUrl = computed(
      () => `${this.base()}/mqtt_device_settings`,
      ...ngDevMode ? [{ debugName: "baseUrl" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.idUrl = (id, rev) => `${this.baseUrl()}/${id}${rev ? `?rev=${rev}` : ""}`;
    this.defaultOptions = {
      alertWhenLost: false,
      alertWhenOff: false,
      allowPowerControl: false,
      isSubDevice: false
    };
    this.extractedOptions = (options) => ({
      alertWhenLost: options?.alertWhenLost ?? this.defaultOptions.alertWhenLost,
      alertWhenOff: options?.alertWhenOff ?? this.defaultOptions.alertWhenOff,
      allowPowerControl: options?.allowPowerControl ?? this.defaultOptions.allowPowerControl,
      isSubDevice: options?.isSubDevice ?? this.defaultOptions.isSubDevice,
      maxPower: options?.maxPower
    });
    this.optionsFromDevResource = (resource) => computed(() => {
      if (resource.isLoading())
        return this.defaultOptions;
      const data = resource.hasValue() && resource.value();
      if (!data)
        return this.defaultOptions;
      return this.extractedOptions(data);
    }, { debugName: "OptionsFromDevResource" });
    this.#http = inject(HttpClient);
    this.#notifyDialog = inject(NotifyDialogService);
    this.#cache = inject(HttpCache);
    this.#des = inject(DestroyRef);
    this.#refresh = signal(
      0,
      ...ngDevMode ? [{ debugName: "#refresh" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.#dbCreateAttempted = false;
    this.#listRes = httpResource(() => this.user() === void 0 ? void 0 : {
      url: `${this.baseUrl()}/_all_docs?include_docs=false&v=${this.#refresh()}`,
      method: "POST",
      body: {
        fields: ["id", "_rev"]
      },
      credentials: "include",
      mode: "cors"
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "#listRes" } : (
      /* istanbul ignore next */
      {}
    )), {
      defaultValue: [],
      parse: (response) => (response?.rows ?? []).map((i) => [i.id, i.value.rev])
    }));
    this.#list = this.#listRes.value;
    this.list = this.#list.asReadonly();
    this.listIsLoading = this.#listRes.isLoading;
    this._DbError = effect(
      async () => {
        const err = this.#listRes.error();
        if (!err)
          return;
        const reason = err.error?.reason;
        if (err?.status === 412 || err?.error?.error === "file_exists" || typeof reason === "string" && reason.toLowerCase().includes("file exists")) {
          return;
        }
        if (!reason) {
          console.error("Unknown error", err);
          this.#notifyDialog.show({
            title: "CouchDB not found?",
            message: `This service expects CouchDB to be available.`
          });
          return;
        }
        if (reason.startsWith("No index exists")) {
          throw new Error("Index missing, please create the required database and indexes by running the createDbAndIndexes function in the console.");
        }
        if (reason.startsWith("Database does not exist")) {
          if (this.#dbCreateAttempted) {
            console.info("Database create already attempted, skipping.");
            return;
          }
          this.#dbCreateAttempted = true;
          try {
            const checkRes = await fetch(this.baseUrl(), {
              method: "GET",
              credentials: "include",
              mode: "cors"
            });
            if (checkRes.ok) {
              this.#listRes.reload();
              return;
            }
            await untracked(async () => await firstValueFrom(this.#http.put(this.baseUrl(), {}, httpCachedOptions)));
            await goAddData();
            this.#listRes.reload();
          } catch (e) {
            console.error("Error creating database", e);
          }
        }
        this.#notifyDialog.show({
          title: "CouchDB error?",
          message: `There is an unknown error with the mqtt_device_settings database.`
        });
      },
      ...ngDevMode ? [{ debugName: "_DbError" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.create = async (data) => {
      if (!data?.id)
        return false;
      const url = this.idUrl(data.id);
      try {
        const response = await firstValueFrom(this.#http.put(url, data, httpCachedOptions));
        this.#list.update((oldList) => [
          [data.id, ""],
          ...oldList
        ]);
        return true;
      } catch (e) {
        const { error: { error: err, reason } = {} } = e ?? {};
        if (err === "forbidden") {
          await this.#notifyDialog.show({
            title: "You are not allowed to add data",
            message: "Write access is not available for this account."
          });
          return false;
        }
        console.error("Error creating mqtt device setting", e);
        return false;
      }
    };
    this.read = (ids, options = httpCachedOptions) => {
      const id = computed(
        () => earlyReadToUndefined(ids) ?? "",
        ...ngDevMode ? [{ debugName: "id" }] : (
          /* istanbul ignore next */
          []
        )
      );
      const rev = computed(
        () => {
          const list = earlyReadToUndefined(this.list) ?? [];
          const item = list.find((i) => i[0] === id());
          return item ? item[1] : void 0;
        },
        ...ngDevMode ? [{ debugName: "rev" }] : (
          /* istanbul ignore next */
          []
        )
      );
      const httpOptions = computed(
        () => {
          if (!id())
            return void 0;
          return __spreadValues({ url: this.idUrl(id(), rev()) }, options);
        },
        ...ngDevMode ? [{ debugName: "httpOptions" }] : (
          /* istanbul ignore next */
          []
        )
      );
      return httpResource(httpOptions, {
        defaultValue: { id: id() },
        injector: this.injector
      });
    };
    this.update = async (data) => {
      const id = data?.id;
      if (!id)
        return { result: "error", error: "missing-id" };
      const url = this.idUrl(id);
      const oldData = await firstValueFrom(this.#http.get(url, httpCachedOptions));
      const toSend = __spreadProps(__spreadValues({}, data), { _rev: oldData._rev });
      if (deepEqual(oldData, toSend))
        return { result: "noChange" };
      try {
        const { rev } = await firstValueFrom(this.#http.put(url, toSend, httpCachedOptions));
        this.#list.update((oldList) => oldList.reduce((acc, item) => [
          ...acc,
          [item[0], item[0] === id ? rev : item[1]]
        ], []));
        return { result: "ok", rev };
      } catch (e) {
        const { error: { error: err, reason } = {} } = e ?? {};
        if (err === "forbidden") {
          await this.#notifyDialog.show({
            title: "You are not allowed to update this data",
            message: "This account has no write access."
          });
          return { result: "error", error: "forbidden" };
        }
        if (reason?.startsWith("Document update conflict")) {
          try {
            this.#cache.purge(url);
            const myDiff = deepDiff(oldData, data);
            const remoteData = await firstValueFrom(
              this.#http.get(url, { mode: "cors", credentials: "include" })
              // don't use cache here to ensure we get the latest revision and data, even if it's a bit slower
            );
            console.log({ myDiff, remoteData });
            const merged = __spreadProps(__spreadValues(__spreadValues({}, remoteData), myDiff), {
              // for maxPower, we want to keep the highest value to avoid losing important data about power usage
              maxPower: Math.max(remoteData.maxPower || 0, data.maxPower || 0, oldData.maxPower || 0)
            });
            console.log(JSON.stringify(merged, null, 2));
            return { result: "conflict", error: "conflict", merged };
          } catch {
            this.#notifyDialog.show({
              title: "Unrecoverable error",
              message: "Please reload the app."
            });
          }
        }
        return { result: "error", error: e };
      }
    };
    this.delete = async (item) => {
      const id = item.id;
      const url = this.idUrl(id) + `?rev=${item._rev}`;
      try {
        await firstValueFrom(this.#http.delete(url, httpCachedOptions));
      } catch (e) {
        const { error: { error: err, reason } = {} } = e ?? {};
        if (err === "forbidden") {
          this.#notifyDialog.show({
            title: "Not allowed",
            message: "No delete permission."
          });
          return false;
        }
        if (err === "not_found" && reason === "deleted") {
          console.log("already deleted");
        } else {
          this.#cache.purge(url);
          this.#notifyDialog.show({
            title: "Data updated",
            message: "Data changed; review and try again."
          });
          const { _rev } = await firstValueFrom(this.#http.get(url, httpCachedOptions));
          this.#list.update((oldList) => [
            ...oldList.map((i) => i[0] === id ? [i[0], _rev] : i)
          ]);
          return false;
        }
      }
      this.#list.update((oldList) => oldList.filter((i) => i[0] !== id));
      return true;
    };
    this.reFetch = async (ids) => {
      const url = this.idUrl(ids);
      return firstValueFrom(this.#http.get(url, httpCachedOptions));
    };
    this.info = async () => {
      const url = this.baseUrl();
      return firstValueFrom(this.#http.get(url, httpCachedOptions));
    };
    setTimeout(() => {
      if (!this.user())
        return;
      const s = couchEventLister(this.base(), "mqtt_device_settings").subscribe((event) => {
        console.log("CouchDB change event");
        this.#cache.purge(this.idUrl(event.id));
        if (event.deleted) {
          this.#list.update((oldList) => oldList.filter((i) => i[0] !== event.id));
        } else {
          const rev = event.changes[0]?.rev ?? Date.now().toString(36);
          this.#list.update((oldList) => {
            const idx = oldList.findIndex((i) => i[0] === event.id);
            if (idx === -1) {
              return [...oldList, [event.id, rev]];
            } else {
              const newList = [...oldList];
              newList[idx] = [event.id, rev];
              return newList;
            }
          });
        }
      });
      this.#des.onDestroy(() => s.unsubscribe());
    }, 2e3);
  }
  static {
    this.\u0275fac = function MqttDeviceSettingsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MqttDeviceSettingsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MqttDeviceSettingsService, factory: _MqttDeviceSettingsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MqttDeviceSettingsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/mqtt/mqtt.service.ts
var MqttService = class _MqttService {
  constructor() {
    this.#isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    this.mqtt = import("./mqtt.esm-C3UAHP37.js");
    this.client = this.mqtt.then((m) => m.default.connectAsync(`wss://mqtt.eliasweb.nl`));
    this.baseTopic = "zigbee2mqtt";
    this.messages$ = new Observable((subscriber) => {
      if (this.#isBrowser) {
        const cb = (topic, message) => {
          try {
            subscriber.next({ topic, message: JSON.parse(message.toString()) });
          } catch (e) {
            subscriber.next({ topic, message: message.toString() });
          }
        };
        this.client.then((client) => {
          console.log("start listening for MQTT messages");
          client.on("message", cb);
          client.on("error", (err) => {
            console.error("MQTT client error", err);
            subscriber.error(err);
          });
        });
        return () => {
          this.client.then((client) => {
            client.off("message", cb);
            client.end();
            console.log("MQTT client disconnected");
          });
        };
      }
    }).pipe(share({
      connector: () => new Subject(),
      resetOnComplete: true
    }));
    this.activeTopics = /* @__PURE__ */ new Map();
  }
  #isBrowser;
  listenFor(listenTopic) {
    const cl = this.client;
    if (typeof listenTopic !== "string") {
      console.warn("listenFor expects a string topic, got", listenTopic);
      return EMPTY;
    }
    listenTopic = listenTopic.startsWith(this.baseTopic) ? listenTopic : `${this.baseTopic}/${listenTopic}`;
    const activeTopics = this.activeTopics;
    if (activeTopics.has(listenTopic)) {
      return activeTopics.get(listenTopic);
    }
    const topic$ = this.messages$.pipe(
      filter(({ topic }) => Array.isArray(topic) ? topic.includes(listenTopic) : topic === listenTopic),
      map(({ message }) => message),
      debounceTime(100),
      // deepEqual is costly, but less costly as unneeded display updates/ layout-trashing
      distinctUntilChanged(deepEqual),
      tap({
        error() {
          cl.then((client) => client.unsubscribe(listenTopic));
          activeTopics.delete(listenTopic);
          console.log("stopped listening due of error for", listenTopic);
        },
        complete() {
          cl.then((client) => client.unsubscribe(listenTopic));
          activeTopics.delete(listenTopic);
          console.log("stopped listening for", listenTopic);
        }
      }),
      share({
        connector: () => new ReplaySubject(1),
        resetOnComplete: true,
        resetOnRefCountZero: () => timer(5 + 1e3)
        // keep the topic active for a while after the last subscriber unsubscribes, changes are we are going to need it again soon.
      })
    );
    this.activeTopics.set(listenTopic, topic$);
    cl.then((client) => {
      client.subscribe([listenTopic]);
    });
    return topic$;
  }
  static {
    this.\u0275fac = function MqttService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MqttService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MqttService, factory: _MqttService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MqttService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/mqtt/zigbee.service.ts
var ZigbeeService = class _ZigbeeService {
  constructor() {
    this.mqtt = inject(MqttService);
    this.#settings = inject(MqttDeviceSettingsService);
    this.injector = inject(Injector);
    this.devices = toSignal(this.mqtt.listenFor("bridge/devices"), { initialValue: [], debugName: "ZigbeeServiceDevices" });
    this.deviceSubgroups = computed(() => {
      const list = this.devices().map((d) => d.friendly_name.split("/"));
      const subGroups = {};
      for (const dev of list) {
        if (dev.length <= 2)
          continue;
        const prefix = dev[0].toLowerCase();
        const subGroup = dev[1];
        if (!subGroup)
          continue;
        subGroups[prefix] ??= [];
        if (!subGroups[prefix].includes(subGroup)) {
          subGroups[prefix].push(subGroup);
          subGroups[prefix] = [
            ...subGroups[prefix].sort((a, b) => a.localeCompare(b))
          ];
        }
      }
      return subGroups;
    }, { debugName: "DeviceSubGroups", equal: deepEqual });
    this.getDeviceInfo = (ieeeAddress) => computed(() => this.#getDevice(ieeeAddress()), { equal: deepEqual });
    this.getDeviceStatus = (ieeeAddress) => rxResource({
      params: () => this.#getDevice(ieeeAddress()),
      stream: ({ params }) => {
        if (params && params.friendly_name) {
          return this.mqtt.listenFor(`zigbee2mqtt/${params.friendly_name}`);
        }
        return NEVER;
      },
      injector: this.injector
    });
    this.getStatus = (topic) => rxResource({
      params: () => undefinedWhenEmpty(typeof topic === "string" ? topic : topic()),
      stream: ({ params }) => this.mqtt.listenFor(params),
      injector: this.injector
    });
    this.getMultipleStatuses = (topics) => rxResource({
      params: () => undefinedWhenEmpty(topics()),
      stream: ({ params }) => {
        if (!params || params.length === 0) {
          return of([]);
        }
        return combineLatest(params.map((topic) => this.mqtt.listenFor(topic).pipe(startWith(null)))).pipe(map((statuses) => {
          return statuses.map((status, index) => {
            if (typeof status !== "object" || status === null) {
              console.warn(`Invalid status for topic ${params[index]}:`, status);
              return {
                friendly_name: params[index],
                ieeeAddress: "",
                power: 0,
                energy: 0,
                current: 0
              };
            } else {
              return {
                friendly_name: params[index],
                ieeeAddress: status["ieee_address"] ?? "",
                power: status["power"] ?? 0,
                energy: status["energy"] ?? 0,
                current: status["current"] ?? 0
              };
            }
          });
        }));
      },
      injector: this.injector,
      equal: deepEqual
    });
    this.#joinAllowed$ = this.mqtt.listenFor("bridge/logging").pipe(
      filter((log) => log && typeof log.message === "string" && [
        "permit_join",
        "zh:ember: [stack status] network",
        "disabling joining new devices"
      ].some((s) => log.message.toLowerCase().includes(s))),
      map(checkJoinAllowed),
      // tap(log => console.log('Join allowed:', log)),
      shareReplay(1)
      // Cache the latest value
    );
    this.joinAllowed = toSignal(this.#joinAllowed$, {
      initialValue: { pairingAllowed: false }
    });
    this.publish = async (topic, payload) => {
      if (typeof payload !== "string") {
        payload = JSON.stringify(payload);
      }
      const client = await this.mqtt.client;
      return client.publishAsync(topic, payload);
    };
    this.#getDevice = (ieeeAddress) => this.devices().find((d) => d.ieee_address === ieeeAddress || d.friendly_name === ieeeAddress);
  }
  #settings;
  #joinAllowed$;
  #getDevice;
  static {
    this.\u0275fac = function ZigbeeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ZigbeeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ZigbeeService, factory: _ZigbeeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZigbeeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function checkJoinAllowed(log) {
  const lowerLog = log.message?.toLowerCase();
  const parts = lowerLog?.split(`payload '`);
  if (parts && parts.length > 1) {
    try {
      const json = JSON.parse(parts[1].split(`'`)[0]);
      const time = json?.data?.time ?? 0;
      const device = json?.data?.device ?? "unknown";
      if (typeof time === "number" && time > 0) {
        return { pairingAllowed: true, device, time };
      } else {
        return { pairingAllowed: false };
      }
    } catch (error) {
      return { pairingAllowed: false };
    }
  }
  if (lowerLog.includes("open"))
    return { pairingAllowed: true, device: "unknown", time: 120 };
  return { pairingAllowed: false };
}
var undefinedWhenEmpty = (value) => {
  if (Array.isArray(value) && value.length === 0) {
    return void 0;
  }
  if (value === null) {
    return void 0;
  }
  if (typeof value === "object" && Object.keys(value).length === 0) {
    return void 0;
  }
  if (typeof value === "string" && value.trim() === "") {
    return void 0;
  }
  if (typeof value === "number" && (isNaN(value) || value === 0)) {
    return void 0;
  }
  return value;
};

export {
  MqttDeviceSettingsService,
  ZigbeeService,
  undefinedWhenEmpty
};
