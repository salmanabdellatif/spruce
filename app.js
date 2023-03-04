// menu toggler
const toggleBtn = document.querySelector('.toggle-button')
const links = document.querySelector('.links')

toggleBtn.addEventListener('click', () => {
  links.classList.toggle('active')
})

// slider
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
