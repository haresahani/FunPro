const qualitySelector = document.getElementById('qualitySelector');
const imageDisplay = document.getElementById('imageDisplay');
const loveMessage = document.createElement('p'); 
document.body.appendChild(loveMessage); 

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';

    // Randomize the size and position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; 
    heart.style.fontSize = Math.random() * 10 + 10 + 'px'; 

    document.body.appendChild(heart);

    // Remove heart after falling
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Update image path and message based on selected quality
function updateImageAndMessage(quality) {
    let imagePath;
    switch (quality) {
        case '144p':
            imagePath = 'images/144p.jpeg';
            loveMessage.textContent = "Even though things may seem unclear, there's something special I see in you.";
            break;
        case '240p':
            imagePath = 'images/240p.jpeg';
            loveMessage.textContent = "With every moment, you become a little clearer in my mind.";
            break;
        case '360p':
            imagePath = 'images/360p.png';
            loveMessage.textContent = "Starting to see you for who you really are—unique and amazing.";
            break;
        case '480p':
            imagePath = 'images/480p.png';
            loveMessage.textContent = "Halfway there, and I’m seeing your true self shine through.";
            break;
        case '720p':
            imagePath = 'images/720p.jpeg';
            loveMessage.textContent = "Almost there! Your kindness and strength are clearer now.";
            break;
        case '1080p':
            imagePath = 'images/1080p.avif';
            loveMessage.textContent = "Now I can see the real you—thoughtful, genuine, and inspiring.";
            break;
        case '1440p':
            imagePath = 'images/her_image_1440p.jpg';
            loveMessage.textContent = "At last, perfect clarity. Every quality that makes you incredible is right here.";
            break;
        default:
            imagePath = 'images/heart_144p.jpg';
            loveMessage.textContent = "Select a quality to see yourself.";
    }

    imageDisplay.src = imagePath;
    imageDisplay.classList.remove('show');
    setTimeout(() => {
        imageDisplay.classList.add('show');
    }, 10);
}

qualitySelector.addEventListener('change', function () {
    updateImageAndMessage(qualitySelector.value);
});
