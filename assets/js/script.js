'use strict';

const navToggler = document.querySelector('.nav-toggle-btn');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar-link');
const header= document.querySelector('.header');




const addEventOnElem = function (el, type, callback){
  if(el.length > 1){
    for(let i = 0; i < el.length; i++){
      el[i].addEventListener(type, callback);
    }
  }else{
    el.addEventListener(type, callback);
  }
}

const toggleNavbar = function(){
  navbar.classList.toggle('active');
  navToggler.classList.toggle('active');
}

addEventOnElem(navToggler, 'click', toggleNavbar);

const closeNavbar = function(){
  navbar.classList.remove('active');
  navToggler.classList.remove('active');
}

addEventOnElem(navbarLinks, 'click', toggleNavbar);

const activeElemOnScroll = function(){
  if(window.scrollY > 30){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
}

addEventOnElem(window, 'scroll', activeElemOnScroll)