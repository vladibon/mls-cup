import { getConfettiRefs } from './refs';

const confetti = {
  intervalId: null,
  run: () => {
    const refs = getConfettiRefs();
    const confettiFragment = document.createDocumentFragment();
    const confettiGroup = document.createElement('div');
    confettiGroup.innerHTML = refs.confettiGroupTemplate.innerHTML;
    confettiGroup.className = 'confetti-group';

    confetti.intervalId = setInterval(() => {
      for (let i = 0; i < 4; i += 1) {
        confettiFragment.appendChild(confettiGroup.cloneNode(true));
      }

      refs.confettiContainerRef.prepend(confettiFragment);
    }, 500);
  },
  stop: () => clearInterval(confetti.intervalId),
};

export { confetti };
