$(document).ready(function () {
  $('.slider').slick({
    arrows: true,
    slidesToShow: 3,
    dots: false,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
$(document).ready(function () {
  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
  });
});