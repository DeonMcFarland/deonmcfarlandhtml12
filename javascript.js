

myMovie = document.getElementById("movie");
myImage = document.getElementById("minions");
myMovie.addEventListener("click", changeImage);

function changeImage(){
    myImage.src = "images/mininons.jpg";
    if (myImage.style.width != "300px") {
        myMovie.style.display = "block";
        myImage.style.width = "300px";
    }
    else {
        myImage.style.width = "";
    }
}