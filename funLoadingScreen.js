/* --------------------------------------------------------------------
LOADING SCREEN FUNCTIONS
-------------------------------------------------------------------- */

function displayLoadingScreen(container, title, text, color) {
    /*  
    ACTION:		Displays a loading screen inside a given container
    -----
    PARAMS:		container	  The div where the HTML should be replaced by the loading screen
              title       The title of the loading screen
              text        The text of the loading screen
    FLAGS:		-
    -----
    RETURNS:	-
    */
    var newClass = "loading-screen";
    var newInnerHTML = `
      <div class="loading-screen-title">${title}</div>
      <div class="loading-screen-loader">
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100%" height="100%" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
        viewBox="0 0 16933 16933"
        xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
          <style type="text/css">
            <![CDATA[
            .fil0 {fill:none}
            .fil1 {fill:#FFFFFF}
            .fil2 {fill:#FFFFFF;fill-rule:nonzero}
            ]]>
           </style>
          <mask id="id0">
          <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="147.558" y1="14567.2" x2="2961.9" y2="5672.94">
          <stop offset="0" style="stop-opacity:1; stop-color:white"/>
          <stop offset="1" style="stop-opacity:0; stop-color:white"/>
            </linearGradient>
          <rect style="fill:url(#id1)" x="-10" y="3513" width="8710" height="13425"/>
            </mask>
          </defs>
        <g id="Ebene_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"/>
        <g id="_627098960">
        <circle class="fil0" cx="8690" cy="8249" r="8244"/>
        <path class="fil1" style="mask:url(#id0)" d="M1397 3523c-884,1360 -1397,2983 -1397,4726 0,4652 3656,8450 8251,8679 119,6 223,-33 309,-115 86,-82 130,-184 130,-303l0 -35c0,-222 -175,-406 -397,-417 -4134,-207 -7423,-3624 -7423,-7809 0,-1571 464,-3033 1261,-4258l-734 -468z"/>
        <g>
        <path class="fil2" d="M7569 2217l2269 0c229,0 416,186 416,415l0 6318c0,229 -187,416 -416,416l-2263 0 -10 0 4 0 -7 0c-244,0 -436,-199 -436,-443l0 -896c0,-238 187,-448 425,-448l21 0c238,0 432,210 432,448l0 293c0,88 72,160 161,160l1045 0c87,0 158,-71 158,-158l0 -5061c0,-88 -71,-159 -158,-159l-1641 0c-244,0 -443,-199 -443,-442l0 -1c0,-243 199,-442 443,-442z"/>
        <path class="fil2" d="M7925 10086l696 2131c11,33 41,54 76,54 35,0 65,-21 75,-54l682 -2133c55,-173 214,-281 396,-281l8 0c140,0 260,62 342,176 81,114 99,248 54,380l-1260 3710c-45,130 -162,212 -299,212 -137,0 -254,-82 -298,-212l-1271 -3706c-46,-132 -27,-267 54,-381 81,-114 201,-177 342,-177l7 0c182,0 336,110 396,281z"/>
          </g>
          </g>
          </g>
          </svg>
      </div>
      <div class="loading-screen-p">${text}</div>
    </div>
    <style>
      .loading-screen-title {
		margin-top: 50px;
        color: ${color};
        font-weight: 700;
      }
      .loading-screen-p {
        color: ${color};
        font-weight: 400;
		margin-bottom: 50px;
      }
      .loading-screen-loader {
        animation: spin 1s linear infinite reverse;
      }
      .loading-screen {
        justify-content: space-between;
        align-items: center;
        font-family: "Quicksand";
        text-align: center;
        font-size: 20px;
      }
      @keyframes spin{
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>`;
    let oldClass = $(container).attr("class");
    $(container).attr("class", `${oldClass} ${newClass}`);
    $(container).html(newInnerHTML);
}
