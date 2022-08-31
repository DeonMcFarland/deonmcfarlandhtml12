myitem = document.getElementById("firsttest");

    myitem.addEventListener("click", onClick);
    myitem.style.fontsize="36px";
myitem.style.color= "blue";
    function onClick() {  
        myitem.style.color = "green";  
    }