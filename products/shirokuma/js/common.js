// ロードされるまで非表示にする
$(".slider-wrapper").on("init", function () {
  $(".slider-area").addClass("initialized");
});

$(".slider").slick();

$(document).ready(function () {
  $(".slider-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "20%",
    variableWidth: true,
    arrows: true,
    prevArrow: '<span class="prev"></span>',
    nextArrow: '<span class="next"></span>',
  });
});
