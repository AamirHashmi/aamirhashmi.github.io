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
    shortDescripton: "React Native application for Android and IOS",
    longDescription:
      "Worked together with Preppi to create a 'Just Eat' type app for the beauty industry. Users can book appointments for certain treatments that businesses may offer.",
    images: [
      "assets/screenshots/preppi/home_screen.jpg",
      "assets/screenshots/preppi/landing_screen.jpg",
      "assets/screenshots/preppi/search_screen.jpg",
      "assets/screenshots/preppi/business_home_screen.jpg",
    ],
  },

  {
    title: "3D Virtual Gallery",
    shortDescripton:
      "Virtual gallery to showcase art. Won 2nd place for best Hack at HackSheffield 6.0",
    longDescription:
      "Uses the javascript 3d library Three.js to render scenes within the web browser.",
    images: [
      "assets/screenshots/3d_virtual_gallery/virtual1.png",
      "assets/screenshots/3d_virtual_gallery/virtual2.png",
      "assets/screenshots/3d_virtual_gallery/virtual3.png",
      "assets/screenshots/3d_virtual_gallery/virtual4.png",
    ],
  },

  {
    title: "Meeting Schedular Mobile App",
    shortDescripton:
      "University assignment to make a meeting scheduler prototype.",
    longDescription:
      "Uses Android studio and firebase. Has User authentication, ability to create meetings with specific users and an in-built chat system.",
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
      "Worked with IBM during a university assignment utilising IBM Watson.",
    longDescription:
      "The webb app would scan a selected area of the map and mark signs of life within that area using IBM watson and image recognition AI",
    images: [
      "assets/screenshots/ibm_missingmaps/missingmaps1.jpg",
      "assets/screenshots/ibm_missingmaps/missingmaps1.jpg",
      "assets/screenshots/ibm_missingmaps/missingmaps1.jpg",
      "assets/screenshots/ibm_missingmaps/missingmaps1.jpg",
    ],
  },

  {
    title: "Drawing Tool",
    shortDescripton:
      "University assignment to develop a paint like program in C++.",
    longDescription:
      "Developed in my Object-Orientd programming module at university. The application was to help us understand OOP principles and put them into good practice.",
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
    longDescription:
      "Uses the Three.js 3d library. The goal of the game is to jump on the rocks while lava is rising. THe higher you go the more your score increases",
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
    longDescription:
      "Sumo slam was my first external project outside of university work. The aim of the game is to knock the opponent player out of the ring. You have access to boost and shield powerups which add more layers of depth to the game. This game was developed using Unity and C# object-oriented programming. However due to my lack of experience in modelling tools such as blender, I was unable to import fitting models for the game so the players are cubes. In the future I would love to revisit this game and add models, more levels and custom music.",
    images: [
      "assets/screenshots/sumo_slam/sumoslam.jpg",
      "assets/screenshots/sumo_slam/sumoslam2.jpg",
      "assets/screenshots/sumo_slam/sumoslam3.jpg",
      "assets/screenshots/sumo_slam/sumoslam4.jpg",
    ],
  },

  {
    title: "Movie Night",
    shortDescripton: "A web app to find information on shows and movies",
    longDescription:
      "Developed during my first 24 hour hackathon. Uses the OMDb api to get movie information such as description, trailer and cover photo.",
    images: [
      "assets/screenshots/movie_night/movienight.jpg",
      "assets/screenshots/movie_night/movienight2.jpg",
      "assets/screenshots/movie_night/movienight3.jpg",
      "assets/screenshots/movie_night/movienight3.jpg",
    ],
  },

  {
    title: "Car Park Simulator",
    shortDescripton:
      "University Project to simulate a car park system using C#.",
    longDescription:
      "Developed during my systems modeeling module in first year of university.",
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
