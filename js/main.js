
let open_img = document.querySelector('.open')

let menu =  document.querySelector('.nav')

let close_img = document.querySelector('.close')

open_img.onclick = () => {
  menu.style.display = "block"
  open_img.style.display = "none"
  close_img.style.display = "block"
}
close_img.onclick = () => {
  menu.style.display = "none"
  open_img.style.display = "block"
  close_img.style.display = "none"
}

var splide = new Splide( '.splide', {
  type   : 'loop',
  focus: 'center',
  maxWidth: '100%',
  mediaQuery: 'min',
  autoplay: true,
} );

splide.mount();