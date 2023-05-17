const modalElement = document.getElementsByClassName('modal')[0];
const buttonClose = document.getElementsByClassName('button-close')[0];
const hidemodal = () => (modalElement.style.display = 'none');

buttonClose.addEventListener('click', hidemodal);
modalElement.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) hidemodal();
});
