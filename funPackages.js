function initializePackage(packageNo, jsonLink) {
  /*
      ACTION:		  Initializes a package (structured like in edu/packages)
      -----
      PARAMS:		  packageNo		The index of the package (from left top to right bottom)
                  jsonLink		The link to the JSON containing data on the packages
      FLAGS:		  -
      -----
      RETURNS:		-
    */
  // Load JSON
  fetch(jsonLink)
    .then((response) => response.json()) // Parse the response as JSON
    .then((jsondata) => {
      // Fill package component with text from JSON
      $(`#edu-package-${packageNo}-title`)[0].innerText =
        jsondata[packageNo].packageName;
      $(`#edu-package-${packageNo}-info-1`)[0].innerText =
        jsondata[packageNo].packageLessons;
      $(`#edu-package-${packageNo}-info-2`)[0].innerText =
        jsondata[packageNo].packageSupport;
      $(`#edu-package-${packageNo}-info-3`)[0].innerText =
        jsondata[packageNo].packageMedium;
      $(
        `#edu-package-${packageNo}-price`
      )[0].innerText = `CHF ${jsondata[packageNo].packagePriceNumber}`;
      $(`#edu-package-${packageNo}-interval`)[0].innerText =
        jsondata[packageNo].packagePriceInterval;
      $(`#edu-package-${packageNo}-button`).on("mouseenter", () => {
        $(`#edu-package-${packageNo}-button`).css(
          "background-color",
          "rgba(255,255,255,0.4)"
        );
        $(`#edu-package-${packageNo}-button`).css("cursor", "pointer");
      });
      $(`#edu-package-${packageNo}-button`).on("mouseleave", () => {
        $(`#edu-package-${packageNo}-button`).css(
          "background-color",
          "rgba(255,255,255,0.2)"
        );
        $(`#edu-package-${packageNo}-button`).css("cursor", "default");
      });
      $(`#edu-package-${packageNo}-button`).on("click", () => {
        window.location.href = `https://www.jayvee.swiss/edu/packages/${packageNo}`;
      });
    });
}

function initializeSingleOffer(offerNo, jsonLink) {
  /*
  ACTION:		  Initializes a single offer (structured like in edu/packages)
      -----
      PARAMS:		  offerNo		  The index of the offer (from left top to right bottom)
                  jsonLink		The link to the JSON containing data on the offer
      FLAGS:		  -
      -----
      RETURNS:		-
  */
  fetch(jsonLink)
    .then((response) => response.json()) // Parse the response as JSON
    .then((jsondata) => {
      // Fill package component with text from JSON
      $(`#edu-single-${offerNo}-lessons`)[0].innerText =
        jsondata[offerNo].lessons;
      $(
        `#edu-single-${offerNo}-price`
      )[0].innerText = `CHF ${jsondata[offerNo].price}`;
      if (parseInt(jsondata[offerNo].lessons) == 1) {
        $(`#edu-single-${offerNo}-sub`)[0].innerText = "Lektion";
      } else {
        $(`#edu-single-${offerNo}-sub`)[0].innerText = "Lektionen";
      }
      if (offerNo == 0) {
        $(`#edu-single-${offerNo}-discount-left`)[0].innerText = " ";
        $(`#edu-single-${offerNo}-discount-right`)[0].innerText = " ";
      } else {
        console.log(parseInt(jsondata["0"].price));
        console.log(parseInt(jsondata[offerNo].lessons));
        console.log(parseInt(jsondata[offerNo].price));
        let discount =
          parseInt(jsondata["0"].price) * parseInt(jsondata[offerNo].lessons) -
          parseInt(jsondata[offerNo].price);
        $(`#edu-single-${offerNo}-discount-left`)[0].innerText = "Spare";
        $(
          `#edu-single-${offerNo}-discount-right`
        )[0].innerText = `CHF ${discount}`;
      }

      $(`#edu-single-${offerNo}-button`).on("mouseenter", () => {
        $(`#edu-single-${offerNo}-button`).css(
          "background-color",
          "rgba(150,153,57,0.6)"
        );
        $(`#edu-single-${offerNo}-button`).css("cursor", "pointer");
      });
      $(`#edu-single-${offerNo}-button`).on("mouseleave", () => {
        $(`#edu-single-${offerNo}-button`).css(
          "background-color",
          "rgba(150,153,57,0.8)"
        );
        $(`#edu-single-${offerNo}-button`).css("cursor", "default");
      });
      $(`#edu-single-${offerNo}-button`).on("click", () => {
        window.location.href = `https://www.jayvee.swiss/edu/packages/${packageNo}`;
      });
    });
}
