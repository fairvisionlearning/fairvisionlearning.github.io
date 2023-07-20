"use strict";

const innerCarousel = document.getElementById("inner-carousel");

const pics = [
'images/000911.jpg',
'images/000912.jpg',
'images/000913.jpg',
'images/utk1.jpg',
'images/utk2.jpg',
'images/utk3.jpg',
'images/cxr1.jpg',
'images/cxr2.jpg',
'images/cxr3.png',
'images/fitz1.jpeg',
'images/fitz2.jpeg',
'images/fitz3.jpeg'
];

let c = 0;
for (const file of pics) {
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");

    if (c == 0) {
        newDiv.className = "carousel-item active";
        c = 1;
    } else {
        newDiv.className = "carousel-item";
    }

    newImg.className = "center-block";
    newImg.style = `height: 250px;`;
    newImg.src = file;
    newImg.alt = "...";

    newDiv.appendChild(newImg);
    innerCarousel.appendChild(newDiv);
}

//! CelebA - 13 Attribs. Exp.
const celeba13 = {
    "Baseline": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "Baseline": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "Baseline": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "Baseline": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "Baseline": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "Baseline": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "Baseline": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "Baseline": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    "Baseline": [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
};

for (let k in celeba13) {
    console.log(k, typeof(k));
}

console.log(celeba13);