import * as basicLightbox from 'basiclightbox';
import refs from './refs';

setTimeout(() => {
  const cupLightbox = basicLightbox.create(refs.cupLightboxTemplate, {
    className: 'teams-is-hidden',
    onShow: () => window.addEventListener('keydown', onKeydown),
    onClose: () => window.removeEventListener('keydown', onKeydown),
  });

  cupLightbox.show();
  togglePageScroll();

  const cupLightboxRef = cupLightbox.element();
  const closeBtnRef = document.querySelector('.btn-close');
  const videoBtnRef = document.querySelector('.btn-video');

  closeBtnRef.addEventListener('click', closeCupLightbox);
  videoBtnRef.addEventListener('click', toggleVideoLightbox);

  setTimeout(() => {
    cupLightboxRef.classList.toggle('teams-is-hidden');
  }, 1000);

  function onKeydown({ code }) {
    if (code !== 'Escape') return;
    closeCupLightbox();
  }

  function closeCupLightbox() {
    cupLightbox.close();
    togglePageScroll();
  }

  function togglePageScroll() {
    document.body.classList.toggle('lightbox-open');
  }

  function toggleVideoLightbox() {
    cupLightboxRef.classList.toggle('video-is-open');

    const playBtnRef = document.querySelector('.btn-play');

    playBtnRef.addEventListener('click', onPlayVideo, false);

    function onPlayVideo() {
      const videoRef = document.querySelector('#video');

      videoRef.play();
      toggleVideoPlay();

      videoRef.addEventListener('click', onPauseVideo);

      function onPauseVideo() {
        videoRef.pause();
        toggleVideoPlay();
      }
    }

    function toggleVideoPlay() {
      playBtnRef.classList.toggle('video-is-playing');
    }
  }
}, 1000);
