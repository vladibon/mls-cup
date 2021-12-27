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

    refs.confettiContainerRef.prepend(confettiFragment);
  }, 500);

  setTimeout(() => clearInterval(intervalId), 5000);
}

export { runConfetti };
