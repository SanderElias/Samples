import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoShadowComponent } from "./no-shadow/no-shadow.component";
import { ShadowComponent } from "./shadow/shadow.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NoShadowComponent, ShadowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoCssIssue';
}
