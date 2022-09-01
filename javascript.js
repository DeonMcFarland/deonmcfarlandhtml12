

myMovie = document.getElementById("Movie");
myImage = document.getElementById("minions");
myMovie.addEventListener("click", changeImage);

function changeImage() {
    myImage.src = "images/mininons.jpg";
    if (myImage.style.width != "800px") {
        myMovie.style.display = "block";
        myImage.style.width = "800px";
    }
    else {
        myImage.style.width = "";
    }
}