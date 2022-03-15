

var navMenu = document.getElementById('nav-menu');
var navToggle = document.getElementById('nav-toggle');
var navClose = document.getElementById('nav-close');

     if(navToggle){
          navToggle.onclick = () =>{ 
                navMenu.classList.add('show-menu'); 
          };   
    } 
    if(navClose){
        navClose.onclick = function () {
            navMenu.classList.remove('show-menu');
        };
    }
    // remove show menu 
    var navLink = document.querySelectorAll('.nav__link');

    function linkAction (){
        var navMenu = document.getElementById('nav-menu');
        // when we click on the nav links remove show-menu class
        navMenu.classList.remove('show-menu'); 
    }
    navLink.forEach(n => n.addEventListener('click',linkAction));

//======================== services modeal=================== //
 const modalViews = document.querySelectorAll('.services__modal')
 const modalBtns = document.querySelectorAll('.services__button') 
 const modalCloses = document.querySelectorAll('.services__modal-close'); 


let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click',() => {
      modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click',() => {
        modalViews.forEach((modalview) => {
            modalview.classList.remove('active-modal')
        })
    })
})

/*==================portfolio swiper ========*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /*=======scroll---sections================*/
  const sections = document.querySelectorAll('section[id]')

 function scrollActive () {
     const scrollY = window.pageYOffset

     sections.forEach(current =>{
         const sectionHeight = current.offsetHeight
         const sectionTop = current.offsetTop -50;
         const sectionId = current.getAttribute('id')

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
           document.querySelector('.nav__menu a[href*= ' + sectionId + ']').classList.add('active-link')
        }else { 
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }    
    })
 }
 window.addEventListener('scroll', scrollActive)

 /* =====show scroll top ====== */ 
  function scrollup(){
      const scrollup = document.getElementById('scrollup')
      //whn the scroll is higher than 540 vh add the show-scroll class  //
      if( this.scrollY >=560 ) scrollup.classList.add('show-scroll');
     else scrollup.Classlist.remove('show-scroll');
    }
  window.addEventListener('scroll', scrollup)

  //====== theme setup =====/
  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconTheme = 'uil-sun'

  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')
  //current theme selection //
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
 
  if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'uil-moon' ? "add" : 'remove'](iconTheme)
  }

  // activate / deactivate theme manually 
  themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
       //save theme and current icon //
       localStorage.setItem('selected-theme', getCurrentTheme())
       localStorage.setItem('selected-icon', getCurrentIcon())   
  })








