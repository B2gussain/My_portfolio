var menu=document.querySelector(".menu");
var cross=document.querySelector(".cross")
var icon=document.querySelector(".icon")
var navlist=document.querySelector(".navlist")

let nav=true
icon.addEventListener("click",()=>{
    if(nav){
        nav=false;
        menu.style.display="none"
        cross.style.display="block"
        navlist.style.display="block"
    }
    else{
        nav=true;
         menu.style.display="block"
        cross.style.display="none"
         navlist.style.display="none"


    }

})
