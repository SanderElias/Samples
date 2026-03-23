import type {
  MqttDeviceOptions,
  MqttDeviceSetting
} from './mqtt-device-settings.types';
import type { ZigbeePrefixes } from './zigbee-prefixes.types';

export type CouchDoc = MqttDeviceSetting & { _id?: string; _rev?: string };

export interface BulkGetDoc {
  ok?: CouchDoc;
  missing?: boolean;
  error?: { id?: string; rev?: string; reason?: string } | any;
}

export interface BulkGetResult {
  id: string;
  docs: BulkGetDoc[];
}

export type BulkGetResponse = { results?: BulkGetResult[] };
export type ParsedDeviceSettings = Record<string, MqttDeviceOptions>;

export interface DeviceStatus {
  friendly_name: string;
  ieeeAddress: string;
  power: number;
  energy: number;
  current: number;
}

export interface DeviceWithSetting extends DeviceStatus {
  settings: MqttDeviceOptions;
}

export type SearchBooleanOptionName =
  | 'allowPowerControl'
  | 'alertWhenOff'
  | 'alertWhenLost'
  | 'isSubDevice';

export interface SearchBooleanOption {
  name: SearchBooleanOptionName;
  description?: string;
  value?: boolean | undefined;
}

export interface SearchState {
  searchText: string;
  selectedPrefixes: ZigbeePrefixes[];
  booleanOptions: SearchBooleanOption[];
}
