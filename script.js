const accordeonItems = document.querySelectorAll(".accordeon__item");
const accordeonBtns = document.querySelectorAll(".accordeon__btn");

const openNavBtn = document.querySelector('.navbar__btn')
const closeNavBtn = document.querySelector('.nav__btn-close')
const header = document.querySelector('header')

const inputForm = document.querySelector('.contact__form .contact__input-group input')
const faqItem = document.querySelectorAll('.FAQ__item')

// Active nav
openNavBtn.addEventListener('click', openNav)
closeNavBtn.addEventListener('click', closeNav)


// Accordeon
accordeonBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("accordeon__btn--active")) {
      return;
    } else {
      for (i = 0; i < accordeonBtns.length; i++) {
        accordeonBtns[i].classList.remove("accordeon__btn--active");
        accordeonItems[i].classList.remove("accordeon__item--active")
      }
      e.currentTarget.classList.add("accordeon__btn--active");
      accordeonItems[index].classList.add("accordeon__item--active")
    }
  })
})

// FAQ 
faqItem.forEach(item => {
  item.addEventListener('click', openAndCloseFaq)
})


  

function openNav(){
    if(!header.classList.contains('active')) {
        header.classList.add('active')
    } else {
        return
    }
}

function closeNav(){
    if(header.classList.contains('active')) {
        header.classList.remove('active')
    } else {
        return
    }
} 

function openAndCloseFaq(e) {
 
  e.currentTarget.classList.toggle("FAQ__item--active")
}

// Input
inputForm.addEventListener('input', (e) => {

  const regexEmail = /\S+@\S+\.\S+/

 if(e.target.value.length > 0) {
  if(e.target.value.search(regexEmail) === 0) {
    inputForm.parentElement.classList.remove('contact__input-group--error')
  } else if (e.target.value.search(regexEmail) === -1) {
    inputForm.parentElement.classList.add('contact__input-group--error')
  }
 } else {
  inputForm.parentElement.classList.remove('contact__input-group--error')
 }
  
})