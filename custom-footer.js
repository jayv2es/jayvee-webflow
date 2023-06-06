/* --------------------------------------------------------------------
FUNCTIONS
-------------------------------------------------------------------- */

// HELPER FUNCTIONS

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString() + ";";
  if (exdays == false) {
    expires = "";
  }
  document.cookie =
    cname + "=" + cvalue + ";" + expires + "path=/;SameSite=None;Secure";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// LOADING SCREEN

function displayLoadingScreen(container, title, text, color) {
    /*  
    ACTION:		Displays a loading screen inside a given container
    -----
    PARAMS:		container	  The div where the HTML should be replaced by the loading screen
              title       The title of the loading screen
              text        The text of the loading screen
    FLAGS:		-
    -----
    RETURNS:	-
    */
    var newClass = "loading-screen";
    var newInnerHTML = `
      <div class="loading-screen-title">${title}</div>
      <div class="loading-screen-loader">
        <svg class="loader" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
        viewBox="0 0 2480 3507"
        xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Ebene_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"/>
            <path fill="${color}" d="M1240 1473c155,0 281,126 281,281 0,155 -126,281 -281,281 -68,0 -130,-24 -178,-64l101 0c9,0 16,-7 16,-16l0 0c0,-9 -7,-16 -16,-16l-134 0c-43,-49 -69,-114 -69,-185 0,-155 126,-281 281,-281zm20 64l80 14c8,1 14,9 12,17l-39 223c-1,8 -9,14 -17,12l-80 -14 0 0 0 0 0 0c-9,-2 -14,-10 -13,-18l6 -32c1,-8 9,-15 18,-13l1 0c8,1 14,10 12,19l-2 10c-1,3 2,6 5,7l37 7c3,1 6,-2 7,-5l32 -179c1,-3 -2,-6 -5,-7l-58 -10c-9,-2 -14,-10 -13,-18l0 0c2,-9 10,-14 18,-13zm-36 280l11 80c0,1 1,2 2,2 1,0 2,0 3,-1l37 -71c3,-6 9,-9 16,-7l0 0c5,1 9,4 11,8 2,5 2,9 0,14l-68 123c-2,4 -7,6 -12,6 -5,-1 -8,-4 -9,-9l-22 -139c-1,-5 1,-10 4,-13 4,-4 8,-5 13,-4l0 0c6,1 11,6 12,12z"/>
          </g>
        </svg>
      </div>
      <div class="loading-screen-p">${text}</div>
    </div>
    <style>
      .loading-screen-title {
        color: ${color};
        font-weight: 700;
      }
      .loading-screen-p {
        color: ${color};
        font-weight: 400;
      }
      .loading-screen-loader {
        animation: spin 1s linear infinite;
      }
      .loading-screen {
        justify-content: center;
        align-items: center;
        font-family: "Quicksand";
        text-align: center;
        font-size: 20px;
      }
      @keyframes spin{
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>`;
    let oldClass = $(container).attr("class");
    $(container).attr("class", `${oldClass} ${newClass}`);
    $(container).html(newInnerHTML);
}


// INIT FUNCTIONS

function initializeArrowButton(element, color) {
  /*  
    ACTION:		Initializes an arrow button in a given color.
    -----
    PARAMS:		id				HTML-element to be animated
                color			The color of the button (i.e. ring + arrow when not animated)
                                -> Input as HEX-String, e.g. "#ABCDEF"
    FLAGS:		-
    -----
    RETURNS:	-
    */
  setTimeout(() => {
    var svg = element.find("svg");
    var text = element.children()[1];
    var paths = svg.find("path");
    if (paths.length > 0) {
      var outerPath = paths[0];
      var innerPath = paths[1];
      var arrowPath = paths[2];
      outerPath.style.fill = color;
      arrowPath.style.fill = color;
      innerPath.style.fill = color;
      text.style.color = color;
      innerPath.style.opacity = 0;
    }
  }, 0);
}

function initializeIconBox(element, color) {
  /*
    ACTION:		Initializes an icon box in a given color.
    -----
    PARAMS:		element		HTML-element to be animated
                color		The color of the button (i.e. ring + arrow when not animated)
                            -> Input as HEX-String, e.g. "#ABCDEF"
    FLAGS:		-
    -----
    RETURNS:		-
    */
  setTimeout(() => {
    var svg = element.find("svg");
    var paths = svg.find("path");
    var text = element.find("h3")[0];
    for (var i = 0; i < paths.length; i++) {
      paths[i].style.fill = color;
    }
    text.style.color = color;
    element.css("border-color", color);
    element.css(
      "background-color",
      `rgba(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${
        hexToRgb(color).b
      }, 0.2)`
    );
  }, 0);
}

// HOVER AND CLICK FUNCTIONS

