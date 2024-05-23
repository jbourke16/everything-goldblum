let jeffGoldblumImages = [
    "https://bit.ly/3WOxy8r",
    "https://bit.ly/3KefcWP",
    "https://bit.ly/3QWBP5U",
    "https://bit.ly/3RliziT",
    "https://bit.ly/4bRX0OK",
    "https://eonli.ne/4bNa5IY",
    "https://bit.ly/3KfFZlE",
    "https://bit.ly/4dQLWmG",
    "https://bit.ly/3wO9vvG",
    "https://bit.ly/3wJGwsZ",
    "https://bit.ly/3KdavMT",
    "https://bit.ly/3yF7ylG",
    "https://tinyurl.com/2pu3heff"
];

function replaceImages() {
    const imgs = document.getElementsByTagName("img");
    for (let image of imgs) {
        // Skip images that are the Google logo based on alt attribute or src attribute
        if (image.alt === 'Google' || image.src.includes('logo') || image.src.includes('googlelogo')) {
            continue;
        }
        const idx = Math.floor(Math.random() * jeffGoldblumImages.length);
        image.src = jeffGoldblumImages[idx];
    }
}

replaceImages();

// Observe changes in the DOM to handle dynamically loaded images
const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            replaceImages();
        }
    }
});

// Configuration of the observer
const config = {
    childList: true,
    subtree: true
};

// Start observing the body for added/removed nodes
observer.observe(document.body, config);



