
/*========================== MENU SHOW Y HIDDEN =================================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*========= MENU SHOW =========*/
/* Validate if constant exists */
/*  () => { ... } // 매개변수가 없을 경우
    x => { ... } // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
    (x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다. */
if(navToggle){
    navToggle.addEventListener('click', () =>{ 
        navMenu.classList.add('show-menu') /* show-menu 클래스 추가 */
    })
}

/*========= MENU HIDDEN =========*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu') /* show-menu 클래스 제거 */
    })
}

/*========================== REMOVE MENU MOBILE =================================*/
/* 출처(github) : https://github.com/bedimcode/responsive-website-restaurant/blob/main/assets/js/main.js */
/* 아이콘 클릭시 숨김 */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========================== ACCORDION SKILLS =================================*/
const skillsContent = document.getElementsByClassName('skills__content'), /* getElementsByClassName은 클래스의 이름을 알고 있거나 이 클래스가 적용된 엘리먼트를 문서 전체에서 찾고 싶을때 사용합니다. */
      skillsHeader = document.querySelectorAll('.skills__header') /* querySelector와 사용 방법은 동일하며 선택자를 선택하여 배열과 비슷한 객체인 nodeList를 반환합니다. 반환객체가 nodeList이기에 for문 또는 forEach문을 사용합니다. */

function toggleSkills(){
    let itemClass = this.parentNode.className
    /* 특정 엘리먼트의 부모노드에 접근할 때 parentNode를 사용합니다. */

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){ /* data값과 data형이 같은지 체크 */
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})
/* array.forEach(function(currentValue, index, arr)); */
/* function(currentValue, index, arr) - 배열의 각 항목에 대해 실행할 함수
 * currentValue - 배열의 값
 * index (선택 사항) - 현재 항목의 인덱스
 * arr (선택 사항) - 현재 항목의 배열
 */

/*========================== QUALFICATION TABS =================================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

tabs.forEach((tab) =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach((tabContent) =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach((tab) =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*========================== SERVICES MODAL =================================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
            modalViews.forEach((modalView) =>{
                modalView.classList.remove('active-modal')
            })
        })
})

/*========================== PORTFOLIO SWIPER =================================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/*========================== TESTIMONIAL =================================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        568:{     // 568px 이상은 2개
            slidersPerView: 2,
        }
    }
});

/*==========================  =================================*/


/*==========================  =================================*/


/*==========================  =================================*/


/*==========================  =================================*/


/*==========================  =================================*/
