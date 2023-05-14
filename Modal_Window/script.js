"use strict";

// we are storing all the model
const modal = document.querySelector(".modal-window");
const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// btnCloseModal.addEventListener("click", function() => {});

for (let i = 0; i <= btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", function () {
    console.log("Buttton Clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnCloseModal.addEventListener("click", function () {
  console.log("we are closing");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
