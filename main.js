var container = document.querySelector(".container"),
    leftNav = document.querySelector(".left_nav"),
    rightNav = document.querySelector(".right_nav"),
    menu_1 = document.querySelector("#menu_1"),
    menu_2 = document.querySelector("#menu_2"),
    overlay = document.querySelector(".overlay"),
    leftClose = document.getElementById("close_1");

document.addEventListener("click", function(){
    if (event.target.matches('#menu_1') || event.target.matches('#close_1')){
        if (window.innerWidth > 500){
            menu_1.classList.toggle("menu_1_copy");
            checkPresence();
            // menu_1.style.zIndex = "10";
            // menu_1.style.backgroundColor = "#000";
        }else{
            checkPresence();
        }
    }

    // Right Navigation
    // if (event.target.matches('#menu_2')){
    //     if (window.innerWidth > 500){
    //         if (window.getComputedStyle(rightNav).right === "-320px") {
    //             rightNav.style.right = "0px";
    //             container.classList.toggle("move_cont_right");
    //             overlay.classList.toggle('overlay_add');
    //             menu_2.style.zIndex = "10";
    //             document.getElementsByTagName('body')[0].classList.toggle('bdy_hide')
    //         }
    //         else{
    //             rightNav.style.right = "-320px";
    //             container.classList.toggle("move_cont_right");
    //             overlay.classList.toggle('overlay_add');
    //             document.getElementsByTagName('body')[0].classList.toggle('bdy_hide')
    //         }
    //     }
    // }
})

// Check if style is present
function checkPresence(){
    if (window.getComputedStyle(leftNav).left === "-320px") {
        container.classList.toggle("move_cont");
        leftNav.style.left = "0";
        overlay.classList.toggle('overlay_add');
        document.querySelector(".ham_1").classList.toggle("ham");
        document.querySelector(".ham_1").classList.toggle("special");
        // menu_1.style.zIndex = "10";
        // menu_1.style.backgroundColor = "#000";
        document.getElementsByTagName('body')[0].classList.toggle('bdy_hide')
    }else{
        leftNav.style.left = "-320px";
        leftNav.classList.toggle("hide_left_nav");
        container.classList.toggle("move_cont");
        overlay.classList.toggle('overlay_add');
        // menu_1.style.backgroundColor = "transparent";
        document.getElementsByTagName('body')[0].classList.toggle('bdy_hide');
        document.querySelector(".ham_1").classList.toggle("ham");
        document.querySelector(".ham_1").classList.toggle("special");
    }
}
// When user resizes browser window by dragging it L or  R
window.addEventListener("resize", function(e){
    if (window.innerWidth > 500){
        menu_1.style.zIndex = "10";
        menu_1.classList.add("menu_1_copy");
    }else{
        menu_1.style.zIndex = "0";
        menu_1.classList.remove("menu_1_copy");
    }
})