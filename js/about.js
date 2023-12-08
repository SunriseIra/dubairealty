
window.addEventListener("load", (event) => {
  let current_page = 1;
  let steps = 12;
  let blog_card = document.querySelectorAll(".blog__picture_card");
  let blog_card_all = Array.from(blog_card);
  // console.log(blog_card_all)


  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let myactivePage = +urlParams.get("page") === 0 ? 1 : +urlParams.get("page");
  let activePage = myactivePage;  
  
  let pageSpan = document.querySelector(".blog_page");
  let pagesCount = Math.ceil(blog_card_all.length / steps);

  function DisplayList (items, steps, page) {
    page--;
    let start = steps * page;
    let end =start + steps;
    let paginatedItems = items.slice(start, end);
  // console.log(paginatedItems)


  $('#pagingBox').children().css('display', 'none').slice(start, end).css('display', 'block');
 
  }

  function SetupPagination (items, pageSpan, steps,page) {
    pageSpan.innerHTML = '';
     let pagesCount = Math.ceil(items.length / steps);
     for(let i=1; i < pagesCount+1; i++ ) {
        let btn = PaginationButton (i, items, pageSpan, steps);
        pageSpan.appendChild(btn);
      }

    let currentItemLi = document.querySelector(".paginationItem_active");
    let currentPage = +currentItemLi.innerText;

    let liElCur = document.querySelectorAll(".paginationItem");
    let allliElCur = Array.from(liElCur);
    // console.log(allliElCur);

  if (urlParams.has("page") == false) {
    // console.log('yes')
      const nextURL = `?page=${activePage}`;
      const nextTitle = activePage + 1;
      window.history.replaceState(null, nextTitle, nextURL);
    } else {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      let myactivePage =
        +urlParams.get("page") === 1 ? 1 : +urlParams.get("page");
      let activePage = myactivePage;

    }
 }

function PaginationButton (page, items, pageSpan, row_page) {
  let ulEl = document.createElement("ul");
      ulEl.classList.add("paginationList");
  let liEl = document.createElement("li");
  liEl.classList.add("paginationItem");
  liEl.innerText = page;
  ulEl.appendChild(liEl);
  
  if (current_page == page) {
    liEl.classList.add("paginationItem_active");
  } 
  // console.log();

  liEl.addEventListener("click", function () {

    DisplayList (items, steps, page); 
    let currentItemLi = document.querySelector(".paginationItem_active");
    let currentPage = +currentItemLi.innerText;
     const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    let myactivePage =
         +urlParams.get("page") === 1 ? 1 : +urlParams.get("page"); 
     currentPage == page;
     
     currentItemLi.classList.remove("paginationItem_active");
     liEl.classList.add("paginationItem_active");

     activePage = page;
     const nextURL = `?page=${activePage}`;
     const nextTitle = activePage;
     window.history.replaceState(null, nextTitle, nextURL);


    })
  return liEl;

}

DisplayList (blog_card_all, steps, current_page);

SetupPagination (blog_card_all, pageSpan, steps,current_page)

})


const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.menu__list');
const menu = document.querySelector('.header__menu_list');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('menu_active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  el.classList.add('menu_active');
}
function resetIndicator() {
  indicator.style.setProperty('left', 0);
  indicator.style.setProperty('width', 0);
}

items.forEach((item) => {
  item.addEventListener('mouseover', (e) => {
    handleIndicator(e.target)
  });
  item.classList.contains('menu_active') && handleIndicator(item);
});
  menu.addEventListener('mouseleave', function() {
    resetIndicator();
});

/////
document.querySelectorAll('.sub__menu_all').forEach(dropDownFunc);
function dropDownFunc(dropDown) {
  if (dropDown.classList.contains('click-dropdown') === true) {
    dropDown.addEventListener('click', function (e) {
      e.preventDefault();
      console.log(1111);
      let submenu = document.querySelector('.sub__menu_list')
      if (submenu.classList.contains('list_active') === false) {
        submenu.classList.add('list_active');
      } else {
        submenu.classList.remove('list_active');
      }
    })
  }
}
///////

// burger menu
let inner_nav = document.querySelector(".header__menu_list");
let toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  inner_nav.classList.toggle("active");
});
/////
//// change nav color when hover
// let header_ass = document.querySelector(".header__menu_list");
// let header__inner_tel = document.querySelector(".header__inner_tel");
// const fixedmenu = () => {
//   console.log(1121211);
//     header_ass.classList.remove("shadow-menu");
//   if (window.scrollY < 100) {
//     console.log(1121211);
//     header_ass.classList.remove("shadow-menu");
//     header__inner_tel.classList.remove("tel-menu")
//   } else {
//     header_ass.classList.add("shadow-menu");
//   }
// };
// window.addEventListener("hover", fixedmenu);
//// mouseenter

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
            draggable: true,
            slickFilter:true,
            infinite: true,
            slidesPerRow: 3,
            slidesToShow: 2,
            slidesToScroll: 2,
            // rows: 2,
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
// console.log(footer__colon);
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
   "services": "services",
   "blog": "blog",
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
   "project": "See project >",
   "lorem": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.",
   "expert": "Our expertise",
   "apart": "'The best apartment in Dubai' we will find your dream",
   "limit": "“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”",
   "quest":"Do you have any questions?",
   "contacus":"Contact us",
   "send":"Send",
    "articl":"View all articles",
    "seful":"Useful articles",
    "discover":"Discover Architectu",
    "projectsfor":"Projects for many large domestic and foreign corporations, enterprises in many elds such",
    "date":"Jule 03, 2022",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
 },
 "ua": {
   "buy": "покупка >",
   "categorone": "Категорія номер один",
   "apartments": "Квартири в Дубаї",
   "category": "Категорія номер 25",
   "services": "сервіс",
   "blog": "блог",
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
   "project": "Переглянути проект >",
   "lorem": "Місто хмарочосів, шопінгу і незабутніх вражень.  Гігантський поліс, який простягається вздовж Перської затоки. Дубай – найяскравіше місто ОАЕ.",
   "expert": "Наша експертиза",
   "apart": "«Найкраща квартира в Дубаї» ми знайдемо вашу мрію",
   "limit": "«Не обмежуйте себе. Багато людей обмежують себе тим, що, на їхню думку, можуть зробити. Ви можете зайти настільки далеко, наскільки вам дозволяє ваш розум. У що ви вірите, пам’ятайте, ви можете досягти». — Мері Кей Еш",
   "quest":"У вас є які-небудь питання?",
   "contacus":"Зв'яжіться з нами",
   "send":"Надіслати",
   "articl":"Переглянути всі статті",
   "seful":"Корисні статті",
    "discover":"Відкрийте для себе архітектуру",
    "projectsfor":"Проекти для багатьох вітчизняних та іноземних корпорацій, підприємств у багатьох сферах",
    "date":"03 липня 2022 р",
    "":"",
    "":"",

    "":"",
    "":"",
    "":"",
    "":"",
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
  // console.log('language rendered')
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
// console.log('stored language:' + localStorage.getItem('language'))