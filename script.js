let currentIndex = 0;

const images = document.querySelectorAll('.featured');
const thumbnails = document.querySelectorAll('.thumbnail');

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateDisplay();
}

function updateDisplay() {
    // Hide all images
    images.forEach((img, index) => {
        img.style.display = 'none';
        thumbnails[index].classList.remove('active');
    });

    // Show the current image
    images[currentIndex].style.display = 'block';
    thumbnails[currentIndex].classList.add('active');
}

// Thumbnail click event
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateDisplay();
    });
});

// Initialize the display
updateDisplay();
