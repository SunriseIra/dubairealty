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
    "rent":"Rent",
    "furnished":'Furnished Apartments',
    "in":"in Dubai",
    "furnish":"Furnished Apartments in Dubai",
    "main":"Main",
    "response":"This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact it can trigger self-censoring.",
    "touch":"One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all:",
    "methods":"Methods for Everyone",
    "everyt":"Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":""
   
  },
  "ua": {
    "buy": "покупка",
    "categorone": "Категорія номер один",
    "apartments": "Квартири в Дубаї",
    "category": "Категорія номер 25",
    "services": "сервіс",
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
    "rent":"Оренда",
    "furnished":'Мебльовані квартири',
    "in":"у Дубаї",
    "furnish":"Мебльовані апартаменти в Дубаї",
    "main":"Головна",
    "response":"Ця відповідь важлива для нашої здатності вчитися на помилках, але вона також породжує самокритику, оскільки є частиною системи захисту від загроз. Іншими словами, те, що тримає нас у безпеці, може зайти занадто далеко і зробити нас занадто безпечними. Насправді це може викликати самоцензуру.",
    "touch":"Один дотик до розпеченої плити — це, як правило, все, що нам потрібно, щоб уникнути подібного дискомфорту в майбутньому. Те ж саме вірно, коли ми відчуваємо емоційне відчуття стресу від наших перших випадків соціального відторгнення або насмішок. Ми швидко вчимося боятися і таким чином автоматично уникаємо потенційно стресових ситуацій усіх видів, включаючи найпоширеніші з усіх:",
    "methods":"Методи для всіх",
    "everyt":"Усе, що проходило по дорозі, туди й назад, захоплювало її: кожен камінчик, мураха, палиця, листочок, травинка й тріщина на тротуарі — це було те, що можна було підняти, подивитися, спробувати на смак, понюхати й потрясти. Все їй було цікаво. Вона нічого не знала. Я знав усе… був там, робив це. Вона була в моменті, я був у минулому. Вона була уважна. Я був без розуму.",
    "":"",
    "":"",
    "":"",
    "":"",
    "":"",
    "":""
  
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
// let term = document.querySelectorAll('.complete__plane_term');
// console.log(term)

/////
///table
// https://run.mocky.io/v3/0d03ca8f-ca8d-4780-80fe-bfe6e453fb57

window.addEventListener("load", (event) => {

let card_plhold = document.getElementById("cardDiv");




    fetch(`./data.json`)
        .then((response) => response.json())
        .then(function (data) {
        let vadata = Object.values(data);
        let valdata = vadata[0];

          // console.log(valdata.length);
         valdata.forEach((obj) => {
        for (let i = 0; i < valdata.length; i++) { 
        if(obj.id === valdata[i].id){
          // console.log(valdata[i].id);
          // console.log(valdata.length);

        card_plhold.innerHTML += `
            <div class="complete__plane_term" data-name="${valdata[i].id}">
                  <div class="complete__plate-list" data-name="${valdata[i].id}">${valdata[i].package}</div>
                  <div class="complete__plate-check" data-name="${valdata[i].id}">
                  <div class="complete__plate-checkmark" data-name="${valdata[i].id}"></div>
                  <div class="complete__plate-manage" data-name="${valdata[i].id}"></div>
                  </div>
                  </div>
                  `;  
        }   
      }     
      })

      
      function controlImg() {
        valdata.forEach((obje) => {
        // console.log(valdata.length);
        if (obje.control === true){
          let control__plate = document.querySelectorAll(".complete__plate-manage");
         let controlAll = Array.from(control__plate);
         controlAll.forEach((eleme) => {
        if ( +eleme.dataset.name === obje.id) {  
         eleme.innerHTML += `<div>✓</div>`
        }  
        })
        } 
        })
        }
        controlImg();
    
      function popupImg() {
      valdata.forEach((obj) => {
      // console.log(valdata.length);
      if (obj.management === true){
        let complete__plate = document.querySelectorAll(".complete__plate-checkmark");
       let completeAll = Array.from(complete__plate);
      completeAll.forEach((elem) => {
      if ( +elem.dataset.name === obj.id) {     
       elem.innerHTML += `<div>✓</div>`
      }  
      })
      } 
      })
      }
          popupImg();

        })
        .catch(function () {
          //catch any errors
        });

      })

      // 
      let map;
      // let marker;
      

      function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 10,
          center: { lat: 25.16, lng: 55.29 },
        });

        marker = new google.maps.Marker({
          map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: { lat: 25.16, lng: 55.30 },
        });
        marker.addListener("click", toggleBounce);
      }


      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
  //     async function initMap() {
  // const position = { lat: 25.0731, lng: 55.29 };

  // const { Map } = await google.maps.importLibrary("maps");
  // // const  AdvancedMarkerView = new google.maps.importLibrary("marker");

  // map = new Map(document.getElementById("map"), {
  //   center: { lat: 25.07, lng: 55.2},
  //   // mapId: "DEMO_MAP_ID",
  //   zoom: 10,
  // });


  // async function initMap() {
  //   const position = { lat: 25.0731, lng: 55.29 };
  
  //   const { Map } = await google.maps.importLibrary("maps");
  //   // const  AdvancedMarkerView = new google.maps.importLibrary("marker");
  
  //   map = new Map(document.getElementById("map"), {
  //     center: { lat: 25.07, lng: 55.2},
  //     // mapId: "DEMO_MAP_ID",
  //     zoom: 10,
  //   });

  // const marker = new google.maps.Marker({
  //   map,
  //   draggable: true,
  //   animation: google.maps.Animation.DROP,
  //   position: { lat: 59.327, lng: 18.067 },
  // });
  // marker.addListener("click", toggleBounce);
// }
// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//   marker.setAnimation(null);
//   } else {
//   marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
//   }
  

  // const marker = new AdvancedMarkerView({
  //    map,
  //   position: position,
  //   // title: "Dubai",
  //   icon: image,
  // });

window.initMap = initMap
// initMap();






