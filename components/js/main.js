// Header
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
        header.classList.remove("header-transparent");
      } else {
        header.classList.remove("header-scrolled");
        header.classList.add("header-transparent");
      }
    });
});


// Navbar Active Status
document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        // Remove the 'active' class from all links
        navLinks.forEach(function (navLink) {
          navLink.classList.remove("active");
        });
  
        // Add the 'active' class to the clicked link
        link.classList.add("active");
  
        // Scroll to the section corresponding to the clicked link
        var targetId = link.getAttribute("href").substring(1);
        var targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
});
  
  
// Hero Section Effect
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".typed", {
      strings: [
        "Associate Software Engineer",
        "Undergraduate",
        "Designer",
        "Developer",
      ],
      typeSpeed: 120, // typing speed in milliseconds
      backSpeed: 40, // backspacing speed in milliseconds
      loop: true, // loop the animation
    });
});


// Download Button 
document.getElementById("resume-btn").addEventListener("click", function() {
    // shareable link of CV file
    var downloadLink = 'https://drive.google.com/drive/folders/1TApf44Eqc_Rau7qt0DHy5ZPyUyM_Rz9S?usp=sharing';
    window.open(downloadLink, '_blank');
});


// Formspree Form  https://formspree.io/f/xrgwwegb
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    var form = e.target;
    var formData = new FormData(form);

    // Formspree endpoint
    var formAction = 'https://formspree.io/f/xrgwwegb';

    fetch(formAction, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Handle success with Bootstrap Toast
            showToast('Error sending message. Please try again.', 'bg-danger');
        } else {
            // Handle error with Bootstrap Toast
        
            showToast('Your message has been sent. Thank you!', 'bg-success');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle error with Bootstrap Toast
        showToast('Error sending message. Please try again.', 'bg-danger');
    });
});

function showToast() {
    var toastEl = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastEl);
    toast.show();
  }