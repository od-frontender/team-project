(() => {
  const refs = {
    openModalBtnMap: document.querySelector('[data-modal-open-map]'),
    closeModalBtnMap: document.querySelector('[data-modal-close-map]'),
    modalMap: document.querySelector('[data-modal-map]'),
  };

  refs.openModalBtnMap.addEventListener('click', toggleModal);
  refs.closeModalBtnMap.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalMap.classList.toggle('is-hidden');
  }
})();