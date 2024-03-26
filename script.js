

// Our services slide show. Get the button
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


// Home page. Reviews
let slideIndex = 1;
showSlides(slideIndex);
 
function plusSlides(n) {
  showSlides(slideIndex += n);
}
 
function currentSlide(n) {
  showSlides(slideIndex = n);
}
 
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// our services packages
function myFunction(num) {
  let dots = document.getElementById("dots" + num);
  let moreText = document.getElementById("more" + num);
  let btnText = document.getElementById("myBtn" + num);
 
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// end our sevices

//Bookings
function displayInformation() {
  // Get the input values
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let datetwo = document.getElementById("date").value;
  let comment = document.getElementById("comment").value;


  // Construct the information string
  let information = "<strong>Name:</strong> " + name + "<br><strong>Last Name:</strong> " + surname + "<br><strong>Email:</strong> " + email + "<br><strong>Phone No.:</strong> " + phone + "<br><strong>Arrival date:</strong> " + date + "<br><strong>Depature date:</strong> " + date +  "<br><strong>Message:</strong> " + comment ;

  // Create a Blob object containing the information string
  let blob = new Blob([information], { type: 'text/html' });

  // Create a URL for the Blob object
  let url = URL.createObjectURL(blob);

  // Show a pop-up message
  alert("Thank you! Check if you have filled in all your details before submitting.");

  // Open the URL in a new tab
  window.open(url, '_blank');

}


function resetFunction() {
  document.getElementById("ourForm").reset();
}

// Get the button
let mybutton = document.getElementById("myBtn1");
 
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 200) {
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
//end of booking

// contact form
function validateForm() {
  let nameField = document.getElementById("name");
  let nameRegex = /^[A-Za-z]+$/; // Regular expression to match only alphabetic characters
  let nameValue = nameField.value;
  let emailField = document.getElementById("email");
  let emailValue = emailField.value;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for validating email

  // Resetting styles
  nameField.style.border = "1px solid #ced4da"; // Reset border color
  emailField.style.border = "1px solid #ced4da"; // Reset border color
 
 
  // Name validation
  if (!nameRegex.test(nameValue)) {
    alert("Please enter a valid name with only alphabetic characters.");
    nameField.style.border = "1px solid red"; // Change border color to red
    return false;
  }
 
  // Email validation
  if (!emailRegex.test(emailValue)) {
    alert("Please enter a valid email address.");
    emailField.style.border = "1px solid red"; // Change border color to red
    return false;
  } 

  alert("Thank you for contacting us. We'll get back to you.");
 
  return true;
}
 