/* --------------------------------------------------------------------
ICON BOX FUNCTIONS
-------------------------------------------------------------------- */

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
    var circles = svg.find("circle");
    var allPaths = [...paths, ...circles];
    console.log(paths);
    console.log(allPaths);
    var text = element.find("h3")[0];
    for (var i = 0; i < allPaths.length; i++) {
      allPaths[i].style.fill = color;
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
    var circles = svg.find("circle");
    var allPaths = [...paths, ...circles];
    console.log(allPaths);
    var text = element.find("h3")[0];
    for (var i = 0; i < allPaths.length; i++) {
      allPaths[i].style.fill = colorPost;
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
      } else {
        // If cookie key given, set cookie equal the index of the selection box within its container
        if (cookieKey) {
          // We use session storage here instead of the normal cookie and save the index within the container as value
          sessionStorage.setItem(cookieKey, j);
    	};
      };
    }
  }, 0);
}
