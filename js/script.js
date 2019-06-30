var buy = document.querySelectorAll(".button-item-buy");
var buyPopup = document.querySelector(".modal-buy");
var closePopupBuy = buyPopup.querySelector(".button-close");
var continueBuy = document.querySelectorAll(".button-continue");
var checkoutBuy = buyPopup.querySelector(".button-checkout")

for (var i = 0; i < buy.length; i++) {
  buy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.add("modal-active");
    checkoutBuy.focus();
  });
}

for (var i = 0; i < continueBuy.length; i++) {
  continueBuy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-active");
  });
}

closePopupBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-active");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (buyPopup.classList.contains("modal-active")) {
      buyPopup.classList.remove("modal-active");
    }
  }
});


var message = document.querySelector(".message-button");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".button-close");
var login = document.querySelector(".user-info .login");
var form = document.querySelector(".user-info");
var email = document.querySelector(".email");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

message.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-active");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});


form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести логин и адрес электронной почты");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-active")) {
      popup.classList.remove("modal-active");
      popup.classList.remove("modal-error");
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-active");
  popup.classList.remove("modal-error");
});

var mapLink = document.querySelector(".map-popup");
var mapPopup = document.querySelector(".modal-map");
var closeMap = mapPopup.querySelector(".button-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-active");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-active");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-active")) {
      mapPopup.classList.remove("modal-active");
    }
  }
});


