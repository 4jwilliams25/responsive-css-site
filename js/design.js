/* JavaScript Document */

// document.ready will execute contained functon only once the HTML is fully loaded
$(document).ready(function () {
  // Acts as the menu toggle
  $("nav a.mobile_menu").on("click", function () {
    let currentNavHeight = $("nav").height();

    if (currentNavHeight < 5) {
      let newNavHeight = $("nav > ul").height() + 15;
      $("nav").animate({ height: newNavHeight + "px" }, 750);
    } else {
      $("nav").animate({ height: "0px" }, 750, function () {
        $(this).removeAttr("style");
      });
    }
  });

  $(window).resize(function () {
    if ($(this).width() > 625) {
      $("nav").removeAttr("style");
    }
  });
});
