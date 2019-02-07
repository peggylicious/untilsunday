var container = document.querySelector(".container"),
    leftNav = document.querySelector("nav"),
    menu_1 = document.querySelector(".menu_1"),
    overlay = document.querySelector(".overlay");

document.addEventListener("click", function(){
    if (event.target.matches('.menu_1')){
        if (window.innerWidth > 500){
            leftNav.classList.toggle("nav_show");
            overlay.classList.toggle('overlay_add');
            menu_1.style.zIndex = "10";
            document.getElementsByTagName('body')[0].classList.toggle('bdy_hide')
            // document.getElementsByTagName('body')[0].style.overflow = "hidden";
        }else{
            leftNav.classList.toggle("nav_show");
            overlay.classList.toggle('overlay_add');
            document.getElementsByTagName('body')[0].classList.toggle('bdy_hide')
        }
    }
})

window.addEventListener("resize", function(e){
    if (window.innerWidth > 500){
        menu_1.style.zIndex = "10";
    }else{
        menu_1.style.zIndex = "0";
    }
})