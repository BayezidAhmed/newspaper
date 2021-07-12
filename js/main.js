
 // preloader start
 $(document).ready(function () {
 setTimeout(function () {
  $('.preloader').fadeToggle();
}, 1500);
});
// preloader end

// headline slider

$(document).ready(function () {
  $('.heading-headline').slick({
    vertical:true,
    prevArrow:'<div class="prevArrow"><i class="fa fa-chevron-left"></i></div>',
    nextArrow:'<div class="nextArrow"><i class="fa fa-chevron-right"></i></div>',
    autoplay:true,
    autoplaySpeed:3000
  });
});

// recent news slider

$(document).ready(function () {
  $('.recent-slide').slick({
    slidesToShow:2,
    prevArrow:'<div class="prevArrow"><i class="fa fa-chevron-left"></i></div>',
    nextArrow:'<div class="nextArrow"><i class="fa fa-chevron-right"></i></div>',
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1
       
        }
      }
    ]
  });
});

// politcs news slider

$(document).ready(function () {
  $('.politics-slide').slick({
    slidesToShow:2,
    prevArrow:'<div class="prevArrow"><i class="fa fa-chevron-left"></i></div>',
    nextArrow:'<div class="nextArrow"><i class="fa fa-chevron-right"></i></div>',
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1
       
        }
      }
    ]
  });
});

// weekly news slider

$(document).ready(function () {
  $('.weekly-slide').slick({
    slidesToShow:4,
    autoplay:true,
    arrows:false,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,  
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// technology news slider

$(document).ready(function () {
  $('.technology-slide').slick({
    slidesToShow:2,
    prevArrow:'<div class="prevArrow"><i class="fa fa-chevron-left"></i></div>',
    nextArrow:'<div class="nextArrow"><i class="fa fa-chevron-right"></i></div>',
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1
       
        }
      }
    ]
  });
});

// article news slider

$(document).ready(function () {
  $('.article-slide').slick({
    slidesToShow:3,
    prevArrow:'<div class="prevArrow"><i class="fa fa-chevron-left"></i></div>',
    nextArrow:'<div class="nextArrow"><i class="fa fa-chevron-right"></i></div>',
    autoplay:true,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,  
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

  // back to top btn script start
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    var topBtn = document.getElementById("b-to-t");
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 50) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  // back to top script end

var barGroup = document.querySelector(".mobile-menu-icon ");
var mobileNav = document.querySelector(".mobile-navigation");

barGroup.onclick = function (){
  mobileNav.classList.toggle('nav-show')
  barGroup.classList.toggle('click-style')
}
