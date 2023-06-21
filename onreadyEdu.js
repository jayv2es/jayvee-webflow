/* --------------------------------------------------------------------
  MAIN CODE: JAYVEE/EDU
  -------------------------------------------------------------------- */

$(document).ready(() => {
  /* --------------------------------------------------------------------
    RESET STORAGE AND COOKIES
    -------------------------------------------------------------------- */
  sessionStorage.removeItem("edu-tutoring-input-1");
  sessionStorage.removeItem("edu-tutoring-input-2");
  sessionStorage.removeItem("edu-tutoring-input-3");
  sessionStorage.removeItem("edusubjects-button-1_expanded");

  /* --------------------------------------------------------------------
    INITIALIZE
    -------------------------------------------------------------------- */
  $("#edu-tutoring-form-submit-error").hide();
  $("#edu-tutoring-form-container-loading").hide();
  $("#edu-tutoring-form-container-results").hide();
  $("#edusubjects-list-2").hide();

  initializeArrowButton($("#edu-intro-button-1"), "#00FF00");
  initializeArrowButton($("#edu-tutoring-form-submit"), "#FFFFFF");
  initializeArrowButton($("#edu-subjects-button"), "#969939");
  initializeArrowButton($("#edupacks-button"), "#969939");

  initializeExpandButton($("#edusubjects-button-1"), "#FFFFFF");
  initializeExpandButton($("#edusubjects-button-2"), "#FFFFFF");
  initializeExpandButton($("#edusubjects-button-3"), "#FFFFFF");
  initializeExpandButton($("#edusubjects-button-4"), "#FFFFFF");

  initializeIconBox($("#edu-tutoring-form-1-1"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-1-2"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-1-3"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-2-1"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-2-2"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-2-3"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-3-1"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-3-2"), "#FFFFFF");
  initializeIconBox($("#edu-tutoring-form-3-3"), "#FFFFFF");

  initializePackage("0", jsonPackages);
  initializeSingleOffer("0", jsonOffers);
  initializeSingleOffer("1", jsonOffers);
  initializeSingleOffer("2", jsonOffers);
  initializeSingleOffer("3", jsonOffers);
  initializeSingleOffer("4", jsonOffers);
  initializeSingleOffer("5", jsonOffers);
  initializeSingleOffer("6", jsonOffers);
  initializeSingleOffer("7", jsonOffers);

  /* --------------------------------------------------------------------
    ARROW BUTTONS + LOGO
    -------------------------------------------------------------------- */
  $(".logo").on("mouseenter", () => {
    $(".logo").css("cursor", "pointer");
  });
  $(".logo").on("mouseleave", () => {
    $(".logo").css("cursor", "pointer");
  });
  $(".main-header-logo").on("click", () => {
    window.location.href = mainLink;
  });
  $(".edu-header-logo").on("click", () => {
    window.location.href = mainLink + "/edu-home";
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

  $("#edu-tutoring-form-results-button").on("mouseenter", () => {
    hoverArrowButton($("#edu-tutoring-results-button"), false);
  });
  $("#edu-tutoring-form-results-button").on("mouseleave", () => {
    hoverArrowButton($("#edu-tutoring-results-button"), true);
  });

  $("#edupacks-button").on("mouseenter", () => {
    hoverArrowButton($("#edupacks-button"), false);
  });
  $("#edupacks-button").on("mouseleave", () => {
    hoverArrowButton($("#edupacks-button"), true);
  });

  $("#edu-subjects-button").on("mouseenter", () => {
    hoverArrowButton($("#edu-subjects-button"), false);
  });
  $("#edu-subjects-button").on("mouseleave", () => {
    hoverArrowButton($("#edu-subjects-button"), true);
  });
  $("#edu-subjects-button").on("click", () => {
    window.location.href = "https://jayvee-53ad46.webflow.io/subjects";
  });

  /* --------------------------------------------------------------------
    EDU / TUTORING: EXPAND BUTTONS
    -------------------------------------------------------------------- */
  $("#edusubjects-button-1").on("mouseenter", () => {
    hoverExpandButton($("#edusubjects-button-1"), false);
  });
  $("#edusubjects-button-1").on("mouseleave", () => {
    hoverExpandButton($("#edusubjects-button-1"), true);
  });
  $("#edusubjects-button-1").on("click", () => {
    clickExpandButton($("#edusubjects-button-1"));
  });

  $("#edusubjects-button-2").on("mouseenter", () => {
    hoverExpandButton($("#edusubjects-button-2"), false);
  });
  $("#edusubjects-button-2").on("mouseleave", () => {
    hoverExpandButton($("#edusubjects-button-2"), true);
  });
  $("#edusubjects-button-2").on("click", () => {
    clickExpandButton($("#edusubjects-button-2"));
    $("#edusubjects-list-2").toggle();
  });

  $("#edusubjects-button-3").on("mouseenter", () => {
    hoverExpandButton($("#edusubjects-button-3"), false);
  });
  $("#edusubjects-button-3").on("mouseleave", () => {
    hoverExpandButton($("#edusubjects-button-3"), true);
  });
  $("#edusubjects-button-3").on("click", () => {
    clickExpandButton($("#edusubjects-button-3"));
  });

  $("#edusubjects-button-4").on("mouseenter", () => {
    hoverExpandButton($("#edusubjects-button-4"), false);
  });
  $("#edusubjects-button-4").on("mouseleave", () => {
    hoverExpandButton($("#edusubjects-button-4"), true);
  });
  $("#edusubjects-button-4").on("click", () => {
    clickExpandButton($("#edusubjects-button-4"));
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
    hoverArrowButton($("#edu-tutoring-form-submit"), false);
  });
  $("#edu-tutoring-form-submit").on("mouseleave", () => {
    hoverArrowButton($("#edu-tutoring-form-submit"), true);
  });
  $("#edu-tutoring-form-submit").on("click", () => {
    // Check if any input empty
    var validCtr = 0;
    for (let i = 0; i < 3; i++) {
      if (sessionStorage.getItem(`edu-tutoring-input-${i + 1}`)) {
        validCtr++;
      }
    }
    if (validCtr == 3) {
      $("#edu-tutoring-form-submit-error").hide();
      $("#edu-tutoring-form-container").hide();
      $("#edu-tutoring-form-container-loading").show();
      setTimeout(() => {
        $("#edu-tutoring-form-container-loading").hide();
        eduConfigurePackage(
          parseInt(sessionStorage.getItem("edu-tutoring-input-1")),
          parseInt(sessionStorage.getItem("edu-tutoring-input-2")),
          parseInt(sessionStorage.getItem("edu-tutoring-input-3")),
          jsonPackages
        );
      }, 1654);
    } else {
      $("#edu-tutoring-form-submit-error").show();
    }
  });
});
