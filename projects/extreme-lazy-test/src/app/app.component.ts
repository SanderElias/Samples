const { Component } = await import('@angular/core');
const { RouterOutlet } = await import('@angular/router');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'extremeLazyTest';
}
