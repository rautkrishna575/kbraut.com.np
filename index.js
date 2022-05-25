
// swiper code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const mobile_nav = document.querySelector(".mobile-navbar-btn");
  const headerElem = document.querySelector(".header");
  
  mobile_nav.addEventListener('click', ()=> {
    headerElem.classList.toggle("active");
  })









