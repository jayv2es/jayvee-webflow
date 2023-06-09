$(document).ready(() => {
  /* --------------------------------------------------------------------
  INITIALIZE
  -------------------------------------------------------------------- */
  initializeArrowButton($('#main-intro-button-1'), '#000000');
  initializeArrowButton($('#main-summary-button-1'), '#FFFFFF');
  initializeArrowButton($('#main-summary-button-2'), '#FFFFFF');
  initializeArrowButton($('#main-summary-button-3'), '#FFFFFF');
  initializeArrowButton($('#main-services-edu-button'), '#969939');
  initializeArrowButton($('#main-services-des-button'), '#992D29');
  initializeArrowButton($('#main-services-prod-button'), '#376D99');

  /* --------------------------------------------------------------------
  ANIMATION: BUTTONS
  -------------------------------------------------------------------- */
  $('#main-intro-button-1').on("mouseenter", () => {
      hoverArrowButton($('#main-intro-button-1'), false);
  });
  $('#main-intro-button-1').on("mouseleave", () => {
      hoverArrowButton($('#main-intro-button-1'), true);
  });

  $('#main-summary-button-2').on("mouseenter", () => {
      hoverArrowButton($('#main-summary-button-2'), false);
  });
  $('#main-summary-button-2').on("mouseleave", () => {
      hoverArrowButton($('#main-summary-button-2'), true);
  });

  $('#main-summary-button-3').on("mouseenter", () => {
      hoverArrowButton($('#main-summary-button-3'), false);
  });
  $('#main-summary-button-3').on("mouseleave", () => {
      hoverArrowButton($('#main-summary-button-3'), true);
  });

  $('#main-services-edu-button').on("mouseenter", () => {
      hoverArrowButton($('#main-services-edu-button'), false);
  });
  $('#main-services-edu-button').on("mouseleave", () => {
      hoverArrowButton($('#main-services-edu-button'), true);
  });

  $('#main-services-des-button').on("mouseenter", () => {
      hoverArrowButton($('#main-services-des-button'), false);
  });
  $('#main-services-des-button').on("mouseleave", () => {
      hoverArrowButton($('#main-services-des-button'), true);
  });

  $('#main-services-prod-button').on("mouseenter", () => {
      hoverArrowButton($('#main-services-prod-button'), false);
  });
  $('#main-services-prod-button').on("mouseleave", () => {
      hoverArrowButton($('#main-services-prod-button'), true);
  });
});
