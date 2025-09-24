import { Injectable } from '@angular/core';
import type { OnMessageCallback } from 'mqtt';
import {
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  filter,
  map,
  Observable,
  ReplaySubject,
  share,
  Subject,
  tap,
  timer
} from 'rxjs';
import { deepEqual } from '../../utils/objects/deep-equal';

interface MqttMessage {
  topic: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class MqttService {
  mqtt = import('mqtt');
  client = this.mqtt.then(m => m.default.connectAsync(`ws://kapow:1884`));
  /** base topic */
  readonly baseTopic = 'zigbee2mqtt';
  messages$ = new Observable<MqttMessage>(subscriber => {
    const cb: OnMessageCallback = (topic, message): void => {
      try {
        subscriber.next({ topic, message: JSON.parse(message.toString()) });
      } catch (e) {
        subscriber.next({ topic, message: message.toString() });
      }
    };

    this.client.then(client => {
      console.log('start listening for MQTT messages');
      client.on('message', cb);
    });
    return () => {
      this.client.then(client => {
        client.off('message', cb);
        client.end(); //disconnect from the MQTT broker
        console.log('MQTT client disconnected');
      });
    };
  }).pipe(
    share({
      connector: () => new Subject(),
      resetOnComplete: true
    })
  );

  activeTopics = new Map<string, Observable<Record<string, unknown>>>();
  listenFor(listenTopic: string | undefined) {
    const cl = this.client;
    if (typeof listenTopic !== 'string') {
      console.warn('listenFor expects a string topic, got', listenTopic);
      return EMPTY;
    }
    listenTopic = listenTopic.startsWith(this.baseTopic) ? listenTopic : `${this.baseTopic}/${listenTopic}`;
    const activeTopics = this.activeTopics;
    if (activeTopics.has(listenTopic)) {
      // console.log('already listening for', listenTopic);
      return activeTopics.get(listenTopic) as Observable<Record<string, unknown>>;
    }

    const topic$ = this.messages$.pipe(
      filter(({ topic }) => (Array.isArray(topic) ? topic.includes(listenTopic) : topic === listenTopic)),
      map(({ message }: { message: string | Record<string, unknown> }) => message),
      debounceTime(100),
      // deepEqual is costly, but less costly as unneeded display updates/ layout-trashing
      distinctUntilChanged<string | Record<string, unknown>>(deepEqual),
      tap({
        error() {
          cl.then(client => client.unsubscribe(listenTopic));
          activeTopics.delete(listenTopic);
          console.log('stopped listening due of error for', listenTopic);
        },
        complete() {
          cl.then(client => client.unsubscribe(listenTopic));
          activeTopics.delete(listenTopic);
          console.log('stopped listening for', listenTopic);
        }
      }),
      share({
        connector: () => new ReplaySubject(1),
        resetOnComplete: true,
        resetOnRefCountZero: () => timer(5 + 1000) // keep the topic active for a while after the last subscriber unsubscribes, changes are we are going to need it again soon.
      })
    );
    this.activeTopics.set(listenTopic, topic$ as Observable<Record<string, unknown>>);
    // console.log('listenFor', listenTopic);
    // finally, tell the client the topic to start listening to
    cl.then(client => {
      client.subscribe([listenTopic]);
    });
    return topic$;
  }
}

export interface Z2MDevice {
  disabled: boolean;
  endpoints: { [key: string]: Endpoint };
  friendly_name: string;
  ieee_address: string;
  interview_completed: boolean;
  interview_state: InterviewState;
  interviewing: boolean;
  network_address: number;
  supported: boolean;
  type: Z2MDeviceType;
  date_code?: string;
  definition?: Definition;
  manufacturer?: Manufacturer;
  model_id?: string;
  power_source?: PowerSource;
  software_build_id?: string;
}

export interface Definition {
  description: string;
  exposes: Expose[];
  icon?: string;
  model: string;
  options: Option[];
  supports_ota: boolean;
  vendor: Vendor;
}

export interface Expose {
  features?: ExposeFeature[];
  type: FeatureType;
  access?: number;
  category?: Category;
  description?: string;
  label?: string;
  name?: string;
  property?: string;
  values?: string[];
  unit?: string;
  value_max?: number;
  value_min?: number;
  value_off?: boolean | string;
  value_on?: boolean | string;
  value_step?: number;
}

export enum Category {
  Config = 'config',
  Diagnostic = 'diagnostic'
}

export interface ExposeFeature {
  access: number;
  description: string;
  label: string;
  name: string;
  property: string;
  type: FeatureType;
  value_off?: boolean | ValueOffEnum;
  value_on?: boolean | ValueOnEnum;
  value_toggle?: ValueToggle;
  value_max?: number;
  value_min?: number;
  presets?: PurplePreset[];
  unit?: string;
  features?: Option[];
}

export interface Option {
  access: number;
  description?: string;
  label: string;
  name: string;
  property: string;
  type: FeatureType;
  value_off?: boolean;
  value_on?: boolean;
  presets?: OptionPreset[];
  value_max?: number;
  value_min?: number;
  item_type?: ItemType;
  features?: OptionFeature[];
}

export interface OptionFeature {
  access: number;
  description: FeatureDescription;
  label: Label;
  name: PropertyEnum;
  property: PropertyEnum;
  type: FeatureType;
  value_min: number;
  unit?: string;
}

export enum FeatureDescription {
  DeltaPerInterval20ByDefault = 'Delta per interval, 20 by default',
  IntervalDuration = 'Interval duration'
}

export enum Label {
  Delta = 'Delta',
  Interval = 'Interval'
}

export enum PropertyEnum {
  Delta = 'delta',
  Interval = 'interval'
}

export enum FeatureType {
  Binary = 'binary',
  Composite = 'composite',
  Enum = 'enum',
  Light = 'light',
  List = 'list',
  Numeric = 'numeric',
  Switch = 'switch'
}

export interface ItemType {
  access: number;
  label: string;
  name: string;
  type: FeatureType;
}

export interface OptionPreset {
  description: PresetDescription;
  name: ValueEnum;
  value: ValueEnum;
}

export enum PresetDescription {
  UseMinimumPermittedValue = 'Use minimum permitted value',
  UsePreviousValue = 'Use previous value'
}

export enum ValueEnum {
  Minimum = 'minimum',
  Previous = 'previous'
}

export interface PurplePreset {
  description: string;
  name: string;
  value: number;
}

export enum ValueOffEnum {
  Off = 'OFF'
}

export enum ValueOnEnum {
  On = 'ON'
}

export enum ValueToggle {
  Toggle = 'TOGGLE'
}

export enum Vendor {
  Ikea = 'IKEA',
  Tuya = 'Tuya',
  Xiaomi = 'Xiaomi'
}

export interface Endpoint {
  bindings: Binding[];
  clusters: Clusters;
  configured_reportings: ConfiguredReporting[];
  scenes: any[];
}

export interface Binding {
  cluster: string;
  target: Target;
}

export interface Target {
  endpoint?: number;
  ieee_address?: IEEEAddress;
  type: TargetType;
  id?: number;
}

export enum IEEEAddress {
  The0Xccccccfffe8A8966 = '0xccccccfffe8a8966',
  The0Xe0798Dfffebc6E5D = '0xe0798dfffebc6e5d'
}

export enum TargetType {
  Endpoint = 'endpoint',
  Group = 'group'
}

export interface Clusters {
  input: string[];
  output: string[];
}

export interface ConfiguredReporting {
  attribute: string;
  cluster: string;
  maximum_report_interval: number;
  minimum_report_interval: number;
  reportable_change: number;
}

export enum InterviewState {
  Successful = 'SUCCESSFUL'
}

export enum Manufacturer {
  IKEAOfSweden = 'IKEA of Sweden',
  Lumi = 'LUMI',
  TZ3000Gjnozsaz = '_TZ3000_gjnozsaz',
  TZE204Ntcy3Xu1 = '_TZE204_ntcy3xu1'
}

export enum PowerSource {
  Battery = 'Battery',
  MainsSinglePhase = 'Mains (single phase)'
}

export enum Z2MDeviceType {
  Coordinator = 'Coordinator',
  EndDevice = 'EndDevice',
  Router = 'Router'
}
