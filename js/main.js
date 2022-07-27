$(function () {
  $('.slider__inner').slick({
    arrows: false,
    dots: true
  });

  $('.works__iner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slik-arrow slik-prev"><img src="img/slider/slider-left.svg" alt=""> </button>',
    nextArrow: '<button class="slik-arrow slik-next"><img src="img/slider/slider-right.svg" alt=""> </button>',
    responsive: [{
        breakpoint: 911,
        settings: {
          slidesToShow: 3,


        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 2,


        }
      },
      {
        breakpoint: 455,
        settings: {
          slidesToShow: 1,


        }
      },

    ]

  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu > ul').slideToggle();

  });

  $('.header__drop-down.drop-down').on('click', function () {
    $(this).children('.drop-down__list').toggleClass('active');
    $(this).children('.drop-down__link').toggleClass('active');
  });




});