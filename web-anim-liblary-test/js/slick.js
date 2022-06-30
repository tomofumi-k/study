$(function () {
  $(".slider").slick({
    autoplay: true, //自動再生する
    autoplaySpeed: 1000, //自動再生するスピード 4秒
    dots: true, //ドット部分を表示する
    slidesToShow: 1,
    arrows: false,
    dots: false,
  });
});
