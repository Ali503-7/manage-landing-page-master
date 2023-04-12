let open_img = document.querySelector(".open");

let menu = document.querySelector(".nav");

let close_img = document.querySelector(".close");

open_img.onclick = () => {
  menu.style.display = "block";
  open_img.style.display = "none";
  close_img.style.display = "block";
};
close_img.onclick = () => {
  menu.style.display = "none";
  open_img.style.display = "block";
  close_img.style.display = "none";
};

var splide = new Splide(".splide", {
  type: "loop",
  focus: "center",
  maxWidth: "100%",
  autoplay: true,
});

splide.mount();

// email

let input = document.querySelector("input");
let button = document.querySelector("footer button");
let f_p = document.querySelector("footer .input span");
function T_show() {
  f_p.classList.add("alert-show");
}
function F_show() {
  f_p.classList.remove("alert-show");
}

function ValidateEmail(mail) {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!input.value.match(regex)) {
    T_show();
    setTimeout(() => {
      F_show();
    }, 5000);
  } else {
    input.value = "";
  }
}

button.onclick = () => {
  ValidateEmail(input.value);
};

// section animation s
// section Two
const sectionTwo = document.querySelector(".S-sec");
const STleft = document.querySelector(".S-sec .left");
const STright = document.querySelector(".S-sec .right");

// section four
const secitonFour = document.querySelector(".Fu-sec");
const secitonFourH1 = document.querySelector(".Fu-sec .h1");
const secitonFourButton = document.querySelector(".Fu-sec .button");

// footer
const footer = document.querySelector('footer')
const footericons = document.querySelector("footer .icons");
const footerone = document.querySelector('footer .one')
const footertwo = document.querySelector('footer .two')
const footerform = document.querySelector('footer .form')

console.log(footer)

function onscrollAnimation(sectionName, delay, ...other) {
  if (window.scrollY >= sectionName.offsetTop - delay) {
    other.forEach((oth) => {
      oth.classList.add("show");
    });
  } else {
    other.forEach((oth) => {
      oth.classList.remove("show");
    });
  }
}

window.onscroll = () => {
  onscrollAnimation(sectionTwo, 250, STleft, STright);
  onscrollAnimation(secitonFour, 400, secitonFourH1, secitonFourButton);
  onscrollAnimation(footer, 500, footericons, footerone,footertwo, footerform);
};