function hoverArrowButton(element, reverse) {
  /*
    ACTION:		Plays animation when hovered on button's div.
    -----
    PARAMS:		id				HTML-element to be animated
    FLAGS:		reverse			Set to true if reversely played (i.e. mouseleave)
    -----
    RETURNS:	-
    */
  setTimeout(() => {
    var svg = element.find("svg");
    var paths = svg.find("path");
    if (paths.length > 0) {
      var outerPath = paths[0];
      var innerPath = paths[1];
      var arrowPath = paths[2];
      if (!reverse) {
        // Animation forwards
        innerPath.style.opacity = 1;
        arrowPath.style.opacity = 0;
        element.css("cursor", "pointer");
      } else {
        // Animation forwards
        innerPath.style.opacity = 0;
        arrowPath.style.opacity = 1;
        element.css("cursor", "default");
      }
    }
  }, 0);
}

function hoverTextOrIconBox(element, reverse, color) {
  /*
    ACTION:		Makes background slightly white when hovered on box
    -----
    PARAMS:		element			HTML-element to be animated
    FLAGS:		reverse			Set to true if reversely played (i.e. mouseleave)
    -----
    RETURNS:	-
    */
  setTimeout(() => {
    if (!reverse) {
      // Animation forwards
      element.css(
        "background-color",
        `rgba(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${
          hexToRgb(color).b
        }, 0.4)`
      );
      element.css("cursor", "pointer");
    } else {
      // Animation backwards
      element.css(
        "background-color",
        `rgba(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${
          hexToRgb(color).b
        }, 0.2)`
      );
      element.css("cursor", "default");
    }
  }, 0);
}

function clickIconBox(
  container,
  element,
  colorPre,
  colorPost,
  formField = false,
  cookieKey = false
) {
  /*
    ACTION:		Changes design of button when clicked and executes action
    -----
    PARAMS:		container		The container two levels above the icon boxes
                element			HTML-element to be animated
                colorPre		The color of the button (i.e. ring + arrow when not animated)
                colorPost		The color of the button after being clicked
                                    -> Input as HEX-String, e.g. "#ABCDEF"
                *formField      If icon box part of a form, formField is the jQuery-object of the form field
                                the answer has to be put in.
                *cookieKey      The key (string) of the cookie where the answer should be stored.
    FLAGS:		-
    -----
    RETURNS:	-
    */
  setTimeout(() => {
    var svg = element.find("svg");
    var paths = svg.find("path");
    var text = element.find("h3")[0];
    for (var i = 0; i < paths.length; i++) {
      paths[i].style.fill = colorPost;
    }
    text.style.color = colorPost;
    element.css(
      "background-color",
      `rgba(${hexToRgb(colorPre).r}, ${hexToRgb(colorPre).g}, ${
        hexToRgb(colorPre).b
      }, 1)`
    );
    // Remove event listeners on this element
    element.off("click");
    element.off("mouseenter");
    element.off("mouseleave");
    if (formField) {
      formField.val(element.find("h3")[0].innerHTML);
    }
    if (cookieKey) {
      // We use session storage here instead of the normal cookie
      sessionStorage.setItem(cookieKey, element.find("h3")[0].innerHTML);
    }
    // Reset style and event listeners of the other icon boxes in the container
    for (var j = 0; j < container[0].children.length; j++) {
      let currElement = $(container[0].children[j].children[0]);
      if (currElement[0].id != element[0].id) {
        console.log(currElement[0].id);
        // First deactivate all event listeners (for them not to cumulate)
        currElement.off("click");
        currElement.off("mouseenter");
        currElement.off("mouseleave");
        // Now initialize and reactivate event listeners
        initializeIconBox(currElement, colorPre);
        currElement.on("mouseenter", () => {
          hoverTextOrIconBox(currElement, false, colorPre);
        });
        currElement.on("mouseleave", () => {
          hoverTextOrIconBox(currElement, true, colorPre);
        });
        currElement.on("click", () => {
          clickIconBox(
            container,
            currElement,
            colorPre,
            colorPost,
            formField,
            cookieKey
          );
        });
      }
    }
  }, 0);
}

// SPECIFIC FUNCTIONS

function eduConfigureOffer(selectedBox1, selectedBox2, selectedBox3) {
  /*
    ACTION:		Reads in selection box choices and returns a new HTML presenting the best
                offer based on the users choices.
    -----
    PARAMS:		selectedBox(i)      The container index of the selected icon box inside its container,
                                    where i is the container number.
    FLAGS:		-
    -----
    RETURNS:	newHTML             The new HTML inside #edu-tutoring-form, where the best
                                    option gets presented.          
    */
  switch (selectedBox1) {
    case 1:
  }
}

