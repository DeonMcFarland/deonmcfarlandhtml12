myitem = document.getElementById("firsttest");

    myitem.addEventListener("click", onClick);
    myitem.style.fontsize="36px";
myitem.style.color= "blue";
thebutton = document.getElementById("thebutton"); 
thebutton.addEventListener("click", onButtonClick);
otheritem = document.getElementById("buttontest");  



function onClick() {  
        myitem.style.color = "green";  
    }
    function onButtonClick() {  
        otheritem.style.color = "yellow";  
    }

    textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}

mybigimage = document.getElementById("largeview");
card1 = document.getElementById("card1")
card1.addEventListener("click", makeBigImage)
mybigimage.addEventListener("click", hideBigImage)

function makeBigImage() {
    mybigimage.innerHTML = '' ;
    bigimage = document.createElement("img");
    bigimage.src ="images/mininons.jpg";
    mybigimage.appendChild(bigimage);
}