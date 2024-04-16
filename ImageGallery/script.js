const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');

const imageIndexes = [1, 2, 3, 10, 5, 6, 7, 8, 9, 4];

popup.style.display = 'none';
selectedImage.src = '';

imageIndexes.forEach((i) => {
    const image = document.createElement('img');
    image.src = `images/pranav_digital_art-${i}.jpg`;
    image.alt = `Art ${i} of Pranav Digital library`;

    gallery.appendChild(image);

    image.addEventListener('click', () => {
        selectedImage.src = `images/pranav_digital_art-${i}.jpg`;
        popup.style.display = 'flex';
    });
});

popup.addEventListener('click', (e) => {
    if (e.target !== selectedImage) {
        popup.style.display = 'none';
        selectedImage.src = '';
    }
});





