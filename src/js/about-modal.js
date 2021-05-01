(() => {
  const refs = {
    openModalBtnAbout: document.querySelector('[data-modal-open-about]'),
    closeModalBtnAbout: document.querySelector('[data-modal-close-about]'),
    modalAbout: document.querySelector('[data-modal-about]'),
  };

  refs.openModalBtnAbout.addEventListener('click', toggleModal);
  refs.closeModalBtnAbout.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalAbout.classList.toggle('is-hidden');
  }
})();