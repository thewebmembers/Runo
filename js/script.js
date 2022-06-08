window.onscroll = ()=>{
    this.scrollY > 1 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
const navbar = document.querySelector(".navbar");


$('.section_1_nav ul li a').on('click', function(){
    $('.section_1_nav ul li a').removeClass('section_1_nav_a_active');
    $(this).addClass('section_1_nav_a_active');
})