import React from "react";
const bar = document.getElementById('bar');
const nav =document.getElementById('elements');


if(bar){
    bar.addEventListener("click",function(){
        nav.classList.add("active");
        
    })
}
