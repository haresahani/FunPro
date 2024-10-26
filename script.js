const qualitySelector = document.getElementById('qualitySelector');
const imageDisplay = document.getElementById('imageDisplay');

qualitySelector.addEventListener('change', function() {
    const selectedQuality = qualitySelector.value;
    let imagePath;

    if (selectedQuality === "Select") {
        return; // Do nothing if "Select" is chosen
    }

    switch (selectedQuality) {
        case '144p':
            imagePath = 'images/144p.jpeg';
            break;
        case '240p':
            imagePath = 'images/240p.jpeg';
            break;
        case '360p':
            imagePath = 'images/360p.png';
            break;
        case '480p':
            imagePath = 'images/480p.png';
            break;
        case '720p':
            imagePath = 'images/720p.jpeg';
            break;
        case '1080p':
            imagePath = 'images/1080p.avif';
            break;
        case '1440p':
            imagePath = 'images/her_image_1440p.jpg';
            break;
        default:
            imagePath = 'images/heart_144p.jpg';
    }

    imageDisplay.src = imagePath;
});
