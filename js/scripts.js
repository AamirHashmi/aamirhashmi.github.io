/*!
 * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 70,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 100,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

var descriptions = [
  "Project 1 broooo",
  "University assignment to make a meeting scheduler prototype. Uses Firebase to schedule meetings and for chat functionality.",
  "project 3 sir",
  "projetc 4$$$$",
];

var fullDescriptions = [
  "Worked together with Preppi to create a 'Just Eat' type app for the beauty industry",
  "made a meeting scehduleran io",
  "test test",
  "hu9encsionicom",
];

var projects = [
  {
    title: "Preppi",
    shortDescripton: "Project Preppi",
    longDescription:
      "Worked together with Preppi to create a 'Just Eat' type app for the beauty industry",
    images: [
      "assets/screenshots/preppi/home_screen.jpg",
      "assets/screenshots/preppi/landing_screen.jpg",
      "assets/screenshots/preppi/search_screen.jpg",
      "assets/screenshots/preppi/business_home_screen.jpg",
    ],
  },

  {
    title: "Meeting Schedular",
    shortDescripton:
      "University assignment to make a meeting scheduler prototype. Uses Firebase to schedule meetings and for chat functionality.",
    longDescription: "made a meeting scehduleran io",
    images: [
      "assets/screenshots/preppi/home_screen.jpg",
      "assets/screenshots/preppi/landing_screen.jpg",
      "assets/screenshots/preppi/search_screen.jpg",
      "assets/screenshots/preppi/business_home_screen.jpg",
    ],
  },

  {
    title: "Drawing Tool",
    shortDescripton:
      "University assignment to develop a paint like program in c++.",
    longDescription:
      "ncoin sniocn s nicsnm son concsod ndsnocs ncsocn o nmcsic do.",
    images: [
      "assets/screenshots/preppi/home_screen.jpg",
      "assets/screenshots/preppi/landing_screen.jpg",
      "assets/screenshots/preppi/search_screen.jpg",
      "assets/screenshots/preppi/business_home_screen.jpg",
    ],
  },

  {
    title: "Volcano Escape",
    shortDescripton: "University assignment to develop a web based game.",
    longDescription: "ncoidddddddddddddddddddddddd dddddddddddnmcsic do.",
    images: [
      "assets/screenshots/volcano_escape/volcanoEscape.jpg",
      "assets/screenshots/volcano_escape/volcanoEscape2.jpg",
      "assets/screenshots/volcano_escape/volcanoEscape3.jpg",
      "assets/screenshots/volcano_escape/volcanoEscape4.png",
    ],
  },
];

var index = 0;

const setProjectFields = (index) => {
  document.getElementById("exampleModalLabel").innerHTML =
    projects[index].title;
  document.getElementById("projectDescription").innerHTML =
    projects[index].shortDescripton;
  document.getElementById("fullProjectDescription").innerHTML =
    projects[index].longDescription;

  for (let i = 0; i < projects[index].images.length; i++) {
    let ref = "img_" + i;
    console.log(ref);
    document.getElementById(ref).src = projects[index].images[i];
    console.log(projects[index].images[i]);
  }
};

setProjectFields(index);

$("#carouselExampleIndicators").on("slide.bs.carousel", function (event) {
  let size = descriptions.length - 1;
  if (event.direction == "left") {
    index < size ? index++ : (index = 0);
  }
  if (event.direction == "right") {
    index == 0 ? (index = size) : index--;
  }
  //console.log(projects[index].shortDescripton);
  setProjectFields(index);
});

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
