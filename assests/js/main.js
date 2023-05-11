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

/*========================== QUALFICATION TABS =================================*/

/*========================== SERVICES MODAL =================================*/