const cupLightboxTemplate = document.getElementById('cup-lightbox-template');

const getRefs = () => ({
  closeBtnRef: document.querySelector('.btn-close'),
  videoBtnRef: document.querySelector('.btn-video'),
  videoOverlayRef: document.querySelector('.video-overlay'),
  playBtnRef: document.querySelector('.btn-play'),
  videoRef: document.getElementById('video'),
});

const getConfettiRefs = () => ({
  confettiContainerRef: document.querySelector('.confetti-container'),
  confettiGroupTemplate: document.querySelector('.confetti-group'),
});

export { cupLightboxTemplate, getRefs, getConfettiRefs };
