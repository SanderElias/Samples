import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';

const twoPi = Math.PI * 2;
const circumference = (radius: number) => twoPi * radius;

@Component({
    selector: 'app-svg-timer',
    templateUrl: './svg-timer.component.html',
    imports: [AsyncPipe]
})
export class SvgTimerComponent {
  // the colors for the circls we want to show
  strokeColors = [`rgb(132, 35, 156)`, 'rgb(240, 26, 115)', `rgb(70, 166, 179)`, '#3dd656'];
  timer$ = timer(0, 250).pipe(
    // mimic 60 minutes
    take(60),
    // Minutes start with 1, not zero.
    map(i => i + 1)
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

  dashArray(minute: number, radius: number) {
    const covered = this.minuteToAngle(minute, radius);
    /** use the dasharray to draw the part we want */
    return `${covered} ${circumference(radius)}`;
  }
}
