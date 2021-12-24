import * as basicLightbox from 'basiclightbox';
import refs from './refs';

setTimeout(() => {
  const cupLightbox = basicLightbox.create(refs.cupLightboxTemplate, {
    className: 'teams-is-hidden',
    onShow: () => window.addEventListener('keydown', onKeydown),
    onClose: () => window.removeEventListener('keydown', onKeydown),
  });

  preventPageScroll();
  cupLightbox.show();

  document
    .querySelector('.btn-close-js')
    .addEventListener('click', cupLightbox.close);

  document
    .querySelector('.button-video-js')
    .addEventListener('click', toggleVideoLightbox);

  setTimeout(() => {
    cupLightbox.element().classList.toggle('teams-is-hidden');
  }, 1000);

  function onKeydown({ code }) {
    if (code !== 'Escape') return;
    cupLightbox.close();
  }
}, 1000);

function preventPageScroll() {
  document.body.classList.add('lightbox-open');
}

//
function toggleVideoLightbox() {
  document
    .querySelector('.button-video-js')
    .classList.toggle('video-lightbox-open');

  document
    .querySelector('.video-lightbox')
    .classList.toggle('video-lightbox--open');

  document.querySelector('.btn-watch-js').addEventListener(
    'click',
    function () {
      document.querySelector('#video').play();
    },
    false,
  );
}
