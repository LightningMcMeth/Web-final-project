
let imageIndex = 0;
const images = [
    '../images/mainbackground1.png',
    '../images/mainbackground2.png',
    '../images/mainbackground3.png',
];

let firstImg = document.getElementById('main-background-image-first');
let nextImg = document.getElementById('main-background-image-next');

window.onload = () => {

    firstImg.src = images[0];
    nextImg.src = images[1];

    setInterval(() => {

        if (firstImg.style.opacity == 0) {

            firstImg.src = images[imageIndex];
            firstImg.style.opacity = 1;

            nextImg.style.opacity = 0;

        } else {

            nextImg.src = images[imageIndex];
            nextImg.style.opacity = 1;

            firstImg.style.opacity = 0;

        }

        imageIndex = (imageIndex + 1) % images.length;
    }, 10000);
};
