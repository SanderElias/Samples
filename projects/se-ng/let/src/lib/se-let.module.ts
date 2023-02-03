import { NgModule } from '@angular/core';
import { SeLetDirective } from './se-let.directive';

@NgModule({
    imports: [SeLetDirective],
    exports: [SeLetDirective]
})
export class SeLetModule {}
