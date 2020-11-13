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
    title: "3D Virtual Gallery",
    shortDescripton: "Hackathon project to get through covid",
    longDescription: "Hacksheffield 6.0 winner broo",
    images: [
      "assets/screenshots/3d_virtual_gallery/virtual1.png",
      "assets/screenshots/3d_virtual_gallery/virtual2.png",
      "assets/screenshots/3d_virtual_gallery/virtual3.png",
      "assets/screenshots/3d_virtual_gallery/virtual4.png",
    ],
  },

  {
    title: "Meeting Schedular",
    shortDescripton:
      "University assignment to make a meeting scheduler prototype. Uses Firebase to schedule meetings and for chat functionality.",
    longDescription: "made a meeting scehduleran io",
    images: [
      "assets/screenshots/meeting_schedular/meeting1.jpg",
      "assets/screenshots/meeting_schedular/meeting2.jpg",
      "assets/screenshots/meeting_schedular/meeting3.jpg",
      "assets/screenshots/meeting_schedular/meeting4.jpg",
    ],
  },
  {
    title: "IBM - Missing Maps",
    shortDescripton:
      "Worked with IBM during a university assingment utilising IBM Watson.",
    longDescription: "ncoidddddddddddddddddddddddd dddddddddddnmcsic do.",
    images: [
      "assets/screenshots/volcano_escape/volcanoEscape.jpg",
      "assets/screenshots/volcano_escape/volcanoEscape2.jpg",
      "assets/screenshots/volcano_escape/volcanoEscape3.jpg",
      "assets/screenshots/volcano_escape/volcanoEscape4.png",
    ],
  },

  {
    title: "Drawing Tool",
    shortDescripton:
      "University assignment to develop a paint like program in c++.",
    longDescription:
      "ncoin sniocn s nicsnm son concsod ndsnocs ncsocn o nmcsic do.",
    images: [
      "assets/screenshots/drawing_assignment/drawing_1.jpg",
      "assets/screenshots/drawing_assignment/drawing_2.png",
      "assets/screenshots/drawing_assignment/drawing_3.png",
      "assets/screenshots/drawing_assignment/drawing_4.png",
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
  {
    title: "Sumo Slam",
    shortDescripton: "Unity game developed in my spare time.",
    longDescription: "ncoiddddddddddddd ddddddddddd dddddddddddnmcsic do.",
    images: [
      "assets/screenshots/sumo_slam/sumoslam.jpg",
      "assets/screenshots/sumo_slam/sumoslam2.jpg",
      "assets/screenshots/sumo_slam/sumoslam3.jpg",
      "assets/screenshots/sumo_slam/sumoslam4.jpg",
    ],
  },

  {
    title: "Movie Night",
    shortDescripton: "Hackathon project1",
    longDescription: "ncoiddddddddddddd ddddddddddd dddddddddddnmcsic do.",
    images: [
      "assets/screenshots/movie_night/movienight.jpg",
      "assets/screenshots/movie_night/movienight2.jpg",
      "assets/screenshots/movie_night/movienight3.jpg",
    ],
  },

  {
    title: "Car Park Simulator",
    shortDescripton: "University c#.",
    longDescription: "ncoiddddddddddddd ddddddddddd dddddddddddnmcsic do.",
    images: [
      "assets/screenshots/car_park_simulator/carParkSim.jpg",
      "assets/screenshots/car_park_simulator/sim2.jpg",
      "assets/screenshots/car_park_simulator/sim3.jpg",
      "assets/screenshots/car_park_simulator/sim4.jpg",
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
  let size = projects.length - 1;
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
