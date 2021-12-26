// const confetti = require('canvas-confetti');

// var end = Date.now() + 6 * 1000;
// var colors = ['#a66f01', '#777'];

// (function frame() {
//   confetti.default({
//     particleCount: 2,
//     angle: 90,
//     spread: 160,
//     startVelocity: 110,
//     gravity: 0.9,
//     ticks: 700,
//     origin: { y: 1.2 },
//     colors: colors,
//     shapes: 'square',
//     scalar: 2,
//   });
//   confetti.default({
//     particleCount: 2,
//     angle: 90,
//     spread: 160,
//     startVelocity: 110,
//     gravity: 0.9,
//     ticks: 700,
//     origin: { y: 1.2 },
//     colors: colors,
//     shapes: 'square',
//     scalar: 1,
//   });
//   confetti.default({
//     particleCount: 2,
//     angle: 90,
//     spread: 160,
//     startVelocity: 110,
//     gravity: 0.9,
//     ticks: 700,
//     origin: { y: 1.2 },
//     colors: colors,
//     shapes: 'square',
//     scalar: 0.5,
//   });

//   if (Date.now() < end) {
//     requestAnimationFrame(frame);
//   }
// })();

import { getConfettiRefs } from './refs';

function runConfetti() {
  const refs = getConfettiRefs();

  const confettiFragment = document.createDocumentFragment();

  const confettiGroup = document.createElement('div');
  confettiGroup.innerHTML = refs.confettiGroupTemplate.innerHTML;
  confettiGroup.className = 'confetti-group';

  const intervalId = setInterval(() => {
    for (let index = 0; index < 4; index++) {
      confettiFragment.appendChild(confettiGroup.cloneNode(true));
    }

    refs.confettiContainerRef.appendChild(confettiFragment);
  }, 700);

  setTimeout(() => clearInterval(intervalId), 5000);
}

export { runConfetti };
