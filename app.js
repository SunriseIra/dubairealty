
$(document).ready(function() {

    $(".header_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        draggable: true,
        dotsClass: 'custom-dots',
        prevArrow: '<span class="slide-arrow prev-arrow">PREV</span>',
        nextArrow: '<span class="slide-arrow next-arrow">NEXT</span>'
    });
    $('.custom-dots li:nth-child(1)').html('<button class="custom-dots-text"><span class="custom-dots-span">01</span><span class="custom-dots-text-text">Lorem Ipsum Dolorem apset</span></button>');
    $('.custom-dots li:nth-child(2)').html('<button class="custom-dots-text"><span class="custom-dots-span">02</span><span class="custom-dots-text-text">Lorem Ipsum Dolorem apset</span></button>');
    $('.custom-dots li:nth-child(3)').html('<button class="custom-dots-text"><span class="custom-dots-span">03</span><span class="custom-dots-text-text">Lorem Ipsum Dolorem apset</span></button>');
});

  $(".projects").each(function () {
    var $filterBtn = $(this).find('.project__slick_button'),
        $slider = $(this).find(".slick__slider_filter");
    $slider.slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        draggable: true,
        slickFilter:true,
        easing: "easeInOutCubic",
        // responsive: [{
        //     breakpoint: 1600,
        //     settings: {
        //         slidesToShow: 5,
        //         slidesToScroll: 5,
        //     }
        // }, {
        //     breakpoint: 1366,
        //     settings: {
        //         slidesToShow: 4,
        //         slidesToScroll: 4
        //     }
        // }, {
        //     breakpoint: 1080,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3
        //     }
        // }, {
        //     breakpoint: 991,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        // }, {
        //     breakpoint: 520,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }]
    });
    var filtered = false;
    $filterBtn.on('click', function (e) {
        e.preventDefault();
        $(this).addClass('slick_button_active').siblings('.slick_button_active').removeClass('slick_button_active');
        var filtername = $(this).attr('id');
        if (filtered === false) {
            $slider.slick('slickUnfilter');
            $slider.slick('slickFilter', '.filter-' + filtername);
        } else {
            $slider.slick('slickUnfilter');
            $slider.slick('slickFilter', '.filter-' + filtername);
            $slider.slickGoTo(0);
            filtered = false;
        }
    });
     
  });
  
  $(".clients__inner_card").slick({
    centerMode: true,
    arrows: false,
    dots: true,
    centeredSlides: true,
    centerPadding: '360px',
    slidesToShow: 1,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });



///pop up +  video pause
let popupLink = document.querySelectorAll(".popup-link");
let closePopup = document.querySelector(".popup_close");
let popup = document.querySelector(".popup");
let popupBody = document.querySelector(".popup_body");
let videoElem = document.querySelector(".video-container video");

if (popupLink.length > 0) {
  for (let i = 0; i < popupLink.length; i++) {
    let popupLinks = popupLink[i];
    popupLinks.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.add("activePop");
    });
  }
}

closePopup.addEventListener("click", (e) => {
  e.preventDefault();
  videoElem.pause();
  videoElem.currentTime = 0;
  popup.classList.remove("activePop");
});

popup.addEventListener("click", (e) => {
  if (!e.target.closest(".popup_content")) {
    videoElem.pause();
    videoElem.currentTime = 0;
    popup.classList.remove("activePop");
  }
});

///validation email
const email = document.querySelector('input[name=email]');
const button = document.querySelector('#btn');
const text =  document.querySelector('#message');

const validateEmail= (email) => {
    var regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return regex.test(String(email).toLowerCase());
}

// button.addEventListener('click',()=>{
//     if(validateEmail(email.value)){
//       text.innerText="Valid email";
//     }else{
//       text.innerText="Invalid email";
//     }
// })
// faqaccordion_card
let accordion_card = document.querySelectorAll(".faqaccordion_card");
// console.log(accordion_card);
for (let i = 0; i < accordion_card.length; i++) {
  let accordion_card_nav = accordion_card[i];
  accordion_card_nav.addEventListener("click", function () {
    for (let i = 0; i < accordion_card.length; i++) {
      // console.log(this);
      let accord_card_nav = accordion_card[i];
      if (accordion_card[i] !== this) {
        accordion_card[i].classList.remove("content_active");
      }
    }

    this.classList.toggle("content_active");
  })
}

/////dinamyc data footer
var d = new Date();
document.getElementById("yearFooter").innerHTML = d.getFullYear();

//////
