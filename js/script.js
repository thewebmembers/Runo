window.onscroll = ()=>{
    this.scrollY > 1 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
const navbar = document.querySelector(".navbar");


$('.section_1_nav ul li a').on('click', function(){
    $('.section_1_nav ul li a').removeClass('section_1_nav_a_active');
    $(this).addClass('section_1_nav_a_active');
})

function myFunction(x) {
    // if (x.matches) { // If media query matches
    //   $('header').html('')
    // }else{
    //     $('header').html('')
    // }
}
  
var x = window.matchMedia("(max-width: 760px)");
myFunction(x);
x.addListener(myFunction);