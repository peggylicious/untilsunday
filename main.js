// var container = document.querySelector(".container"),
//     leftNav = document.querySelector(".left_nav"),
//     rightNav = document.querySelector(".right_nav"),
//     menu_1 = document.querySelector("#menu_1"),
//     menu_2 = document.querySelector("#menu_2"),
//     overlay = document.querySelector(".overlay"),
//     leftClose = document.getElementById("close_1");

// document.addEventListener("click", function(e){
//     // Left Navigation Off Canvas
//     if (event.target.matches('#menu_1') || event.target.matches('#close_1') || event.target.matches('.left_ham')){
//         if (window.innerWidth > 767){
//             menu_1.classList.toggle("menu_1_copy");
//             checkLeftNav();
//         }else{
//             checkLeftNav();
//         }
//     }

//     // Right Navigation
//     if (event.target.matches('#menu_2')){
//         if (window.innerWidth > 767){
//             menu_2.classList.toggle("menu_1_copy");
//             checkRightNav();
//         }else{
//             checkRightNav();

//         }
//     }
// })

// // Check if style is present
// function checkLeftNav(){
//     if (window.getComputedStyle(leftNav).left === "-320px") {
//         container.classList.toggle("move_cont");
//         leftNav.style.left = "0";
//         overlay.classList.toggle('overlay_add');
//         document.querySelector(".ham_1").classList.toggle("ham");
//         document.querySelector(".ham_1").classList.toggle("special");
//         document.getElementsByTagName('body')[0].classList.toggle('bdy_hide')
//     }else{
//         leftNav.style.left = "-320px";
//         leftNav.classList.toggle("hide_left_nav");
//         container.classList.toggle("move_cont");
//         overlay.classList.toggle('overlay_add');
//         document.getElementsByTagName('body')[0].classList.toggle('bdy_hide');
//         document.querySelector(".ham_1").classList.toggle("ham");
//         document.querySelector(".ham_1").classList.toggle("special");
//     }
// }
// function checkRightNav(){
//     if (window.getComputedStyle(rightNav).right === "-320px") {
//         rightNav.style.right = "0px";
//         container.classList.toggle("move_cont_right");
//         overlay.classList.toggle('overlay_add');
//         // menu_2.style.zIndex = "10";
//         document.getElementsByTagName('body')[0].classList.toggle('bdy_hide')
//     }
//     else{
//         rightNav.style.right = "-320px";
//         container.classList.toggle("move_cont_right");
//         overlay.classList.toggle('overlay_add');
//         document.getElementsByTagName('body')[0].classList.toggle('bdy_hide')
//     }
// }
// // When user resizes browser window by dragging it L or  R
// window.addEventListener("resize", function(e){
//     if ((window.innerWidth > 767 && leftNav.style.left === "0px")){
//         menu_1.classList.add("menu_1_copy");
//     }else{
//         menu_1.classList.remove("menu_1_copy");
//     }

//     // if(window.innerWidth > 500 && rightNav.style.right === "0px"){
//     //     menu_1.classList.add("menu_1_copy");
//     // }else{
//     //     menu_1.classList.remove("menu_1_copy");
//     // }
// })