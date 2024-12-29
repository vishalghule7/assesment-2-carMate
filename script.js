let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

document.querySelector("#login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.toggle("active");
};

document.querySelector("#close-login-form").onclick = () => {
  document.querySelector(".login-form-container").classList.remove("active");
};

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }

  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

// swiper js
var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 22,
  loop: true,
  grapCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grapCursor: true,
  // centeredSlides: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons within the vehicles section
  const buttons = document.querySelectorAll(".vehicles .btn");

  // Add click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      window.location.href = "details.html"; // Navigate to car details page
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons within the vehicles section
  const buttons = document.querySelectorAll(".featured .btn");

  // Add click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      window.location.href = "details.html"; // Navigate to car details page
    });
  });
});
