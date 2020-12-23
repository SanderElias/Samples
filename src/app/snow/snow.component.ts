import { Component, OnInit } from '@angular/core';
// import html2canvas from 'html2canvas';

@Component({
  selector: 'app-snow',
  templateUrl: './snow.component.html',
  styles: [],
})
export class SnowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    makeItSnow();
  }
}

function makeItSnow() {
  const snowCanvas = createSnowCanvas();
  const ctx = snowCanvas.getContext('2d');
  const height = snowCanvas.height;
  const width = snowCanvas.width;
  /** create a gray between `aaaaaa` and `ffffff`, and convert it back to a number */
  const makeColor = () => Number.parseInt((9 + getRandomInt(6)).toString(16).repeat(6), 16);
  const makeFlake = () => [
    width - getRandomInt(width), // x
    getRandomInt(5), // y
    -2 + getRandomInt(4), // speedX
    1 + getRandomInt(4), // speedY
    1 + getRandomInt(1), // size (1 or 2 pixels)
    makeColor(), // color
  ];
  const makeFlakes = num => Array.from({ length: num }, makeFlake);
  const drawFlake = ([x, y, speedX, speedY, radius, color]: number[]) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `#${color.toString(16)}`;
    ctx.fill();
    return y + speedY > height - 2
      ? [x, y + 0.03, speedX, speedY, radius, color] // flake is 'melting'
      : [x + speedX, y + speedY, speedX, speedY, radius, color]; // flake is moving
  };
  const animate = (flakes: number[][]) =>
    requestAnimationFrame(() => {
      const needFlakeCount = 150 + getRandomInt(25);
      ctx.clearRect(0, 0, width, height); // clear the old flakes
      animate(
        flakes
          .concat(flakes.length < needFlakeCount ? makeFlakes(1 + getRandomInt(7)) : []) // add up to 7 if too little
          .map(drawFlake) // draw the actual flakes
          .filter(([x, y]) => x > 0 && x < width && y < height) // remove flakes that are out of the view
      );
    });
  animate(makeFlakes(getRandomInt(20))); //start off with default flake
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
  const snowFlakesCanvas = document.createElement('canvas');
  snowFlakesCanvas.width = window.innerWidth;
  snowFlakesCanvas.height = window.innerHeight;
  snowFlakesCanvas.style.position = 'fixed';
  snowFlakesCanvas.style.top = '0';
  snowFlakesCanvas.style.left = '0';
  snowFlakesCanvas.style.zIndex = '1001';
  snowFlakesCanvas.style.pointerEvents = 'none';
  document.body.appendChild(snowFlakesCanvas);
  return snowFlakesCanvas;
}
