import { Component, inject, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  template: ` <canvas width="400" height="400" class="canvas"></canvas> `,
  styles: []
})
export class AnalogClockComponent implements OnInit {
  private zone = inject(NgZone);

  ngOnInit(): void {
    if (typeof document === 'undefined') return;
    this.zone.runOutsideAngular(() => {
      analogClock(getCanvasCtx());
      function getCanvasCtx() {
        let canvas = document.querySelector('.canvas') as HTMLCanvasElement;
        return canvas.getContext('2d');
      }
    });
  }
}

function analogClock(ctx) {
  //  Functional helpers, curry and compose
  function curry(fn, ...args) {
    let _curry = args => (args.length < fn.length ? (..._args) => _curry([...args, ..._args]) : fn(...args));
    return _curry(args);
  }
  const compose = (...fns) =>
    fns.reduce(
      (f, g) =>
        (...args) =>
          f(g(...args))
    );
  const map = curry((fn, value) => value.map(fn));
  const reduce = curry((fn, value) => value.reduce(fn));

  const unCurry =
    fn =>
    (...args) =>
      args.reduce((ret, cur) => ret(cur), fn);
  const unary = fn => arg => fn(arg);
  const identity = x => x;
  const constant = x => () => x;

  // quick tests for functional stuff..
  function sum(a, b, c) {
    return a + b + c;
  }
  const cSum = curry(sum);
  console.log(unCurry(cSum)(1, 2, 3));
  // ----- end of functional helpers

  // some helpers to get a nice color pallette! Generator to fetch the next color
  const pallette = [
    '#041010',
    '#082121',
    '#0c3131',
    '#104141',
    '#145252',
    '#186262',
    '#1d7272',
    '#218383',
    '#259393',
    '#29a3a3',
    '#2db4b4',
    '#31c4c4',
    '#3bcece',
    '#4ed3d3',
    '#5cd6d6',
    '#6cdada',
    '#7cdede',
    '#8de2e2',
    '#9de7e7',
    '#adebeb',
    '#beefef',
    '#cef3f3',
    '#def7f7',
    '#effbfb'
  ];

  function* nextColor() {
    let i = 0;
    while (true) {
      yield pallette[i];
      i += 1;
      if (i === pallette.length) {
        i = 0;
      }
    }
  }
  let color = nextColor();
  // ------ end of color helpers

  // const ctx = getCanvasCtx();

  // use curry and compose to set up each part of the clock

  // creaye a curryable(is that a word?) function that encapsulates the
  // canvas2dcontext and the centerpoint of the clock
  const clockLine = curry(xxLine)(ctx, [200, 200]);

  // compose a helper function to calcualte the radians from 60 hours
  const toDirfrom60 = compose(toDirection, toAngleFrom(60));

  // compose a helper to draw the seconds wand. user the clockline and put
  // in the offset and length, and use the helper from above,
  const secWand = compose(clockLine(4, 146), toDirfrom60);
  // do the same for the minute-wand, but use a different length
  const minWand = compose(clockLine(4, 130), toDirfrom60);
  // again, but now compose a 12 part calcualtor.
  const hourWand = compose(clockLine(4, 100), toDirection, toAngleFrom(12));
  // create a curried function to put the plates text in place
  const putText = curry(xxText)(ctx, [200, 200], 180);

  function clock(time) {
    drawClock(time);
    // and set it to repeat on the next frame.
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => clock(new Date()));
    }
  }

  function drawClock(time) {
    // lets calculate the sec/mins/hours with persicion
    // as an analog clock does not 'snap' to whole secs/min/hours.
    let secs = time.getSeconds() + time.getMilliseconds() / 1000;
    let mins = time.getMinutes() + secs / 60;
    let hour = time.getHours() + mins / 60;
    //analog clock only has 12 hours
    hour = hour > 12 ? hour - 12 : hour;

    // ok, start drawing the clock
    clearCtx(ctx);
    drawPlate();
    secWand(secs);
    minWand(mins);
    hourWand(hour);
  }

  // draw the clock's background-plate
  function drawPlate() {
    let len = 0;
    // use the curried clockline function to set an offset so the 'tacks'
    // are outside the wand's reach
    let drawTack = clockLine(153);
    for (let x = 1; x < 61; x += 1) {
      /** every 5 minuter, do a bigger tack, and write the hour text */
      if (x % 5 === 0) {
        len = 15;
        putText(toDirfrom60(x), '' + x / 5);
      } else {
        len = 10;
      }
      //len = x % 5 === 0 ? 15 : 10;
      // draw a tack, with a slightly longer ones on every 5 mins.
      drawTack(len, toDirfrom60(x));
    }
  }

  /**
   * create a function that takes
   * @param ctx  the canvas
   * @param origin the 'center' point
   * @param offset how far of the center will we start drawing
   * @param length how long s the line we will draw?
   * @param direction the direction we want to draw into. [x,y], where x and y are below zero indicators
   */
  function xxLine(ctx, origin, offset, length, direction) {
    let start = [origin[0] + direction[0] * offset, origin[1] + direction[1] * offset];
    let end = [origin[0] + direction[0] * (offset + length), origin[1] + direction[1] * (offset + length)];
    /** draw the line */
    line(ctx, start, end);
  }

  function xxText(ctx, origin, offset, direction, text) {
    let x = origin[0] + direction[0] * offset;
    let y = origin[1] + direction[1] * offset;
    ctx.font = 'bold 18px Times';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fff';
    ctx.fillText(text, x, y);
  }

  /** helper creates a function that divides up a circle into P equal parts. */
  function toAngleFrom(p) {
    /** return function tahat takes a part, and calculates the angle for it. */
    return function (sec) {
      // calculate a value to an angle., subtract 90, because we want to start at the top, not at the left.
      let res = sec * (360 / p) - 90;
      /** because we might end below zero, and the drawing functions don't like that, add a full circle(360) */
      return res < 0 ? res + 360 : res;
    };
  }

  /**
   * ok, we have the angle, but we need to draw lines to points..
   * take the angle, and calc the x and y directions we need.
   * @param angle
   * @returns
   */
  function toDirection(angle) {
    let radian = (Math.PI / 180) * angle;
    return [Math.cos(radian), Math.sin(radian)];
  }

  function clearCtx(context) {
    context.save();

    // Use the identity matrix while clearing the canvas
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    // Restore the transform
    context.restore();
  }

  function point(ctx, x, y) {
    // ctx.fillStyle = color.next().value;
    ctx.fillRect(x, y, 1, 1);
  }

  function line(ctx, start, end) {
    //console.log(end);
    ctx.beginPath();
    ctx.strokeStyle = '#ffffff';
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.stroke();
  }

  clock(new Date()); //start of the clock
}
