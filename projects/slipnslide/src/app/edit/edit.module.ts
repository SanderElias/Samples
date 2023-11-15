import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { MdEditComponent } from './md-edit/md-edit.component';
import { SelectFileComponent } from './select-file/select-file.component';

@NgModule({
  imports: [CommonModule, EditRoutingModule, EditComponent, MdEditComponent, SelectFileComponent],
})
export class EditModule {}
