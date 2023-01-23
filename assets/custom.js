// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// tab carocel js
var splides = document.querySelectorAll(".cirtus_meet_tabs_22");
if (splides.length) {
  for (var i = 0; i < splides.length; i++) {
    var splideElement = splides[i];
    var splideDefaultOptions = {
      rewind: true,
      arrows: true,
      type: "slide",
      focus: "left",
      autoplay: false,
      rewindSpeed: 500,
      speed: 500,
      pauseOnHover: true,
      perPage: 6,
      perMove: 2,
      breakpoints: {
        375: {
          perPage: 1,
        },
        576: {
          perPage: 2,
        },
        991: {
          perPage: 3,
        },
        992: {
          perPage: 3,
        },
        1024: {
          perPage: 4,
        },
        1200: {
          perPage: 6,
        },
        1440: {
          perPage: 6,
        },
      },
    };

    new Splide(splideElement, splideDefaultOptions).mount();
  }
}
/* ************************************************************************************** */

// product tab js
//for tab switcher
filterBestDog("citrusd_drydog");

function filterBestDog(c) {
  var x, i;
  x = document.getElementsByClassName("citrusfilterMeetDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClassBestDog(x[i], "citrusTabshow");
    if (x[i].className.indexOf(c) > -1) AddClassDogBest(x[i], "citrusTabshow");
  }
}

function AddClassDogBest(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClassBestDog(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var dogBtnContainer = document.getElementById("citrusMeetTabId");
var dogBestbtns = dogBtnContainer.getElementsByClassName(
  "citrus_meet_tab_item"
);
for (var i = 0; i < dogBestbtns.length; i++) {
  dogBestbtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName(
      "citrus_meet_tab_item_active"
    );
    current[0].className = current[0].className.replace(
      " citrus_meet_tab_item_active",
      ""
    );
    this.className += " citrus_meet_tab_item_active";
  });
}
//for Dog best seller tab switcher
// --------------------for hiding arrow-------------------------
/* for hiding arrow set opacity 0 in style sheet
.cirtus_meet_tabs_22 .splide__arrow:disabled,
.citrus-meet-section__tab-content .splide__arrow:disabled {
  opacity: 0;
}
*/
arrowHide("splide01");
arrowHide("splide02");
arrowHide("splide04");
arrowHide("splide06");
arrowHide("splide07");
function arrowHide(id) {
  var splide = new Splide("#" + id, {
    focus: "right",
  });
  splide.on("visible", function (slide) {
    //hides right arrow if last slide visible
    if (
      slide.index === splide.length - 1 &&
      splide.Components &&
      splide.Components.Arrows &&
      splide.Components.Arrows.arrows &&
      splide.Components.Arrows.arrows.next
    ) {
      if (!splide.Components.Arrows.arrows.next.disabled) {
        splide.Components.Arrows.arrows.next.disabled = true;
      }
    }
    //hides left arrow if first slide visible
    if (
      slide.index === 0 &&
      splide.Components &&
      splide.Components.Arrows &&
      splide.Components.Arrows.arrows &&
      splide.Components.Arrows.arrows.prev
    ) {
      if (!splide.Components.Arrows.arrows.prev.disabled) {
        splide.Components.Arrows.arrows.prev.disabled = true;
      }
    }
  });

  splide.mount();
}
// -------------------------------------------
//slider script

new Splide(".splide", {
  type: "loop",
  interval: 5000,
  autoplay: true,
}).mount();
