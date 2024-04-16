
// Array of images
var images = ["/images/capeTownSandy.jpg", "/images/back2.jpg", "/images/mpumalangaTourist.jpg", "/images/capeTownTourists.jpg", "/images/stell.jpg", "/images/knp.webp"];
var captions = ["Table Mountain", "Kruger National Park", "Gods Window", "Table Mountain", "Stellenbosch Wine Farm", "Kruger National Park"];
var index = 0;
var slideInterval;

// Function to change the background image and caption
function changeBackground() {
    document.querySelector(".home").style.backgroundImage = "url(" + images[index] + ")";
    document.getElementById("caption").textContent = captions[index];
    updateImageDots(); // Update the active dot
    index = (index + 1) % images.length;
}

// Function to dynamically create dot navigation
function createDots() {
    var dotContainer = document.createElement('div');
    dotContainer.classList.add('dot-container');

    for (var i = 0; i < images.length; i++) {
        var dot = document.createElement('span');
        dot.classList.add('dot');
        dot.dataset.index = i; // Set data-index attribute to correspond with image index
        dot.addEventListener('click', function() {
            clearInterval(slideInterval); // Stop the automatic slideshow
            index = parseInt(this.dataset.index); // Get the index from data-index attribute
            changeBackground(); // Change the background based on the clicked dot
            slideInterval = setInterval(changeBackground, 3000); // Resume slideshow
        });
        dotContainer.appendChild(dot);
    }

    document.querySelector('.home').appendChild(dotContainer);
}

// Change the background image and caption every 3 seconds
slideInterval = setInterval(changeBackground, 3000);

// Function to update the active dot
function updateImageDots() {
    var dots = document.querySelectorAll('.home .dot');
    // Remove 'active' class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    // Add 'active' class to the current image dot
    dots[index].classList.add('active');
}

// Function to initialize the dot navigation
document.addEventListener('DOMContentLoaded', function() {
    createDots();
});


// Move the slideshow container just underneath the captions
function moveSlideshow() {
    var slideshowContainer = document.querySelector('.home .slideshow-container');
    var captionHeight = document.querySelector('.home .caption').offsetHeight;
    slideshowContainer.style.marginTop = captionHeight + 'px';
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    moveSlideshow();
});


//hamburger
function navFunction() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//end of hamburger
 
// Our services slide show. Get the button
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scrollContainer");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const imageWidth = 400; // Width of each image
  let scrollPosition = 0;

  function scrollGallery(offset) {
    scrollPosition += offset * imageWidth;
    // Ensure scrollPosition is within bounds
    scrollPosition = Math.max(0, Math.min(scrollPosition, scrollContainer.scrollWidth - scrollContainer.clientWidth));
    scrollContainer.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  leftArrow.addEventListener("click", function () {
    scrollGallery(-1);
  });

  rightArrow.addEventListener("click", function () {
    scrollGallery(1);
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
  let number = document.getElementById("number").value;
  let date = document.getElementById("date").value;
  let package = document.getElementById("package").value;
  let comment = document.getElementById("comment").value;
 
 
  // Construct the information string
  let information = "<strong>Name:</strong> " + name + "<br><br><strong>Last Name:</strong> " + surname + "<br><br><strong>Email:</strong> " + email + "<br><br><strong>Package:</strong> "+ package +"<br><br><strong>Phone No:</strong> "  + phone + "<br><br><strong>Number of People:</strong> " + number + "<br><br><strong>Arrival date:</strong> " + date + "<br><br><strong>Depature date:</strong> " + date +  "<br><br><strong>Message:</strong> " + comment ;
 
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
//end of booking
 
// Scroll to top button
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
// end of scroll to top
 
 
// contact form
function validateForm() {
  let nameField = document.getElementById("name");
  let nameRegex = /^[a-z ,.'-]+$/i; // Regular expression to match only alphabetic characters
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
 
//Validate Booking Form
function validateName() {  
   let nameField = document.getElementById("name");  
   let nameRegex = /^[A-Za-z\s]+$/; // Regular expression to match alphabetic characters and spacesif
   if (nameRegex.test(nameField.value)) {    
     nameField.style.borderColor = "green";  
    }
    else {    
      nameField.style.borderColor = "red";   }
  }
    function validateEmail() {  
       let emailField = document.getElementById("email");  
       let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for validating email
       if (emailRegex.test(emailField.value)) {    
         emailField.style.borderColor = "green";  
      }
       else {    
        emailField.style.borderColor = "red";  
      }
  }
  function validateSurname() {  
    let surnameField = document.getElementById("surname");  
    let surnameRegex = /^[A-Za-z\s]+$/; // Regular expression to match alphabetic characters and spacesif
    if (surnameRegex.test(surnameField.value)) {    
      surnameField.style.borderColor = "green";  
     }
     else {    
      surnameField.style.borderColor = "red";   }
   }
 
   function validateNumber() {  
    let numberField = document.getElementById("phone");  
    let numberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // Regular expression to match alphabetic characters and spacesif
    if (numberRegex.test(numberField.value)) {    
      numberField.style.borderColor = "green";  
     }
     else {    
      numberField.style.borderColor = "red";   }
   }
 
   //Date picker function
   function dateFunction(){
   var dateToday = new Date();
var dates = $("#date, #datetwo").datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    minDate: dateToday,
    onSelect: function(selectedDate) {
        var option = this.id == "date" ? "minDate" : "maxDate",
            instance = $(this).data("datepicker"),
            date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
        dates.not(this).datepicker("option", option, date);
    }
 
});
}