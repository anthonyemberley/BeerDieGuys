jQuery(document).ready(function ($) {

  // Get references to the SVG and video elements
  var playButton = $("#playButton");
  var videoPlayer = $("#videoPlayer")[0]; // Note: [0] gets the actual DOM element from the jQuery object

  // Attach a click event handler to the SVG element
  playButton.click(function () {
    // Check if the video is already playing, pause it; otherwise, play the video

    if (videoPlayer.paused) {
      videoPlayer.play();
      $(".dic_ryt .dice_video video,.dice_video").addClass("active");
    } else {
      videoPlayer.pause();
      $(".dic_ryt .dice_video video,.dice_video").removeClass("active");
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    // rest of your code
  });

  document.addEventListener('DOMContentLoaded', function() {
    const videoSection = document.querySelector('.video-section');
    const changePoint = 100; // Point of scroll in pixels to change background
  
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > changePoint) {
        videoSection.classList.add('scrolled');
      } else {
        videoSection.classList.remove('scrolled');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });

  // $(".header__icon--search.modal__toggle").click(function(){
  //   $(this).parent().attr("open","true");
  // });

  // Custom Featured Collection Slider
  $(".custom_featured_collection").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<button class="slick-prev slick-arrow"><img src="https://cdn.shopify.com/s/files/1/0431/0269/9684/files/arrow-back.svg?v=1693481163" alt="Previous" width="33" height="33">/button>',
    nextArrow:
      '<button class="slick-next slick-arrow"><img src="https://cdn.shopify.com/s/files/1/0431/0269/9684/files/arrow-forward.svg?v=1693480314" alt="Next" width="19" height="33"></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Related Product Slider
  function initializeSlickSlider() {
    $(".related-products-slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:
        '<button class="slick-prev slick-arrow"><img src="https://cdn.shopify.com/s/files/1/0431/0269/9684/files/arrow-back.svg?v=1693481163" alt="Previous" width="33" height="33">/button>',
      nextArrow:
        '<button class="slick-next slick-arrow"><img src="https://cdn.shopify.com/s/files/1/0431/0269/9684/files/arrow-forward.svg?v=1693480314" alt="Next" width="19" height="33"></button>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            dots: false,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 360,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }


  // Check if content has loaded, and initialize Slick Slider when ready
  
  var checkContentInterval = setInterval(function () {
    if ($(".related-products-slider").children().length > 0) {
      initializeSlickSlider(); // Initialize the Slick Slider
      clearInterval(checkContentInterval); // Clear the interval
    }
  }, 10); // Adjust the interval duration as needed


  // One Collapsible Row Open At A Time  
  $(".accordion details").on("click", function () {
    $(this).attr("open");
    $(this).parent(".accordion").siblings().find("details").removeAttr("open");
  });
  // One Collapsible Row Open At A Time 

   // One Collapsible Row Open At A Time  
  $(".menu-drawer__menu li details").on("click", function () {
    $(this).attr("open");
    $(this).parent("li").siblings().find("details").removeAttr("open");
  });
  // One Collapsible Row Open At A Time
  
});

$('.accordion__content a').hover(function(e){
    $(this).attr('title', '');
});