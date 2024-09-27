import { Component } from '@angular/core';

@Component({
  selector: 'se-async-computed-sample',
  standalone: true,
  imports: [],
  template: `
    <p>
      async-computed-sample works!
    </p>
  `,
  styleUrl: './async-computed-sample.component.css'
})
export class AsyncComputedSampleComponent {
  someId  = input.required<number>()

  $data = asyncComputed(async () => {
    const id = this.someId();
    const response =  await fetch(`/assets/routes.json`)
    const data = await response.json()
    const result = data.find(row => row.id === id) ?? {}
    return result
  })

}
