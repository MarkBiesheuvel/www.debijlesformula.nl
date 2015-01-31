// Simple lazy load use case
(function(i, images, image){

    // Fetch all images
    images = document.querySelectorAll('img.lazy');

    // Only load images after browser has some time on its hands
    setTimeout(function(){

        // Iterate over items
        for(; i<images.length; i++){

            // Create shorthand variable
            image = images[i];

            // Set source attribute from data-src attribute
            image.src = image.dataset.src;

            // Remove data-src attribute and class
            image.removeAttribute('data-src');
            image.classList.remove('lazy');
        }
    }, 0);
})(0);

