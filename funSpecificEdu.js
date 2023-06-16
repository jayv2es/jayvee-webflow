/* --------------------------------------------------------------------
SPECIFIC FUNCTIONS: EDU
-------------------------------------------------------------------- */
function eduConfigurePackage(
  selectedBox1,
  selectedBox2,
  selectedBox3,
  jsonLink
) {
  /*
    ACTION:		Reads in selection box choices and initializes the package with desired results
    -----
    PARAMS:		selectedBox(i)      The container index of the selected icon box inside its container,
                                  	where i is the container number.
                jsonLink			The link to the JSON containing data on the offer
    FLAGS:		-
    -----
    RETURNS:	-       
  */
  var input = `${selectedBox1}${selectedBox2}${selectedBox3}`;
  switch (input) {
    case "000": {
      var packageId = "0";
      break;
    }
    case "001": {
      var packageId = "1";
      break;
    }
  }
  // Load JSON
  fetch(jsonLink)
    .then((response) => response.json()) // Parse the response as JSON
    .then((jsondata) => {
      // Load data
      console.log(jsondata);
      var packageTitle = jsondata[packageId].packageName;
      var packageInfo1 = jsondata[packageId].packageLessons;
      var packageInfo2 = jsondata[packageId].packageSupport;
      var packageInfo3 = jsondata[packageId].packageMedium;
      var packagePriceNumber = jsondata[packageId].packagePriceNumber;
      var packagePriceInterval = jsondata[packageId].packagePriceInterval;
      // Initialize package
      $("#edu-tutoring-form-container-results").show();
      $(`#edu-package-res-title`)[0].innerText = packageTitle;
      $(`#edu-package-res-info-1`)[0].innerText = packageInfo1;
      $(`#edu-package-res-info-2`)[0].innerText = packageInfo2;
      $(`#edu-package-res-info-3`)[0].innerText = packageInfo3;
      $(`#edu-package-res-price`)[0].innerText = `CHF ${packagePriceNumber}`;
      $(`#edu-package-res-interval`)[0].innerText = packagePriceInterval;
      // Initialize buy button
      $(`#edu-package-res-button`).on("mouseenter", () => {
        $(`#edu-package-res-button`).css(
          "background-color",
          "rgba(150,153,57,0.4)"
        );
        $(`#edu-package-res-button`).css("cursor", "pointer");
      });
      $(`#edu-package-res-button`).on("mouseleave", () => {
        $(`#edu-package-res-button`).css(
          "background-color",
          "rgba(150,153,57,0.2)"
        );
        $(`#edu-package-res-button`).css("cursor", "default");
      });
      $(`#edu-package-res-button`).on("click", () => {
        window.location.href = `https://www.jayvee.swiss/edu/packages/${packageId}`;
      });
      // Initialize arrow button
      initializeArrowButton($("#edu-package-res-arrowbut"), "#FFFFFF");
      $("#edu-package-res-arrowbut").on("mouseenter", () => {
        hoverArrowButton($("#edu-package-res-arrowbut"), false);
      });
      $("#edu-package-res-arrowbut").on("mouseleave", () => {
        hoverArrowButton($("#edu-package-res-arrowbut"), true);
      });
      $("#edu-package-res-arrowbut").on("click", () => {
        window.location.href = `${mainLink}/packages`;
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
