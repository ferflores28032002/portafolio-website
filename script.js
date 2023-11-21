$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Developer", "Blogger", "Administrator", "Dev remoto"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Developer", "Blogger", "Administrator", "Dev remoto"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
function changeColor(colorClass) {
  // Guardar la selección del color en localStorage
  localStorage.setItem("color", colorClass);

  // Actualizar la clase del elemento raíz
  document.documentElement.className = colorClass;

  // Actualizar el texto de los botones
  var buttons = document.querySelectorAll(".color-button");
  buttons.forEach(function (button) {
    // Eliminar 'A' de todos los botones
    button.textContent = button.textContent.replace(" A", "");

    // Agregar 'A' al botón activo
    if (button.classList.contains(colorClass)) {
      button.textContent += " A";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  var savedColor = localStorage.getItem("color");
  if (savedColor) {
    // Agregar la clase de color guardada
    document.documentElement.classList.add(savedColor);

    // Marcar el botón correspondiente como activo
    var buttons = document.querySelectorAll(".color-button");
    buttons.forEach(function (button) {
      button.textContent = button.textContent.replace(" A", "");
      if (button.classList.contains(savedColor)) {
        button.textContent += " A";
      }
    });
  }
});

document.addEventListener("click", function (event) {
  var drawer = document.getElementById("color-buttons");
  var toggleButton = document.getElementById("toggle-drawer");

  // Verifica si el clic fue fuera del drawer y del botón de toggle
  if (
    !drawer.contains(event.target) &&
    !toggleButton.contains(event.target) &&
    drawer.classList.contains("open")
  ) {
    drawer.style.right = "-150px";
    drawer.classList.remove("open");
  }
});

document.getElementById("toggle-drawer").addEventListener("click", function () {
  var drawer = document.getElementById("color-buttons");
  drawer.classList.toggle("open");
  if (drawer.classList.contains("open")) {
    drawer.style.right = "0px"; // Muestra el drawer
  } else {
    drawer.style.right = "-150px"; // Esconde el drawer
  }
});
