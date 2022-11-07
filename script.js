let modalWindow = document.querySelector(".modal");

let btnShowModalWindow = document.querySelector(".js_button");

let btnCloseModalWindow = document.querySelector(".modal__button_close");

let firstInput = modalWindow.querySelector("input");

btnShowModalWindow.addEventListener("click", function () {
  modalWindow.classList.add("modal_show");
  firstInput.focus();
});

btnCloseModalWindow.addEventListener("click", function () {
  modalWindow.classList.remove("modal_show");
  btnShowModalWindow.focus();
});

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 27 && modalWindow.classList.contains("modal_show")) {
    modalWindow.classList.remove("modal_show");
    btnShowModalWindow.focus();
  };
})
