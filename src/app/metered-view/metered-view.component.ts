import { Component, signal } from '@angular/core';

import { GaugeComponent } from './gauge/gauge.component';
import { StackedPerComponent } from './stacked-per/stacked-per.component';

@Component({
  selector: 'se-metered-view',
  imports: [GaugeComponent, StackedPerComponent],
  template: `
    <h1>Metered View</h1>

    <se-gauge [value]="currentValue()" [maxVal]="maxValue()" />
    <se-stacked-per />
    <label for="currentValue">Current Value</label>
    <input
      id="currentValue"
      type="range"
      min="0"
      [max]="maxValue()"
      [value]="currentValue()"
      (input)="currentValue.set($any($event.target).value)"
    />
    <hr />
    <svg
      class="myGauge"
      viewBox="0 0 200 200"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <!-- mask: white = opaque, black = transparent; the arc stroke (filled part) is black to cut a hole -->
        <mask id="arcMask" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="200" height="200" fill="white" />
          <path
            [attr.d]="getArcPath(currentValue())"
            fill="none"
            stroke="black"
            stroke-width="35"
            stroke-linecap="round"
          />
        </mask>
      </defs>

      <!-- fill the SVG with the surface color, but mask out the arc (filled part) so page background shows through -->
      <rect width="100%" height="100%" fill="var(--surface-1)" mask="url(#arcMask)" />

      <!-- gray remainder of the arc (unfilled part) -->
      <path
        [attr.d]="getRemainderArcPath(currentValue())"
        fill="none"
        stroke="gray"
        stroke-width="35"
        stroke-linecap="round"
      />
    </svg>
  `,
  styleUrl: './metered-view.component.css'
})
export class MeteredViewComponent {
  maxValue = signal(100);
  currentValue = signal(100);

  // Arc geometry based on existing SVG path
  private readonly cx = 100;
  private readonly cy = 100;
  private readonly r = 80;
  private readonly startX = 54.114;
  private readonly startY = 165.532;
  private readonly endX = 145.886;
  private readonly endY = 165.532;

  private toDeg(rad: number) {
    return (rad * 180) / Math.PI;
  }

  private toRad(deg: number) {
    return (deg * Math.PI) / 180;
  }

  private getStartAngle(): number {
    return this.toDeg(Math.atan2(this.startY - this.cy, this.startX - this.cx));
  }

  private getEndAngle(): number {
    return this.toDeg(Math.atan2(this.endY - this.cy, this.endX - this.cx));
  }

  private normalizeSweep(start: number, end: number): number {
    let sweep = end - start;
    if (sweep <= 0) sweep += 360;
    return sweep;
  }

  private pointAt(angleDeg: number): { x: number; y: number } {
    const a = this.toRad(angleDeg);
    return {
      x: this.cx + this.r * Math.cos(a),
      y: this.cy + this.r * Math.sin(a)
    };
  }

  // returns an SVG arc path from the original arc's start to the point at `percent` (0-100)
  getArcPath(percent: number | string | undefined): string {
    const p = Math.max(0, Math.min(100, Number(percent) || 0));
    if (p === 0) return '';

    const startA = this.getStartAngle();
    const endA = this.getEndAngle();
    const totalSweep = this.normalizeSweep(startA, endA);
    const sweep = (totalSweep * p) / 100;
    const midA = startA + sweep;

    const endPoint = this.pointAt(midA);
    const largeArc = Math.abs(sweep) > 180 ? 1 : 0;

    return `M${this.startX} ${this.startY} A${this.r} ${this.r} 0 ${largeArc} 1 ${endPoint.x} ${endPoint.y}`;
  }

  // returns an SVG arc path for the remainder (from percent to 100)
  getRemainderArcPath(percent: number | string | undefined): string {
    const p = Math.max(0, Math.min(100, Number(percent) || 0));
    if (p >= 100) return '';

    const startA = this.getStartAngle();
    const endA = this.getEndAngle();
    const totalSweep = this.normalizeSweep(startA, endA);
    const sweep1 = (totalSweep * p) / 100;
    const midA = startA + sweep1;
    const remainingSweep = totalSweep - sweep1;

    const startPt = this.pointAt(midA);
    const endPt = this.pointAt(startA + totalSweep);
    const largeArc = Math.abs(remainingSweep) > 180 ? 1 : 0;

    return `M${startPt.x} ${startPt.y} A${this.r} ${this.r} 0 ${largeArc} 1 ${endPt.x} ${endPt.y}`;
  }
}
