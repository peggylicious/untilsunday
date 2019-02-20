var overlay = document.querySelector("div.overlay"),
    rightOffC =document.querySelector(".right-offcanvas"),
    leftOffC = document.querySelector(".left-offcanvas"),
    container = document.querySelector(".container"),
    menu_1 = document.querySelector(".menu_1");

document.addEventListener("click", function(event){
    if (event.target.matches(".overlay")){
    //   if (rightOffC.style.transform = "translate3d(0px, 0, 0)"){
        // alert("YO!");
        rightOffC.style.transform = "translate3d(320px, 0, 0)";
        container.style.transform = "translate3d(0, 0, 0)";
        overlay.style.height = "0";
    //   }
    }else{
        container.removeAttribute("style");
        rightOffC.removeAttribute("style");
    }


    // if (event.target.matches(".menu_1")){
    //     container.removeAttribute("style");
    //     rightOffC.removeAttribute("style");
    // }
})