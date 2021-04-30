(() => {
    const refs = {
      openModalBtnFranchise: document.querySelector('[data-modal-open-franchise]'),
      closeModalBtnFranchise: document.querySelector('[data-modal-close-franchise]'),
      modalFranchise: document.querySelector('[data-modal-franchise]'),
    };
  
    refs.openModalBtnFranchise.addEventListener('click', toggleModal);
    refs.closeModalBtnFranchise.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modalFranchise.classList.toggle('is-hidden');
    }
  })();