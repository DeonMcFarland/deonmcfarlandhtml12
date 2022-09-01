// mybigimage = document.getElementById("largeview");
// card1 = document.getElementById("soup1")
// card1.addEventListener("click", makeBigImage)
// mybigimage.addEventListener("click", hideBigImage)

// function makeBigImage() {
//     mybigimage.innerHTML = '' ;
//     bigimage = document.createElement("img");
//     bigimage.src ="images/mininons.jpg";
//     mybigimage.appendChild(bigimage);
// }

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