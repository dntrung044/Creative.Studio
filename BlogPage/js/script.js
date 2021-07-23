
$(document).ready(function(){
    // navigation toggling
    $('#nav-icon').click(function(){
        $('.nav-menu').slideToggle();
        
        // icon change
        if($('#nav-icon i').attr('class') === 'fas fa-bars'){
            $('#nav-icon i').removeClass('fas fa-bars');
            $('#nav-icon i').addClass('fas fa-times');
        } else {
            $('#nav-icon i').removeClass('fas fa-times');
            $('#nav-icon i').addClass('fas fa-bars');
        }
    });







// Fixed Nav
const nav = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    nav.classList.add("fix-nav");
  } else {
    nav.classList.remove("fix-nav");
  }
});

// loader padding
$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});


    // AOS Instance
    AOS.init();
    // year
    $('.date').text((new Date).getFullYear());
});

// go top
        var mybutton = document.getElementById("Button");

        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {

            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                mybutton.style.display = "block";

            } else {
                mybutton.style.display = "none";
            }
        }




        // swiper libray initialization
new Swiper('.swiper-container', {
    direction : 'horizontal',
    loop : true,
    slidesPerView : 5,
    autoplay : {
        delay : 3000
    },
    // responsive brakpoints
    breakpoints : {
        '@0' : {
            slidesPerView : 2
        },
        // 888px
        '@1.00' : {
            slidesPerView : 3
        },
        // 1110px
        '@1.25' : {
            slidesPerView : 4
        },
        // 1330px
        '@1.50' : {
            slidesPerView: 5
        }
    }
})
