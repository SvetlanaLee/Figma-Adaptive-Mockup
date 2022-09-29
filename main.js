const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const navItems= document.querySelectorAll('.nav-item');

navBtn.onclick = () => {
  if(nav.classList.toggle('open')) {
    navBtnImg.src = "./img/icons/NAV-CLOSE.svg"
  } else {
    navBtnImg.src = "./img/icons/NAV.svg"
  }
};

Array.from(navItems).forEach(item => item.onclick = () => {
  nav.classList.remove('open');
  navBtnImg.src = "./img/icons/NAV.svg";
});
