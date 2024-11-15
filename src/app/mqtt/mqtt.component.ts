import { Component, inject, Injectable, signal } from '@angular/core';
import mqtt, { type OnMessageCallback } from 'mqtt'
import { Observable, share, Subject,  tap, filter, map } from 'rxjs';


@Component({
  selector: 'se-mqtt',
  imports: [],
  template: `
    <p>
      mqtt works!
    </p>
    `,
  styleUrl: './mqtt.component.css'
})
export class MqttComponent {
  mqtt = inject(MqttService)

  msgs$ = this.mqtt.messages$

  constructor() {

    this.msgs$.subscribe({
      next(msg) {
        console.log(msg)
      }
    })

  }

}


interface MqttMessage {
  topic: string;
  message: string;
}


@Injectable({ providedIn: 'root' })
export class MqttService {
  mqtt = import('mqtt');
  client = this.mqtt.then((m) => m.default.connectAsync(`ws://bookworm.local:1884`));
  /** base topic */
  readonly bt = 'zigbee2mqtt';
  messages$ = new Observable<MqttMessage>((subscriber) => {
    const cb: OnMessageCallback = (topic, message): void => {
      // console.log({ topic });
      subscriber.next({ topic, message: message.toString() });
    };

    this.client.then((client) => {
      // console.log('start listening for MQTT messages');
      client.on('message', cb);
    });
    return () => {
      console.log('stop listening for MQTT messages');
      this.client.then((client) => client.off('message', cb));
    };
  }).pipe(share({
    connector: () => new Subject(),
    resetOnComplete: true
  }));

  state = signal<Record<string, unknown>>({});

  constructor() {
    // this.listenFor(`${this.bt}/bridge/state`).subscribe((data) => {
    //   console.log('state',data);
    // });
    // // this.client.then((client) => {
    // //   // client.publish();
    // // });
  }

  listenFor(topics: string | string[]) {
    const cl = this.client;
    topics = (Array.isArray(topics) ? topics : [topics]).map((topic) =>
      topic.startsWith(this.bt) ? topic : `${this.bt}/${topic}`,
    );
    cl.then((client) => {
      client.subscribe(topics);
      console.log('start listening', topics);
    });

    return this.messages$.pipe(
      tap(console.log),
      filter(({ topic }) => (Array.isArray(topics) ? topics.includes(topic) : topics === topic)),
      tap({
        error() {
          cl.then((client) => client.unsubscribe(topics));
        },
        complete() {
          cl.then((client) => client.unsubscribe(topics));
        },
      }),
      map(({ message }: { message: string }) => message),
    );
  }
}

export interface Z2MDevices {
  definition:          Definition | null;
  disabled:            boolean;
  endpoints:           { [key: string]: Endpoint };
  friendly_name:       string;
  ieee_address:        string;
  interview_completed: boolean;
  interviewing:        boolean;
  network_address:     number;
  supported:           boolean;
  type:                Z2MDeviceType;
  date_code?:          string;
  manufacturer?:       Manufacturer;
  model_id?:           string;
  power_source?:       PowerSource;
  software_build_id?:  string;
}

export interface Definition {
  description:  string;
  exposes:      Expose[];
  icon:         string;
  model:        string;
  options:      Option[];
  supports_ota: boolean;
  vendor:       Vendor;
}

export interface Expose {
  access?:      number;
  description?: string;
  label?:       string;
  name?:        string;
  property?:    string;
  type:         ItemTypeType;
  value_off?:   boolean;
  value_on?:    boolean;
  category?:    Category;
  unit?:        string;
  value_max?:   number;
  value_min?:   number;
  features?:    Feature[];
  values?:      string[];
}

export enum Category {
  Config = "config",
  Diagnostic = "diagnostic",
}

export interface Feature {
  access:        number;
  description:   string;
  label:         string;
  name:          string;
  property:      string;
  type:          ItemTypeType;
  value_off?:    boolean | string;
  value_on?:     boolean | string;
  value_toggle?: string;
  value_max?:    number;
  value_min?:    number;
  presets?:      Preset[];
  unit?:         string;
  features?:     ItemType[];
}

export interface ItemType {
  access:    number;
  label:     string;
  name:      string;
  property?: string;
  type:      ItemTypeType;
}

export enum ItemTypeType {
  Binary = "binary",
  Composite = "composite",
  Enum = "enum",
  Light = "light",
  Numeric = "numeric",
  Switch = "switch",
}

export interface Preset {
  description: string;
  name:        string;
  value:       number;
}

export interface Option {
  access:      number;
  description: string;
  label:       string;
  name:        string;
  property:    string;
  type:        OptionType;
  value_max?:  number;
  value_min?:  number;
  value_off?:  boolean;
  value_on?:   boolean;
  item_type?:  ItemType;
}

export enum OptionType {
  Binary = "binary",
  List = "list",
  Numeric = "numeric",
}

export enum Vendor {
  Ikea = "IKEA",
  TuYa = "TuYa",
  Xiaomi = "Xiaomi",
}

export interface Endpoint {
  bindings:              Binding[];
  clusters:              Clusters;
  configured_reportings: ConfiguredReporting[];
  scenes:                any[];
}

export interface Binding {
  cluster: string;
  target:  Target;
}

export interface Target {
  endpoint:     number;
  ieee_address: IEEEAddress;
  type:         TargetType;
}

export enum IEEEAddress {
  The0Xe0798Dfffebc6E5D = "0xe0798dfffebc6e5d",
}

export enum TargetType {
  Endpoint = "endpoint",
}

export interface Clusters {
  input:  string[];
  output: string[];
}

export interface ConfiguredReporting {
  attribute:               Attribute;
  cluster:                 string;
  maximum_report_interval: number;
  minimum_report_interval: number;
  reportable_change:       number;
}

export enum Attribute {
  BatteryPercentageRemaining = "batteryPercentageRemaining",
  MeasuredValue = "measuredValue",
  OnOff = "onOff",
}

export enum Manufacturer {
  IKEAOfSweden = "IKEA of Sweden",
  Lumi = "LUMI",
  TZE204Ntcy3Xu1 = "_TZE204_ntcy3xu1",
}

export enum PowerSource {
  Battery = "Battery",
  MainsSinglePhase = "Mains (single phase)",
}

export enum Z2MDeviceType {
  Coordinator = "Coordinator",
  EndDevice = "EndDevice",
  Router = "Router",
}


