// burger menu
let inner_nav = document.querySelector(".header__menu_list");
let toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  inner_nav.classList.toggle("active");
});
/////
  //////////// progresss 

$(document).ready(function() {
  var $slider = $(".header_slider");
  var $progressBar = $(".progress");
  var $progressBarLabel = $(".slider_label");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel.text(calc + "% completed");
  });
    $(".header_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        draggable: true,
        dotsClass: 'custom-dots',
        prevArrow: '<span class="slide-arrow prev-arrow">PREV</span>',
        nextArrow: '<span class="slide-arrow next-arrow">NEXT</span>',
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
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        infinite: true,
        draggable: true,
        slickFilter:true,
        // slidesPerRow: 2,
        // rows: 1,
        easing: "easeInOutCubic",
        
         responsive: [ {
           breakpoint: 600,
           settings: {
            // slidesPerRow: 3,
            //  rows: 2,
             slidesToShow: 2,
             slidesToScroll: 2,
           },
         },
       ]
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
     responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '300px',
          slidesToShow: 1
        }
      },
      {
            breakpoint: 1400,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '280px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1300,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '240px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1100,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '180px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 1000,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '150px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 900,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '90px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '20px',
              slidesToShow: 1
            }
          }
    ]
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


// faqaccordion_card
let footer__colon = document.querySelectorAll(".footer__colon");
console.log(footer__colon);
for (let i = 0; i < footer__colon.length; i++) {
  let footer__colon_nav = footer__colon[i];
  footer__colon_nav.addEventListener("click", function () {
    console.log(2222)
    for (let i = 0; i < footer__colon.length; i++) {
      // console.log(this);
      let footer__colon_nav = footer__colon[i];
      if (footer__colon[i] !== this) {
        footer__colon[i].classList.remove("content_active");
      }
    }

    this.classList.toggle("content_active");
  })
}
/////dinamyc data footer
var d = new Date();
document.getElementById("yearFooter").innerHTML = d.getFullYear();

//////
let data = 
{
 "en": {
   "buy": "buy",
   "categorone": "Category number one",
   "apartments": "Apartments in Dubai",
   "category": "Category number twenty five",
   "blog": "blog",
   "about": "about",
   "contact": "contact",
   "button": "Book a consultation",
   "welcome": "Welcome home",
   "toto": "to",
   "luxur": "luxury",
   "book": "Book a consultation",
   "atest": "Latest projects",
   "all": "All",
   "vill": "Villa",
   "hous": "House",
   "interior": "Interior",
   "dubai": "Dubai",
   "project": "See project",
   "lorem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.",
   "expert": "Our expertise",
   "apart": "'The best apartment in Dubai' we will find your dream",
   "limit": "“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”"
 },
 "ua": {
   "buy": "покупка",
   "categorone": "Категорія номер один",
   "apartments": "Квартири в Дубаї",
   "category": "Категорія номер 25",
   "blog": "блог",
   "about": "про нас",
   "contact": "контакт",
   "button": "Записатись на консультацію",
   "welcome": "Ласкаво просимо до дому",
   "toto": "до",
   "luxur": "розкоші",
   "book": "Записатись на консультацію",
   "atest": "Останні проекти",
   "all": "ВСЕ",
   "vill": "Вілла",
   "hous": "Будинок",
   "interior": "Інтер'єр",
   "dubai":"Дубай",
   "project": "Переглянути проект",
   "lorem": "Місто хмарочосів, шопінгу і незабутніх вражень.  Гігантський поліс, який простягається вздовж Перської затоки. Дубай – найяскравіше місто ОАЕ.",
   "expert": "Наша експертиза",
   "apart": "«Найкраща квартира в Дубаї» ми знайдемо вашу мрію",
   "limit": "«Не обмежуйте себе. Багато людей обмежують себе тим, що, на їхню думку, можуть зробити. Ви можете зайти настільки далеко, наскільки вам дозволяє ваш розум. У що ви вірите, пам’ятайте, ви можете досягти». — Мері Кей Еш"
 }
 
}



var i18nReferences = Array.from( document.querySelectorAll( '[data-i18n]' ));

function toRenderI18nContent( language ) {
  return function setLanguage( i18nReference ) {
    var contentLanguageToReference = data[ language ][ i18nReference.dataset.i18n ]
    return i18nReference.innerHTML = contentLanguageToReference
  }
}

function renderContentOnPage( language ) {
  console.log('language rendered')
  return i18nReferences.map( toRenderI18nContent( language ) )
}

var btnChangeLanguage = Array.from( document.querySelectorAll( '[data-renderlanguage]' ));

function changeContentLanguage( event ) {
  var language = this.dataset.renderlanguage
  var isNotCurrentLanguage = language !== localStorage.getItem( 'language' )
  console.log('language to change is equal to current? :' + isNotCurrentLanguage)
  return isNotCurrentLanguage 
          ? renderContentOnPage( language ) && storeInNavigator( language )
          : storeInNavigator( language )
}

function storeInNavigator( language ) {
  localStorage.setItem( 'language', language)
}

function toSetEvent( button ) {
  return button.addEventListener( 'click', changeContentLanguage )
}

btnChangeLanguage.map( toSetEvent )

function renderContentBy( language ) {
  var isFirstAccess = !localStorage.language
  var storedLanguage = localStorage.getItem( 'language' )

  return isFirstAccess 
          ? setUserNavigatorDefaultLanguage( language )
          : renderContentOnPage( storedLanguage )
}

function setUserNavigatorDefaultLanguage( language ) {
  var hasSpanishInNavigator = language.match(/^ua/)
  var hasPortugueseInNavigator = language.match(/^en/)
  console.log('first access so store language')
  return hasPortugueseInNavigator ? renderContentOnPage( 'en' ) && storeInNavigator( 'en' )
          : hasSpanishInNavigator ? renderContentOnPage( 'ua' ) && storeInNavigator( 'ua' )
          : renderContentOnPage( 'en' ) && storeInNavigator( 'en' )        
}


window.onload = renderContentBy( navigator.language )
console.log('stored language:' + localStorage.getItem('language'))