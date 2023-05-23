"use strict";

// we are storing all the model
const modal = document.querySelector(".modal-window");
const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

//if we keep this weird part at last section of this page then it won't work but I don't know why haha
// it's because of using array operator as it returns null operator

const openModal = () => {
  console.log("Buttton Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// for (let i = 0; i <= btnShowModal.length; i++) {
//   btnShowModal[i].addEventListener("click", openModal);
// }
btnShowModal.forEach((element) => {
  element.addEventListener("click", openModal);
});
// weird part of js

const closeModal = () => {
  console.log("we are closing");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
//we don't write closeModal() over here as it gets executed without click event
overlay.addEventListener("click", closeModal);
//end here weird part

//close the model when Esc is placed
document.addEventListener("keydown", (e) => {
  console.log("Keydown button pressed");
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
