import * as basicLightbox from 'basiclightbox';
import { confetti } from './confetti';
import { cupLightboxTemplate, getRefs } from './refs';

setTimeout(openCupLightbox, 1000);

function openCupLightbox() {
  const cupLightbox = basicLightbox.create(cupLightboxTemplate, {
    className: 'teams-is-hidden',
    onShow: () => window.addEventListener('keydown', onKeydown),
    onClose: () => window.removeEventListener('keydown', onKeydown),
  });

  cupLightbox.show();
  confetti.run();
  togglePageScroll();

  setTimeout(confetti.stop, 5000);
  setTimeout(setTeamsFrame, 11000);

  const refs = getRefs();
  const cupLightboxRef = cupLightbox.element();
  const isVideoOpen = () => cupLightboxRef.classList.contains('video-is-open');

  refs.closeBtnRef.addEventListener('click', closeCupLightbox);
  refs.videoBtnRef.addEventListener('click', toggleVideoVisibility);
  refs.videoOverlayRef.addEventListener('click', onVideoOverlayClick);
  refs.playBtnRef.addEventListener('click', onPlayVideo, { once: true });

  function togglePageScroll() {
    document.body.classList.toggle('lightbox-open');
  }

  function setTeamsFrame() {
    cupLightboxRef.classList.remove('teams-is-hidden');
  }

  function onKeydown({ code }) {
    code === 'Escape' && isVideoOpen() ? closeVideo() : closeCupLightbox();
  }

  function closeCupLightbox() {
    cupLightbox.close();
    togglePageScroll();
  }

  function toggleVideoVisibility() {
    isVideoOpen() ? closeVideo() : openVideo();
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
}
