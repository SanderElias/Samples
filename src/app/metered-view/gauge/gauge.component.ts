import {
  Component,
  computed,
  input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'se-gauge',
  imports: [],
  template: `
    <svg
      class="myGauge"
      viewBox="0 0 200 200"
      width="100"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask [attr.id]="maskId" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="200" height="200" fill="white" />
          <path
            [attr.d]="getArcPath(per() * 100)"
            fill="none"
            stroke="black"
            stroke-width="35"
            stroke-linecap="butt"
          />
        </mask>
      </defs>

      <!-- Fill with surface color and let the SVG element background (conic-gradient) show through the masked arc -->
      <rect
        width="100%"
        height="100%"
        fill="var(--_meter-backgroundColor, #f0f0f0)"
        [attr.mask]="'url(#' + maskId + ')'"
      />

      <path
        [attr.d]="getRemainderArcPath(per() * 100)"
        fill="none"
        stroke="gray"
        stroke-width="35"
        stroke-linecap="butt"
      />
    </svg>

    <div class="text">{{ (per() * 100).toFixed(1) }}% <br />{{ value() }}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './gauge.component.css'
})
export class GaugeComponent {
  readonly value = input(15);
  readonly maxVal = input(100);
  readonly maskId = `arcMask-${Math.random().toString(36).slice(2, 9)}`;

  readonly per = computed(() => {
    return Math.max(
      0,
      Math.min(1, Number(this.value() || 0) / Number(this.maxVal() || 1))
    );
  });

  // Arc geometry (copied from metered-view to render the same svg gauge)
  private readonly cx = 100;
  private readonly cy = 100;
  private readonly r = 80;
  private readonly bottomGapDegrees = 44;

  private toDeg(rad: number) {
    return (rad * 180) / Math.PI;
  }

  private toRad(deg: number) {
    return (deg * Math.PI) / 180;
  }

  private getStartAngle(): number {
    return 90 + this.bottomGapDegrees / 2;
  }

  private getEndAngle(): number {
    return 90 - this.bottomGapDegrees / 2;
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

    const startPt = this.pointAt(startA);
    const endPoint = this.pointAt(midA);
    const largeArc = Math.abs(sweep) > 180 ? 1 : 0;

    return `M${startPt.x} ${startPt.y} A${this.r} ${this.r} 0 ${largeArc} 1 ${endPoint.x} ${endPoint.y}`;
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
