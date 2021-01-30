jQuery(document).ready(function($) {
  $("#pictures-tabs__button-all").click(function() {
    $(".pictures-tabs__button").removeClass("pictures-tabs__button--active");
    $("#pictures-tabs__button-all").addClass("pictures-tabs__button--active");

    $(".pictures-images__column").show();
    return false;
  });
  $("#pictures-tabs__button-northamerica").click(function() {
    $(".pictures-tabs__button").removeClass("pictures-tabs__button--active");
    $("#pictures-tabs__button-northamerica").addClass("pictures-tabs__button--active");

    $(".pictures-images__column").hide();
    $(".pictures-images__column-northamerica").show();
    return false;
  });
  $("#pictures-tabs__button-southamerica").click(function() {
    $(".pictures-tabs__button").removeClass("pictures-tabs__button--active");
    $("#pictures-tabs__button-southamerica").addClass("pictures-tabs__button--active");

    $(".pictures-images__column").hide();
    $(".pictures-images__column-southamerica").show();
    return false;
  });
  $("#pictures-tabs__button-europe").click(function() {
    $(".pictures-tabs__button").removeClass("pictures-tabs__button--active");
    $("#pictures-tabs__button-europe").addClass("pictures-tabs__button--active");

    $(".pictures-images__column").hide();
    $(".pictures-images__column-europe").show();
    return false;
  });
  $("#pictures-tabs__button-africa").click(function() {
    $(".pictures-tabs__button").removeClass("pictures-tabs__button--active");
    $("#pictures-tabs__button-africa").addClass("pictures-tabs__button--active");

    $(".pictures-images__column").hide();
    $(".pictures-images__column-africa").show();
    return false;
  });
  $("#pictures-tabs__button-asia").click(function() {
    $(".pictures-tabs__button").removeClass("pictures-tabs__button--active");
    $("#pictures-tabs__button-asia").addClass("pictures-tabs__button--active");

    $(".pictures-images__column").hide();
    $(".pictures-images__column-asia").show();
    return false;
  });
  $("#pictures-tabs__button-oceania").click(function() {
    $(".pictures-tabs__button").removeClass("pictures-tabs__button--active");
    $("#pictures-tabs__button-oceania").addClass("pictures-tabs__button--active");

    $(".pictures-images__column").hide();
    $(".pictures-images__column-oceania").show();
    return false;
  });
});
