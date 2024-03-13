
// Get the button
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scrollContainer");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
 
  const imageWidth = 400; // Width of each image
  const imagesToShow = 1; // Number of images to show at a time
  let scrollPosition = 0;
 
  // Debounce function to limit the rate at which scrollGallery is called
  function debounce(func, wait) {
    let timeout;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    };
  }
 
  function scrollGallery(offset) {
    scrollPosition += offset * imageWidth;
    // Ensure scrollPosition is a multiple of imageWidth
    scrollPosition = Math.round(scrollPosition / imageWidth) * imageWidth;
    scrollContainer.scrollLeft = scrollPosition;
  }
 
  // Debounce the scrollGallery function to prevent frequent calls
  const debouncedScrollGallery = debounce(scrollGallery, 200);
 
  leftArrow.addEventListener("click", function () {
    debouncedScrollGallery(-1);
  });
 
  rightArrow.addEventListener("click", function () {
    debouncedScrollGallery(1);
  });
});

