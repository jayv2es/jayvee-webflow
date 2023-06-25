/* --------------------------------------------------------------------
ARROW BUTTON FUNCTIONS
-------------------------------------------------------------------- */

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
