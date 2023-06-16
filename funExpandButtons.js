/* --------------------------------------------------------------------
EXPAND BUTTON FUNCTIONS
-------------------------------------------------------------------- */

function initializeExpandButton(element, color) {
  /*  
    ACTION:		Initializes an expand button in a given color.
    -----
    PARAMS:		element				HTML-element to be animated
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
      // Order of outer and inner path switched comp. to arrow buttons
      var innerPath = paths[0];
      var outerPath = paths[1];
      var arrowPath = paths[2];
      outerPath.style.fill = color;
      arrowPath.style.fill = color;
      innerPath.style.fill = color;
      text.style.color = color;
      innerPath.style.opacity = 0;
    }
  }, 0);
}

function hoverExpandButton(element, reverse) {
  /*
    ACTION:		Changes colors/opacities when hovered on button's div.
    -----
    PARAMS:		element				HTML-element to be animated
    FLAGS:		reverse			Set to true if reversely played (i.e. mouseleave)
    -----
    RETURNS:	-
    */
  setTimeout(() => {
    var svg = element.find("svg");
    var paths = svg.find("path");
    if (paths.length > 0) {
      // Order of outer and inner path switched comp. to arrow buttons
      var innerPath = paths[0];
      var outerPath = paths[1];
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

function clickExpandButton(element) {
  /*
    ACTION:		Switches arrow from down to up when clicked on button div
                and changes its state in session storage
    -----
    PARAMS:		element				HTML-element to be animated
    FLAGS:		-
    -----
    RETURNS:	-
    */
  setTimeout(() => {
    var svg = element.find("svg");
    var paths = svg.find("path");
    if (paths.length > 0) {
      // Order of outer and inner path switched comp. to arrow buttons
      var innerPath = paths[0];
      var outerPath = paths[1];
      var arrowPath = paths[2];
      if (
        sessionStorage.getItem(`${element[0].id}_expanded`) == "false" ||
        !sessionStorage.getItem(`${element[0].id}_expanded`)
      ) {
        // Animation forwards
        sessionStorage.setItem(`${element[0].id}_expanded`, true);
        innerPath.style.opacity = 1;
        arrowPath.style.opacity = 0;
        svg.css("transform", "rotate(180deg)");
      } else {
        // Animation forwards
        sessionStorage.setItem(`${element[0].id}_expanded`, false);
        innerPath.style.opacity = 0;
        arrowPath.style.opacity = 1;
        svg.css("transform", "rotate(0deg)");
      }
    }
  }, 0);
}
