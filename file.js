setInterval(function () {
  var toggle = $(".text").hasClass("toggled");
  $(".text_1").animate({
    opacity: toggle ? 1 : 0,
  });
  $(".text_2").animate({
    opacity: toggle ? 0 : 1,
  });
  $(".text_3").animate({
    opacity: toggle ? 1 : 0,
  });
  $(".text").toggleClass("toggled");
}, 5000);
