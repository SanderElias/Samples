import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ShowErrorComponent } from './show-error/show-error.component';

@Component({
  selector: 'se-form-error',
  standalone: true,
  imports: [CommonModule, FormsModule, ShowErrorComponent],
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css'],
})
export default class FormErrorComponent {
  name = '';
  age = 0;
}
