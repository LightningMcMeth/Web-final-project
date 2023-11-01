
let imageIndex = 0;
const images = [
    'images/mainbackground1.png',
    'images/mainbackground2.png',
    'images/mainbackground3.png',
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


document.addEventListener('submit', (event) => {
    if (event.target.matches('#email-form')) {
        event.preventDefault();

        let emailInputElement = document.getElementById('email-input');
        let emailInput = emailInputElement.value;
        let gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;

        if (gmailRegex.test(emailInput)) {

            console.log("Valid Gmail address");

            emailInputElement.value = "";
            emailInputElement.placeholder = "Email submitted!";
        } else {

            console.log("Invalid Gmail address");
            alert("Please enter a valid Gmail address.");
        }
    }
});
