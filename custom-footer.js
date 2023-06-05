/* --------------------------------------------------------------------
FUNCTIONS
-------------------------------------------------------------------- */

// HELPER FUNCTIONS

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// INIT FUNCTIONS

function initializeButton(element, color) {
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
        var svg = element.find('svg');
        var text = element.children()[1];
        var paths = svg.find('path');
        if(paths.length > 0) {
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
                    color		The color of the button (i.e. ring + arrow when not 									animated)
                                -> Input as HEX-String, e.g. "#ABCDEF"
        FLAGS:		-
        -----
        RETURNS:		-
        */
    setTimeout(() => {
        var svg = element.find('svg');
        var paths = svg.find('path');
        var text = element.find('h3')[0];
        for(var i=0; i<paths.length; i++) {
        paths[i].style.fill = color;
        };
        text.style.color = color;
        element.css("border-color", color);
        element.css("background-color", `rgba(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${hexToRgb(color).b}, 0)`);
    }, 0);
}

// ANIMATION FUNCTIONS

function arrowButton(element, reverse) {
    /*
    ACTION:		Plays animation when hovered on button's div.
    -----
    PARAMS:		id				HTML-element to be animated
    FLAGS:		reverse			Set to true if reversely played (i.e. mouseleave)
    -----
    RETURNS:	-
    */
    setTimeout(() => {
        var svg = element.find('svg');
        var paths = svg.find('path');
        if(paths.length > 0) {
        var outerPath = paths[0];
        var innerPath = paths[1];
        var arrowPath = paths[2];
        if(!reverse) {
            // Animation forwards
            innerPath.style.opacity = 1;
            arrowPath.style.opacity = 0;
            element.css('cursor', 'pointer');
        } else {
            // Animation forwards
            innerPath.style.opacity = 0;
            arrowPath.style.opacity = 1;
            element.css('cursor', 'default');
        }
        }
    }, 0);     
}

function hoverIconBox(element, reverse, color) {
    /*
    ACTION:		Makes background slightly white when hovered on box
    -----
    PARAMS:		element			HTML-element to be animated
    FLAGS:		reverse			Set to true if reversely played (i.e. mouseleave)
    -----
    RETURNS:	-
    */
    setTimeout(() => {
        if(!reverse) {
        // Animation forwards
        element.css('background-color', `rgba(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${hexToRgb(color).b}, 0.2)`);
        element.css('cursor', 'pointer');
        } else {
        // Animation backwards
        element.css('background-color', `rgba(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${hexToRgb(color).b}, 0)`);
        element.css('cursor', 'default');
        }
    }, 0)
}

function clickIconBox(container, element, colorPre, colorPost) {
    /*
    ACTION:		Changes design of button when clicked and executes action
    -----
    PARAMS:		container		The container two levels above the icon boxes
                element			HTML-element to be animated
                colorPre		The color of the button (i.e. ring + arrow when not animated)
                colorPost		The color of the button after being clicked
                                    -> Input as HEX-String, e.g. "#ABCDEF"
    FLAGS:		-
    -----
    RETURNS:	-
    */
    setTimeout(() => {
        var svg = element.find('svg');
        var paths = svg.find('path');
        var text = element.find('h3')[0];
        for(var i=0; i<paths.length; i++) {
        paths[i].style.fill = colorPost;
        };
        text.style.color = colorPost;
        element.css('background-color', `rgba(${hexToRgb(colorPre).r}, ${hexToRgb(colorPre).g}, ${hexToRgb(colorPre).b}, 1)`);
        // Remove event listeners on this element
        element.off("click");
        element.off("mouseenter");
        element.off("mouseleave");
        // Reset style and event listeners of the other icon boxes in the container
        for(var j=0; j<container[0].children.length; j++) {
        let currElement = $(container[0].children[j].children[0]);
        if(currElement[0].id != element[0].id) {
            console.log(currElement[0].id);
            // First deactivate all event listeners (for them not to cumulate)
            currElement.off("click");
            currElement.off("mouseenter");
            currElement.off("mouseleave");
            // Now initialize and reactivate event listeners
            initializeIconBox(currElement, colorPre);
            currElement.on("mouseenter", () => {
            hoverIconBox(currElement, false, colorPre);
            });
            currElement.on("mouseleave", () => {
            hoverIconBox(currElement, true, colorPre);
            });
            currElement.on("click", () => {
            clickIconBox(container, currElement, colorPre, colorPost);
            formField.val(currElement.find('h3')[0].innerHTML);
            });
        };
        };
    }, 0)
}  

$(document).ready(() => {
    /* --------------------------------------------------------------------
    INITIALIZE
    -------------------------------------------------------------------- */
        initializeButton($('#main-intro-button-1'), '#000000');
        initializeButton($('#main-summary-button-1'), '#FFFFFF');
        initializeButton($('#main-summary-button-2'), '#FFFFFF');
        initializeButton($('#main-summary-button-3'), '#FFFFFF');
        initializeButton($('#main-services-edu-button'), '#969939');
        initializeButton($('#main-services-des-button'), '#992D29');
        initializeButton($('#main-services-prod-button'), '#376D99');
        initializeButton($('#edu-intro-button-1'), '#FFFFFF');
        initializeButton($('#edu-intro-button-2'), '#FFFFFF');

        initializeIconBox($('#edu-tutoring-form-1-1'), '#FFFFFF');
        initializeIconBox($('#edu-tutoring-form-1-2'), '#FFFFFF');
        initializeIconBox($('#edu-tutoring-form-1-3'), '#FFFFFF');
        initializeIconBox($('#edu-tutoring-form-2-1'), '#FFFFFF');
        initializeIconBox($('#edu-tutoring-form-2-2'), '#FFFFFF');
        initializeIconBox($('#edu-tutoring-form-2-3'), '#FFFFFF');
        initializeIconBox($('#edu-tutoring-form-3-1'), '#FFFFFF');
        initializeIconBox($('#edu-tutoring-form-3-2'), '#FFFFFF');
        initializeIconBox($('#edu-tutoring-form-3-3'), '#FFFFFF');

    /* --------------------------------------------------------------------
    ANIMATION: BUTTONS
    -------------------------------------------------------------------- */
        $('#main-intro-button-1').on("mouseenter", () => {
            arrowButton($('#main-intro-button-1'), false);
        });
        $('#main-intro-button-1').on("mouseleave", () => {
            arrowButton($('#main-intro-button-1'), true);
        });

        $('#main-summary-button-2').on("mouseenter", () => {
            arrowButton($('#main-summary-button-2'), false);
        });
        $('#main-summary-button-2').on("mouseleave", () => {
            arrowButton($('#main-summary-button-2'), true);
        });

        $('#main-summary-button-3').on("mouseenter", () => {
            arrowButton($('#main-summary-button-3'), false);
        });
        $('#main-summary-button-3').on("mouseleave", () => {
            arrowButton($('#main-summary-button-3'), true);
        });

        $('#main-services-edu-button').on("mouseenter", () => {
            arrowButton($('#main-services-edu-button'), false);
        });
        $('#main-services-edu-button').on("mouseleave", () => {
            arrowButton($('#main-services-edu-button'), true);
        });

        $('#main-services-des-button').on("mouseenter", () => {
            arrowButton($('#main-services-des-button'), false);
        });
        $('#main-services-des-button').on("mouseleave", () => {
            arrowButton($('#main-services-des-button'), true);
        });

        $('#main-services-prod-button').on("mouseenter", () => {
            arrowButton($('#main-services-prod-button'), false);
        });
        $('#main-services-prod-button').on("mouseleave", () => {
            arrowButton($('#main-services-prod-button'), true);
        });

        $('#edu-intro-button-1').on("mouseenter", () => {
            arrowButton($('#edu-intro-button-1'), false);
        });
        $('#edu-intro-button-1').on("mouseleave", () => {
            arrowButton($('#edu-intro-button-1'), true);
        });

        $('#edu-intro-button-2').on("mouseenter", () => {
            arrowButton($('#edu-intro-button-2'), false);
        });
        $('#edu-intro-button-2').on("mouseleave", () => {
            arrowButton($('#edu-intro-button-2'), true);
        });

    /* --------------------------------------------------------------------
    ANIMATION: ICON BOXES
    -------------------------------------------------------------------- */
        $('#edu-tutoring-form-1-1').on("mouseenter", () => {
            hoverIconBox($('#edu-tutoring-form-1-1'), false, '#FFFFFF');
        });
        $('#edu-tutoring-form-1-1').on("mouseleave", () => {
            hoverIconBox($('#edu-tutoring-form-1-1'), true, '#FFFFFF');
        });
        $('#edu-tutoring-form-1-1').on("click", () => {
            clickIconBox($('#edu-tutoring-form-1'), $('#edu-tutoring-form-1-1'), $('#edu-tutoring-form-field-1'), '#FFFFFF', '#969939');
            setCookie("edu-tutoring-input-1", $('#edu-tutoring-form-1-1').find('h3')[0].innerHTML, 30);
        });

        $('#edu-tutoring-form-1-2').on("mouseenter", () => {
            hoverIconBox($('#edu-tutoring-form-1-2'), false, '#FFFFFF');
        });
        $('#edu-tutoring-form-1-2').on("mouseleave", () => {
            hoverIconBox($('#edu-tutoring-form-1-2'), true, '#FFFFFF');
        });
        $('#edu-tutoring-form-1-2').on("click", () => {
            clickIconBox($('#edu-tutoring-form-1'), $('#edu-tutoring-form-1-2'), $('#edu-tutoring-form-field-1'), '#FFFFFF', '#969939');
            setCookie("edu-tutoring-input-1", $('#edu-tutoring-form-1-2').find('h3')[0].innerHTML, 30);
        });

        $('#edu-tutoring-form-1-3').on("mouseenter", () => {
            hoverIconBox($('#edu-tutoring-form-1-3'), false, '#FFFFFF');
        });
        $('#edu-tutoring-form-1-3').on("mouseleave", () => {
            hoverIconBox($('#edu-tutoring-form-1-3'), true, '#FFFFFF');
        });
        $('#edu-tutoring-form-1-3').on("click", () => {
            clickIconBox($('#edu-tutoring-form-1'), $('#edu-tutoring-form-1-3'), $('#edu-tutoring-form-field-1'), '#FFFFFF', '#969939');
            setCookie("edu-tutoring-input-1", $('#edu-tutoring-form-1-3').find('h3')[0].innerHTML, 30);
        });

        $('#edu-tutoring-form-2-1').on("mouseenter", () => {
            hoverIconBox($('#edu-tutoring-form-2-1'), false, '#FFFFFF');
        });
        $('#edu-tutoring-form-2-1').on("mouseleave", () => {
            hoverIconBox($('#edu-tutoring-form-2-1'), true, '#FFFFFF');
        });
        $('#edu-tutoring-form-2-1').on("click", () => {
            clickIconBox($('#edu-tutoring-form-2'), $('#edu-tutoring-form-2-1'), $('#edu-tutoring-form-field-2'), '#FFFFFF', '#969939');
            setCookie("edu-tutoring-input-2", $('#edu-tutoring-form-2-1').find('h3')[0].innerHTML, 30);
        });

        $('#edu-tutoring-form-2-2').on("mouseenter", () => {
            hoverIconBox($('#edu-tutoring-form-2-2'), false, '#FFFFFF');
        });
        $('#edu-tutoring-form-2-2').on("mouseleave", () => {
            hoverIconBox($('#edu-tutoring-form-2-2'), true, '#FFFFFF');
        });
        $('#edu-tutoring-form-2-2').on("click", () => {
            clickIconBox($('#edu-tutoring-form-2'), $('#edu-tutoring-form-2-2'), $('#edu-tutoring-form-field-2'), '#FFFFFF', '#969939');
            setCookie("edu-tutoring-input-2", $('#edu-tutoring-form-2-2').find('h3')[0].innerHTML, 30);
        });

        $('#edu-tutoring-form-2-3').on("mouseenter", () => {
            hoverIconBox($('#edu-tutoring-form-2-3'), false, '#FFFFFF');
        });
        $('#edu-tutoring-form-2-3').on("mouseleave", () => {
            hoverIconBox($('#edu-tutoring-form-2-3'), true, '#FFFFFF');
        });
        $('#edu-tutoring-form-2-3').on("click", () => {
            clickIconBox($('#edu-tutoring-form-2'), $('#edu-tutoring-form-2-3'), $('#edu-tutoring-form-field-2'), '#FFFFFF', '#969939');
            setCookie("edu-tutoring-input-2", $('#edu-tutoring-form-2-3').find('h3')[0].innerHTML, 30);
        });

        $('#edu-tutoring-form-3-1').on("mouseenter", () => {
            hoverIconBox($('#edu-tutoring-form-3-1'), false, '#FFFFFF');
        });
        $('#edu-tutoring-form-3-1').on("mouseleave", () => {
            hoverIconBox($('#edu-tutoring-form-3-1'), true, '#FFFFFF');
        });
        $('#edu-tutoring-form-3-1').on("click", () => {
            clickIconBox($('#edu-tutoring-form-3'), $('#edu-tutoring-form-3-1'), $('#edu-tutoring-form-field-3'), '#FFFFFF', '#969939');
            setCookie("edu-tutoring-input-3", $('#edu-tutoring-form-3-1').find('h3')[0].innerHTML, 30);
        });

        $('#edu-tutoring-form-3-2').on("mouseenter", () => {
            hoverIconBox($('#edu-tutoring-form-3-2'), false, '#FFFFFF');
        });
        $('#edu-tutoring-form-3-2').on("mouseleave", () => {
            hoverIconBox($('#edu-tutoring-form-3-2'), true, '#FFFFFF');
        });
        $('#edu-tutoring-form-3-2').on("click", () => {
            clickIconBox($('#edu-tutoring-form-3'), $('#edu-tutoring-form-3-2'), $('#edu-tutoring-form-field-3'), '#FFFFFF', '#969939');
            setCookie("edu-tutoring-input-3", $('#edu-tutoring-form-3-2').find('h3')[0].innerHTML, 30);
        });

        $('#edu-tutoring-form-3-3').on("mouseenter", () => {
            hoverIconBox($('#edu-tutoring-form-3-3'), false, '#FFFFFF');
        });
        $('#edu-tutoring-form-3-3').on("mouseleave", () => {
            hoverIconBox($('#edu-tutoring-form-3-3'), true, '#FFFFFF');
        });
        $('#edu-tutoring-form-3-3').on("click", () => {
            clickIconBox($('#edu-tutoring-form-3'), $('#edu-tutoring-form-3-3'), $('#edu-tutoring-form-field-3'), '#FFFFFF', '#969939');
            setCookie("edu-tutoring-input-3", $('#edu-tutoring-form-3-3').find('h3')[0].innerHTML, 30);
        });
});
