
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less"; 
    moreText.style.display = "inline";
  }
}

const initSlider = () =>{
     const imageList = document.querySelectorAll(".slider-wrapper.image-list");
     const slideButtons = document.querySelectorAll(".slider-wrapper.slide-button");
     const sliderScrollbar = document.querySelector(".slide-container .slider-scrollbar");
     const scrollbarThumb= sliderScrollbar.querySelector(".scrollbar-thumb");
     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
      
     scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      
      //update thumb position on mouse move
      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth; 

         const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
         const scrollPosition = (boundedPosition / maxThumbPosition) *  maxScrollLeft;


        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLisst = scrollPosition;


      }
        //remove event listener on mouse up
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      }
      //Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
     });

     // slide images according to the slide button clicks
      slideButtons.forEach(button =>{
        button.addEventListener("click", () => {
           const direction = button.id ==="prev-slide" ? -1 : 1;
           const scrollAmount = imageList.clientWidth * direction;
           imageList.scrollBy({left: scrollAmount, behavior: "smooth" });
        });


      });
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" :  "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" :  "block";
    }
    // update scrollbar thumb position based on image scroll
       const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition  = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`; 
       }
      imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
      });

}
window.addEventListener("load", initSlider);
    

