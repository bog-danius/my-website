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

jQuery(document).ready(function () {
  jQuery(".send-form").click(function () {
    var form = jQuery(this).closest("form");
    if (form.valid()) {
      //form.css("opacity ", ".5");

      var actUrl = form.attr("action");
      jQuery.ajax({
        url: actUrl,
        type: "post",
        dataType: "html",
        data: form.serialize(),
        success: function (data) {
          //form.html(data);
          //form.css("opacity", "1");
          form.find(".status").html("форма отправлена успешно");
        },
        error: function () {
          form.find(".status").html("серврная ошибка");
        },
      });
    }
  });
});
