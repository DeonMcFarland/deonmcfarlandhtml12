mybigimage = document.getElementById("largeview");
card1 = document.getElementById("soup1")
card1.addEventListener("click", makeBigImage)
mybigimage.addEventListener("click", hideBigImage)

function makeBigImage() {
    mybigimage.innerHTML = '' ;
    bigimage = document.createElement("img");
    bigimage.src ="images/mininons.jpg";
    mybigimage.appendChild(bigimage);
}