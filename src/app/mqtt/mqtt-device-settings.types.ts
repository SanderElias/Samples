export const sortFields = ['id', 'friendlyName'] as const;

export type SortField = (typeof sortFields)[number];

export interface MqttDeviceSetting {
  id: string;
  _rev?: string;
  friendlyName: string;
  maxPower: number;
  isSubDevice?: boolean;
  allowPowerControl?: boolean;
  alertWhenOff?: boolean;
  alertWhenLost?: boolean;
}

export type MqttDeviceOptions = {
  isSubDevice: boolean;
  allowPowerControl: boolean;
  alertWhenOff: boolean;
  alertWhenLost: boolean;
  maxPower?: number;
};
