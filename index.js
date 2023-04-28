window.addEventListener("DOMContentLoaded", () => {
  const openModal = document.querySelector(".btn__open__modal");
  const containerModal = document.querySelector(".container__show");
  const close = document.querySelector(".close");

  openModal.addEventListener("click", (e) => {
    e.preventDefault();
    containerModal.classList.toggle("show__modal");
  });
  close.addEventListener("click", (e) => {
    e.preventDefault();
    containerModal.classList.toggle("show__modal");
  });
});
