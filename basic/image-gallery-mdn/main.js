const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const array = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const alternative = {
    "pic1.jpg" : "eye",
    "pic2.jpg" : "wave",
    "pic3.jpg" : "flower",
    "pic4.jpg" : "old",
    "pic5.jpg" : "butterfly",
}

/* Looping through images */

array.forEach((image) => { 
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/images/${image}`);
    newImage.setAttribute('alt', alternative[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', () =>{
        displayedImage.src = `/images/${image}`;
        displayedImage.alt = alternative[image];
    });
});

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    if (overlay.style.backgroundColor === 'rgba(0,0,0,0.5)') {
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'; // Remove dark effect
        btn.textContent = 'Darken';
    } else {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'; // Apply dark effect
        btn.textContent = 'Lighten';
    }
})
