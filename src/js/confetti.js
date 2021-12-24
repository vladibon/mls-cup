const confetti = require('canvas-confetti');

var end = Date.now() + 15 * 1000;
var colors = ['#a66f01', '#777'];

(function frame() {
  confetti.default({
    particleCount: 2,
    angle: 90,
    spread: 160,
    startVelocity: 110,
    gravity: 0.9,
    ticks: 700,
    origin: { y: 1.2 },
    colors: colors,
    shapes: 'square',
    scalar: 2,
  });
  confetti.default({
    particleCount: 2,
    angle: 90,
    spread: 160,
    startVelocity: 110,
    gravity: 0.9,
    ticks: 700,
    origin: { y: 1.2 },
    colors: colors,
    shapes: 'square',
    scalar: 1,
  });
  confetti.default({
    particleCount: 2,
    angle: 90,
    spread: 160,
    startVelocity: 110,
    gravity: 0.9,
    ticks: 700,
    origin: { y: 1.2 },
    colors: colors,
    shapes: 'square',
    scalar: 0.5,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();
