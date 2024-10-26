// Selecting the HTML elements
const qualitySelector = document.getElementById('qualitySelector');
const claritySlider = document.getElementById('claritySlider');
const imageDisplay = document.getElementById('imageDisplay');
const loveMessage = document.getElementById('loveMessage');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️'; // You can use other heart symbols or emojis

    // Randomize the size and position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3-5 seconds
    heart.style.fontSize = Math.random() * 10 + 10 + 'px'; // Random size between 10px and 20px

    document.body.appendChild(heart);

    // Remove heart after falling
    setTimeout(() => {
        heart.remove();
    }, 5000); // Matches max animation duration to remove from DOM
}

// Create a new heart every 300ms
setInterval(createHeart, 300);


// Update image path and message based on slider value
function updateImageAndMessage(quality) {
    let imagePath;
    switch (quality) {
        case '1':
            imagePath = 'images/144p.jpeg';
            loveMessage.textContent = "Even though things may seem unclear, there's something special I see in you.";
            break;
        case '2':
            imagePath = 'images/240p.jpeg';
            loveMessage.textContent = "With every moment, you become a little clearer in my mind.";
            break;
        case '3':
            imagePath = 'images/360p.png';
            loveMessage.textContent = "Starting to see you for who you really are—unique and amazing.";
            break;
        case '4':
            imagePath = 'images/480p.png';
            loveMessage.textContent = "Halfway there, and I’m seeing your true self shine through.";
            break;
        case '5':
            imagePath = 'images/720p.jpeg';
            loveMessage.textContent = "Almost there! Your kindness and strength are clearer now.";
            break;
        case '6':
            imagePath = 'images/1080p.avif';
            loveMessage.textContent = "Now I can see the real you—thoughtful, genuine, and inspiring.";
            break;
        case '7':
            imagePath = 'images/her_image_1440p.jpg';
            loveMessage.textContent = "At last, perfect clarity. Every quality that makes you incredible is right here.";
            break;
        default:
            imagePath = 'images/heart_144p.jpg';
    }

    // Update the image source and trigger the animation
    imageDisplay.src = imagePath;
    imageDisplay.classList.remove('show');
    setTimeout(() => {
        imageDisplay.classList.add('show');
    }, 10);
}

// Event listener for slider input
claritySlider.addEventListener('input', function () {
    updateImageAndMessage(claritySlider.value);
});
