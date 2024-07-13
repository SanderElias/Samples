import { Component, OnInit } from '@angular/core';
import { timer, take, map } from 'rxjs';
import { NgIf, NgForOf, AsyncPipe } from '@angular/common';

const twoPi = Math.PI * 2;
const circumference = (radius: number) => twoPi * radius;

@Component({
  selector: 'app-svg-clock',
  templateUrl: './svg-clock.component.html',
  styles: [],
  standalone: true,
  imports: [NgIf, NgForOf, AsyncPipe],
})
export class SvgClockComponent {
  // the colors for the circls we want to show
  strokeColors = [`rgb(132, 35, 156)`, 'rgb(240, 26, 115)', `rgb(70, 166, 179)`];
  time$ = timer(0, 500).pipe(
    // Minutes start with 1, not zero.
    map(i => {
      const now = new Date();
      return [now.getHours(), now.getMinutes(), now.getSeconds()];
    })
  );

  radiusFromPosition(pos: number) {
    /**
     * we start with 44 (the viewBox 50 minus my strokewidth of 6)
     */
    return 44 - pos * 6;
  }

  minuteToAngle(minute: number, radius: number) {
    // calculate the percentage of how many minutes
    const per = minute / 60;
    // calculate how much of the circle is covered
    return per * circumference(radius);
  }

  dashArray(minute: number, position: number) {
    const radius = this.radiusFromPosition(position);
    const hoursToPer = (n: number) => ((n % 12) / 12) * circumference(radius);
    const covered =
      position === 0 // hours need a different calculation
        ? hoursToPer(minute)
        : this.minuteToAngle(minute, radius);
    /** use the dasharray to draw the part we want */
    return `${covered} ${circumference(radius)}`;
  }

  zerod(n: number) {
    return n < 10 ? `0${n}` : n;
  }
}
