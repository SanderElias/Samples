import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { MdEditComponent } from './md-edit/md-edit.component';


@NgModule({
  declarations: [EditComponent, MdEditComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
