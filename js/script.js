function openCatalog() {
    var element = document.getElementById("product-menu");
    element.classList.toggle("catalog-open");
}



var linkMap = document.querySelector(".modal-map-link");
var openMap = document.querySelector(".modal-map");
var closeMap = openMap.querySelector(".modal-close");

linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (openMap.classList.contains("modal-show")) {
            openMap.classList.remove("modal-show");
            openMap.classList.remove("modal-error");
        }
    }
});



var linkMessage = document.querySelector(".modal-message-link");
var openMessage = document.querySelector(".modal-message");
var closeMessage = openMessage.querySelector(".modal-close");
var form = openMessage.querySelector("form");
var fullname = openMessage.querySelector("[name=fullname]");
var email = openMessage.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";


try {
    storage = localStorage.getItem("fullname");
} catch (err) {
    isStorageSupport = false;
}



linkMessage.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMessage.classList.add("modal-show");
    if (storage) {
        fullname.value = storage;
        email.focus();
    } else {
        fullname.focus();
    }
});


closeMessage.addEventListener("click", function (evt) {
    evt.preventDefault();
    openMessage.classList.remove("modal-show");
    openMessage.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!fullname.value || !email.value) {
        evt.preventDefault();
        openMessage.classList.remove("modal-error");
        openMessage.offsetWidth = openMessage.offsetWidth;
        openMessage.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("fullname", fullname.value);
        }
    }
});




window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (openMessage.classList.contains("modal-show")) {
            openMessage.classList.remove("modal-show");
            openMessage.classList.remove("modal-error");
        }
    }
});


// Слайдер Наши сервисы

let slideIndex = 1;
let slides = document.getElementsByClassName("service-item");
let buttonsWrap = document.querySelector(".service-list");
let buttons = document.getElementsByClassName("service-btn");

function showSlides(index) {

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("current");
        slides[i].style.display = "none";
    };

    slides[slideIndex - 1].style.display = "block";
    buttons[slideIndex - 1].classList.add("current");
}


function currentSlide(index) {
    showSlides(slideIndex = index)
}

showSlides(slideIndex);


buttonsWrap.addEventListener("click", function(event) {
  event.preventDefault();
    for (let i = 0; i < buttons.length + 1; i++) {
        if (event.target.classList.contains("service-btn") &&
            event.target == buttons[i-1]) {
            currentSlide(i);
        }
    }
});
