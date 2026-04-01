import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

import { StackedPerComponent } from '../../metered-view/stacked-per/stacked-per.component';
import { zigbeePrefixes, type ZigbeePrefixes } from '../zigbee-prefixes.types';

@Component({
  selector: 'se-mqtt-settings',
  templateUrl: './mqtt-settings.component.html',
  styleUrl: './mqtt-settings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StackedPerComponent]
})
export class MqttSettingsComponent {
  readonly selectedPrefixes = model.required<ZigbeePrefixes[]>();
  readonly powerUsage = input.required<{ name: string; value: number }[]>();

  readonly zigbeePrefixes = zigbeePrefixes;

  togglePrefixSelection = (prefix: ZigbeePrefixes) => {
    this.selectedPrefixes.update(current =>
      current.includes(prefix)
        ? current.filter(p => p !== prefix)
        : [...current, prefix]
    );
  };
}