$(document).ready(() => {
  /* --------------------------------------------------------------------
    RESET STORAGE AND COOKIES
    -------------------------------------------------------------------- */
  sessionStorage.removeItem("edu-tutoring-input-1");
  sessionStorage.removeItem("edu-tutoring-input-2");
  sessionStorage.removeItem("edu-tutoring-input-3");

  /* --------------------------------------------------------------------
    INITIALIZE
    -------------------------------------------------------------------- */
  $('#edu-tutoring-form-submit-error').hide();
  
  initializeArrowButton($("#main-intro-button-1"), "#000000");
  initializeArrowButton($("#main-summary-button-1"), "#FFFFFF");
  initializeArrowButton($("#main-summary-button-2"), "#FFFFFF");
  initializeArrowButton($("#main-summary-button-3"), "#FFFFFF");
  initializeArrowButton($("#main-services-edu-button"), "#969939");
  initializeArrowButton($("#main-services-des-button"), "#992D29");
  initializeArrowButton($("#main-services-prod-button"), "#376D99");
  initializeArrowButton($("#edu-intro-button-1"), "#FFFFFF");
  initializeArrowButton($("#edu-intro-button-2"), "#FFFFFF");

  initializeIconBox($("#edu-tutoring-form-1-1"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-1-2"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-1-3"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-2-1"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-2-2"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-2-3"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-3-1"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-3-2"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-3-3"), "#FFFFFF");

  /* --------------------------------------------------------------------
    ANIMATION: BUTTONS
    -------------------------------------------------------------------- */
  $("#main-intro-button-1").on("mouseenter", () => {
    hoverArrowButton($("#main-intro-button-1"), false);
  });
  $("#main-intro-button-1").on("mouseleave", () => {
    hoverArrowButton($("#main-intro-button-1"), true);
  });

  $("#main-summary-button-2").on("mouseenter", () => {
    hoverArrowButton($("#main-summary-button-2"), false);
  });
  $("#main-summary-button-2").on("mouseleave", () => {
    hoverArrowButton($("#main-summary-button-2"), true);
  });

  $("#main-summary-button-3").on("mouseenter", () => {
    hoverArrowButton($("#main-summary-button-3"), false);
  });
  $("#main-summary-button-3").on("mouseleave", () => {
    hoverArrowButton($("#main-summary-button-3"), true);
  });

  $("#main-services-edu-button").on("mouseenter", () => {
    hoverArrowButton($("#main-services-edu-button"), false);
  });
  $("#main-services-edu-button").on("mouseleave", () => {
    hoverArrowButton($("#main-services-edu-button"), true);
  });

  $("#main-services-des-button").on("mouseenter", () => {
    hoverArrowButton($("#main-services-des-button"), false);
  });
  $("#main-services-des-button").on("mouseleave", () => {
    hoverArrowButton($("#main-services-des-button"), true);
  });

  $("#main-services-prod-button").on("mouseenter", () => {
    hoverArrowButton($("#main-services-prod-button"), false);
  });
  $("#main-services-prod-button").on("mouseleave", () => {
    hoverArrowButton($("#main-services-prod-button"), true);
  });

  $("#edu-intro-button-1").on("mouseenter", () => {
    hoverArrowButton($("#edu-intro-button-1"), false);
  });
  $("#edu-intro-button-1").on("mouseleave", () => {
    hoverArrowButton($("#edu-intro-button-1"), true);
  });

  $("#edu-intro-button-2").on("mouseenter", () => {
    hoverArrowButton($("#edu-intro-button-2"), false);
  });
  $("#edu-intro-button-2").on("mouseleave", () => {
    hoverArrowButton($("#edu-intro-button-2"), true);
  });

  /* --------------------------------------------------------------------
    EDU / TUTORING: ICON BOXES
    -------------------------------------------------------------------- */
  $("#edu-tutoring-form-1-1").on("mouseenter", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-1-1"), false, "#FFFFFF");
  });
  $("#edu-tutoring-form-1-1").on("mouseleave", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-1-1"), true, "#FFFFFF");
  });
  $("#edu-tutoring-form-1-1").on("click", () => {
    clickIconBox(
      $("#edu-tutoring-form-1"),
      $("#edu-tutoring-form-1-1"),
      "#FFFFFF",
      "#969939",
      false,
      "edu-tutoring-input-1"
    );
  });

  $("#edu-tutoring-form-1-2").on("mouseenter", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-1-2"), false, "#FFFFFF");
  });
  $("#edu-tutoring-form-1-2").on("mouseleave", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-1-2"), true, "#FFFFFF");
  });
  $("#edu-tutoring-form-1-2").on("click", () => {
    clickIconBox(
      $("#edu-tutoring-form-1"),
      $("#edu-tutoring-form-1-2"),
      "#FFFFFF",
      "#969939",
      false,
      "edu-tutoring-input-1"
    );
  });

  $("#edu-tutoring-form-1-3").on("mouseenter", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-1-3"), false, "#FFFFFF");
  });
  $("#edu-tutoring-form-1-3").on("mouseleave", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-1-3"), true, "#FFFFFF");
  });
  $("#edu-tutoring-form-1-3").on("click", () => {
    clickIconBox(
      $("#edu-tutoring-form-1"),
      $("#edu-tutoring-form-1-3"),
      "#FFFFFF",
      "#969939",
      false,
      "edu-tutoring-input-1"
    );
  });

  $("#edu-tutoring-form-2-1").on("mouseenter", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-2-1"), false, "#FFFFFF");
  });
  $("#edu-tutoring-form-2-1").on("mouseleave", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-2-1"), true, "#FFFFFF");
  });
  $("#edu-tutoring-form-2-1").on("click", () => {
    clickIconBox(
      $("#edu-tutoring-form-2"),
      $("#edu-tutoring-form-2-1"),
      "#FFFFFF",
      "#969939",
      false,
      "edu-tutoring-input-2"
    );
  });

  $("#edu-tutoring-form-2-2").on("mouseenter", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-2-2"), false, "#FFFFFF");
  });
  $("#edu-tutoring-form-2-2").on("mouseleave", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-2-2"), true, "#FFFFFF");
  });
  $("#edu-tutoring-form-2-2").on("click", () => {
    clickIconBox(
      $("#edu-tutoring-form-2"),
      $("#edu-tutoring-form-2-2"),
      "#FFFFFF",
      "#969939",
      false,
      "edu-tutoring-input-2"
    );
  });

  $("#edu-tutoring-form-2-3").on("mouseenter", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-2-3"), false, "#FFFFFF");
  });
  $("#edu-tutoring-form-2-3").on("mouseleave", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-2-3"), true, "#FFFFFF");
  });
  $("#edu-tutoring-form-2-3").on("click", () => {
    clickIconBox(
      $("#edu-tutoring-form-2"),
      $("#edu-tutoring-form-2-3"),
      "#FFFFFF",
      "#969939",
      false,
      "edu-tutoring-input-2"
    );
  });

  $("#edu-tutoring-form-3-1").on("mouseenter", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-3-1"), false, "#FFFFFF");
  });
  $("#edu-tutoring-form-3-1").on("mouseleave", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-3-1"), true, "#FFFFFF");
  });
  $("#edu-tutoring-form-3-1").on("click", () => {
    clickIconBox(
      $("#edu-tutoring-form-3"),
      $("#edu-tutoring-form-3-1"),
      "#FFFFFF",
      "#969939",
      false,
      "edu-tutoring-input-3"
    );
  });

  $("#edu-tutoring-form-3-2").on("mouseenter", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-3-2"), false, "#FFFFFF");
  });
  $("#edu-tutoring-form-3-2").on("mouseleave", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-3-2"), true, "#FFFFFF");
  });
  $("#edu-tutoring-form-3-2").on("click", () => {
    clickIconBox(
      $("#edu-tutoring-form-3"),
      $("#edu-tutoring-form-3-2"),
      "#FFFFFF",
      "#969939",
      false,
      "edu-tutoring-input-3"
    );
  });

  $("#edu-tutoring-form-3-3").on("mouseenter", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-3-3"), false, "#FFFFFF");
  });
  $("#edu-tutoring-form-3-3").on("mouseleave", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-3-3"), true, "#FFFFFF");
  });
  $("#edu-tutoring-form-3-3").on("click", () => {
    clickIconBox(
      $("#edu-tutoring-form-3"),
      $("#edu-tutoring-form-3-3"),
      "#FFFFFF",
      "#969939",
      false,
      "edu-tutoring-input-3"
    );
  });

  $("#edu-tutoring-form-submit").on("mouseenter", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-submit"), false, "#FFFFFF");
  });
  $("#edu-tutoring-form-submit").on("mouseleave", () => {
    hoverTextOrIconBox($("#edu-tutoring-form-submit"), true, "#FFFFFF");
  });
  $("#edu-tutoring-form-submit").on("click", () => {
    // Check if any input empty
    for(let i=0; i<3; i++) {
      if(!sessionStorage.getItem(`edu-tutoring-input-${i+1}`)) {
        $('#edu-tutoring-form-submit-error').show();
        break;
      } else {
        $('#edu-tutoring-form-submit-error').hide();
        displayLoadingScreen($('#edu-tutoring-form'), "Bitte einen Moment Geduld...", "Wir sind auf der Suche nach dem besten Angebot nur für Dich :)", '#FFFFFF');
      }
    }
  });
});
