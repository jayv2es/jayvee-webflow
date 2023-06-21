$(document).ready(() => {
  console.log($("#login-submit"));
  initializeArrowButton($("#login-submit"), "#FF0000");
  initializeArrowButton($("#signup-submit"), "#000000");

  $("#login-submit").on("mouseenter", () => {
    console.log("ON");
    hoverArrowButton($("#login-submit"), false);
  });
  $("#login-submit").on("mouseleave", () => {
    console.log("OFF");
    hoverArrowButton($("#login-submit"), true);
  });
  $("#login-submit").on("click", () => {
    console.log("CLICK");
    $("#login-form-block").submit();
  });

  $("#signup-submit").on("mouseenter", () => {
    hoverArrowButton($("#signup-submit"), false);
  });
  $("#signup-submit").on("mouseleave", () => {
    hoverArrowButton($("#signup-submit"), true);
  });
  $("#signup-submit").on("click", () => {
    $("#signup-form-block").submit();
  });
});
