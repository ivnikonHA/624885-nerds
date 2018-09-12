var link = document.querySelector(".address-button");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[type=email]");
var text = popup.querySelector("textarea");

var isStorageSupport = true;
var storage = "";

// var map;

ymaps.ready(init);

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !text.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

function init() {
  myMap = new ymaps.Map('map', {
        center: [59.9391, 30.3214],
        zoom: 17,
        controls: []
    });
  var myPlacemark = new ymaps.Placemark([59.938709, 30.323081], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-marker.png',
    iconImageSize: [231, 190],
    iconImageOffset: [-50, -190]
  });
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable(['drag', 'leftMouseButtonMagnifier', 'rightMouseButtonMagnifier', 'scrollZoom', 'dblClickZoom']);
}
