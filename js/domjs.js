"use strict";

var imageCounter= 1;

showdiv(imageCounter);

function changeImage(m) {

    Showdiv(imagecounter = imageCounter + m);

}

function Showdiv (n) {

    var i;

    var imageArray = document.getElementsByClassName ("mySlides");

    if (n > imageArray.length) { 

        imageCounter = 1;

}

if (n < 1) {

    imageCounter = imageArray.length;

}

for (i = 0; i < imageArray.length; i++) {

    imageArray[i].style.display = "none";

}

imageArray[imageCounter - 1].style.display = "block";

}