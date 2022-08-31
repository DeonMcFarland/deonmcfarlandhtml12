myitem = document.getElementById("firsttest");

    myitem.addEventListener("click", onClick);
    myitem.style.fontsize="36px";
myitem.style.color= "blue";
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);


function onClick() {  
        myitem.style.color = "green";  
    }
    function onButtonClick() {  
        otheritem.style.color = "yellow";  
    }