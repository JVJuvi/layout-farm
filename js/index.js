$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1 
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark__theme");
 }

 window.onscroll = function (event) {
    let navbarFixed =  document.querySelector('.header');
    if (window.scrollY > 10) {
      navbarFixed.classList.add('header--sticky');
      //hoặc
      //navbarFixed.style.padding = "20px 15px";
    } else {
      navbarFixed.classList.remove('header--sticky');
      //hoặc
      //navbarFixed.style.padding = "25px 15px";
    }
  }