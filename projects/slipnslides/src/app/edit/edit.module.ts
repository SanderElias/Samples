import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { MdEditComponent } from './md-edit/md-edit.component';
import { SelectFileComponent } from './select-file/select-file.component';


@NgModule({
  declarations: [EditComponent, MdEditComponent, SelectFileComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
