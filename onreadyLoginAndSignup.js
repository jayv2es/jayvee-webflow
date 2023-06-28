$(document).ready(() => {
    
    // LOGIN
    // ---------------------------
    
    $("#login-submit-button").hide();
    initializeArrowButton($("#login-submit"), "#000000");
    
    $("#login-submit").on("mouseenter", () => {
      hoverArrowButton($("#login-submit"), false);
    });
    $("#login-submit").on("mouseleave", () => {
      hoverArrowButton($("#login-submit"), true);
    });
    $("#login-submit").on("click", () => {
      $("#login-submit-button").click();
    });
    
    // SIGN UP
    // ---------------------------
    
    $("#signup-mobile").hide();
    $("#signup-submit-button").hide();    
    initializeArrowButton($("#signup-submit"), "#000000");
	
    //If preferred comms = whatsapp, phone, etc.: Show phone nr. div and make it required
    $('#communication').change(function() {
      var selectedOption = $(this).val();
      if (selectedOption === 'whatsapp-messenger' || selectedOption === 'signal-messenger' || selectedOption === 'telegram-messenger' || selectedOption === 'anruf') {
        $('#signup-mobile').show();
        $('#signup-mobile').find("input").attr('required', true);
      } else {
        $('#signup-mobile').hide();
        $('#signup-mobile').find("input").attr('required', false);
      };
    });
    
    $("#signup-submit").on("mouseenter", () => {
      hoverArrowButton($("#signup-submit"), false);
    });
    $("#signup-submit").on("mouseleave", () => {
      hoverArrowButton($("#signup-submit"), true);
    });
    $("#signup-submit").on("click", () => {
      $("#signup-submit-button").click();
    });
    
    // RESET PASSWORD
    // ---------------------------
    
    $("#reset-password-submit-button").hide();
    initializeArrowButton($("#reset-password-submit"), "#000000");
    
    $("#reset-password-submit").on("mouseenter", () => {
      hoverArrowButton($("#reset-password-submit"), false);
    });
    $("#reset-password-submit").on("mouseleave", () => {
      hoverArrowButton($("#reset-password-submit"), true);
    });
    $("#reset-password-submit").on("click", () => {
      $("#reset-password-submit-button").click();
    });
    
    // UPDATE PASSWORD
    // ---------------------------
    
    $("#update-password-submit-button").hide();
    initializeArrowButton($("#update-password-submit"), "#000000");
    
    $("#update-password-submit").on("mouseenter", () => {
      hoverArrowButton($("#update-password-submit"), false);
    });
    $("#update-password-submit").on("mouseleave", () => {
      hoverArrowButton($("#update-password-submit"), true);
    });
    $("#update-password-submit").on("click", () => {
      $("#update-password-submit-button").click();
    });
        
  });