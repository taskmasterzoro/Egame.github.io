// Variables
const menuIcon = document.querySelector('.menu-icon');
const navbarMenu = document.querySelector('.menu');
const notification = document.querySelector('.notification');
const bellIcon = document.querySelector('#bell-icon');

// Menu toggle
const toggleMenu = () => {
  navbarMenu.classList.toggle('active');
  menuIcon.classList.toggle('move');
  notification.classList.remove('active');
};

menuIcon.addEventListener('click', toggleMenu);

// Notification toggle
bellIcon.addEventListener('click', () => {
  notification.classList.toggle('active');
});

// Swipe Function
const swiper = new Swiper('.trending-content', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1068: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// ScrollBar OnScroll Function
const scrollBar = document.getElementById('scroll-bar');

const updateScrollBar = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  scrollBar.style.width = `${scrolled}%`;
};

window.addEventListener('scroll', updateScrollBar);