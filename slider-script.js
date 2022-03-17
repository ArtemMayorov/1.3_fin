const slider = document.querySelector('.swiper')


let swiper;
function mobileSlider() {
  
  if (window.innerWidth < 767 && slider.dataset.mobile == 'false') {
    slider.dataset.mobile = 'true'
    swiper =  new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 2,
      spaceBetween: 200,
      // If we need pagination
      pagination: {
        clickable:true,
        el: '.swiper-pagination',
        dynamicBullets: false,
        dynamicMainBullets: 9,
        loop: false,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
        // when window width is >= 640
        640: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },
        700: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        }
      }
    });
    // swiper.removeSlide([10 ,9]);
  }
  

  if (window.innerWidth > 768 && slider.dataset.mobile == 'true') {
    
    if(slider.classList.contains('swiper-initialized')) {
      // swiper.appendSlide([
      //   `<div class="swiper-slide swiper__item"><a href="#" class="swiper__link"><img class="swiper__image" src="/Img/slider/slide10.png" alt="lenovo"></a></div>`,
      //   `<div class="swiper-slide swiper__item"><a href="#" class="swiper__link"><img class="swiper__image" src="/Img/slider/slide11.png" alt="lenovo"></a></div></div>`
      // ]);
      swiper.destroy()
    }
    slider.dataset.mobile = 'false'
  } 
}
  window.addEventListener('resize', ()=> {
    // console.log(window.innerWidth)
    mobileSlider()
  })
  window.addEventListener('load', ()=> {
    mobileSlider()
  })
console.log(window.innerWidth)

// hidden
const openPartners = document.querySelector('.swiper-wrapper')
const showAllButton = document.querySelector('.show-all')


showAllButton.addEventListener('click',() =>{

  openPartners.classList.toggle('swiper-wrapper__list--open');
  showAllButton.classList.toggle('slider__show-all--hidden');

   if(showAllButton.textContent != "Скрыть") {
  showAllButton.textContent = "Скрыть"
  } else {
    showAllButton.textContent = "Показать все"
  }

})

//  if(!openPartners.classList.contains("swiper-wrapper__list--open")) {
//     openPartners.classList.add('swiper-wrapper__list--open')
//  }
