// Simple lazy load use case
(() => {

  // Fetch all images
  const images = document.querySelectorAll('img.lazy')

  // Only load images after browser has some time on its hands
  window.addEventListener('load', function () {

    // Iterate over items
    for (let i = 0; i < images.length; i++) {

      // Create shorthand variable
      const image = images[i]

      // Set source attribute from data-src attribute
      image.src = image.dataset.src

      // Remove data-src attribute and class
      image.removeAttribute('data-src')
      image.classList.remove('lazy')
    }
  })
})()

