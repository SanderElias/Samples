import { Component, OnInit } from '@angular/core';
// import html2canvas from 'html2canvas';

@Component({
  selector: 'app-snow',
  templateUrl: './snow.component.html',
  styles: [],
})
export class SnowComponent implements OnInit {
  canvas = createSnowCanvas();
  ctx = this.canvas.getContext('2d');
  constructor() {}

  ngOnInit(): void {
    const height = this.canvas.height;
    const width = this.canvas.width;
    const makeColor = () => Number.parseInt((10 + getRandomInt(6)).toString(16).repeat(6), 16);
    const origin = () => [width - getRandomInt(width), getRandomInt(5)];
    const speed = () => [-2 + getRandomInt(4), 1 + getRandomInt(6)];
    const makeFlake = () => [...origin(), ...speed(), 1 + getRandomInt(1), makeColor()];
    const makeFlakes = num => Array.from({ length: num }, makeFlake);
    const flakes = makeFlakes(getRandomInt(20));

    const animate = (flakes: number[][]) => {
      const needFlakeCount = 50 + getRandomInt(25);
      const drawFlake = ([x, y, speedX, speedY, radius, color]: number[], index) => {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `#${color.toString(16)}`;

        this.ctx.fill();

        if (y+speedY > height - 2) {
          // "melt" phase
          flakes[index][1] += 0.03;
          return;
        }

        flakes[index][0] = x - speedX;
        flakes[index][1] = y + speedY;
      };
      this.ctx.clearRect(0, 0, width, height);
      if (flakes.length < needFlakeCount) {
        /** add max up 7 flakes at a time */
        flakes.push(...makeFlakes(Math.min(1+getRandomInt(7), needFlakeCount - flakes.length)));
      }
      flakes.forEach(drawFlake);
      requestAnimationFrame(() =>
        /** next iteration with the flakes that are still in the view */
        animate(flakes.filter(([x, y]) => x > 0 && x < width && y < height))
      );
    };
    animate(flakes);
  }
}

/**
 * helper function for true random intergers.
 * @param max the maximum returned
 */
function getRandomInt(max: number): number {
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  let randomNumber = randomBuffer[0] / (0xffffffff + 1);
  return Math.floor(randomNumber * (Math.floor(max) + 1));
}

// var particleCanvas, particleCtx;
function createSnowCanvas() {
  const particleCanvas = document.createElement('canvas');
  particleCanvas.width = window.innerWidth;
  particleCanvas.height = window.innerHeight;
  particleCanvas.style.position = 'fixed';
  particleCanvas.style.top = '0';
  particleCanvas.style.left = '0';
  particleCanvas.style.zIndex = '1001';
  particleCanvas.style.pointerEvents = 'none';
  document.body.appendChild(particleCanvas);
  return particleCanvas;
}
