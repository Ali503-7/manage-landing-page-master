
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
  autoplay: true,
} );

splide.mount();

// email

let input = document.querySelector("input")
let button = document.querySelector("footer button")
let f_p = document.querySelector("footer .input span")
console.log(f_p)
function T_show() {
  f_p.classList.add("alert-show")
};
function F_show() {
  f_p.classList.remove("alert-show")
};

function ValidateEmail(mail) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!input.value.match(regex)) {
    T_show()
    setTimeout(() => {
      F_show()
    }, 5000);
  } else {
    input.value = ""
  }
}

button.onclick = () => {
  ValidateEmail(input.value)
  console.log('nani')
}