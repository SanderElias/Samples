import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'tbody[highLight]',
    imports: [],
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighLightBodyComponent {
  highLight = input<string>();
}
