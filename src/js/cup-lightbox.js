import * as basicLightbox from 'basiclightbox';
import { runConfetti } from './confetti';
import { cupLightboxTemplate, getRefs } from './refs';

setTimeout(() => {
  openCupLightbox();
}, 1000);

function openCupLightbox() {
  const cupLightbox = basicLightbox.create(cupLightboxTemplate, {
    className: 'teams-is-hidden',
    onShow: () => window.addEventListener('keydown', onKeydown),
    onClose: () => window.removeEventListener('keydown', onKeydown),
  });

  cupLightbox.show();
  togglePageScroll();
  runConfetti();

  const refs = getRefs();
  const cupLightboxRef = cupLightbox.element();

  refs.closeBtnRef.addEventListener('click', closeCupLightbox);
  refs.videoBtnRef.addEventListener('click', toggleVideoVisibility);
  refs.videoOverlayRef.addEventListener('click', onVideoOverlayClick);
  refs.playBtnRef.addEventListener('click', onPlayVideo, { once: true });

  setTimeout(() => setTeamsFrame(), 11000);

  function onKeydown({ code }) {
    if (code !== 'Escape') return;

    cupLightboxRef.classList.contains('video-is-open')
      ? closeVideo()
      : closeCupLightbox();
  }

  function closeCupLightbox() {
    cupLightbox.close();
    togglePageScroll();
  }

  function togglePageScroll() {
    document.body.classList.toggle('lightbox-open');
  }

  function toggleVideoVisibility() {
    cupLightboxRef.classList.contains('video-is-open')
      ? closeVideo()
      : openVideo();
  }

  function onVideoOverlayClick({ target, currentTarget }) {
    target === currentTarget && closeVideo();
  }

  function closeVideo() {
    cupLightboxRef.classList.remove('video-is-open');
    refs.videoRef.pause();
  }

  function openVideo() {
    cupLightboxRef.classList.add('video-is-open');
  }

  function onPlayVideo() {
    refs.videoRef.play();
    refs.videoRef.setAttribute('controls', '');
    refs.playBtnRef.classList.add('btn-play--is-hiden');
  }

  function setTeamsFrame() {
    cupLightboxRef.classList.remove('teams-is-hidden');
  }
}
