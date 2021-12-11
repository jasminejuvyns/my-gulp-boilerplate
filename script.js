//slideshow
"use strict";
let myIndex = 0;
content();

function content() {
    try{
        let i;
        let x = document.getElementsByClassName("slides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }    
        x[myIndex-1].style.display = "block";
    }
    catch(err) {
    }
    setTimeout(content, 2500); 
}