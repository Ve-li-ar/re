const programBlock = document.querySelectorAll('.program__block');
const programOpen = document.querySelectorAll('.visually-hidden');

programBlock.addEventListener('click', () => {
  programOpen.classList.toggle('program__open');
});
