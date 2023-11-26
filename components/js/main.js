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
  

// Hero Section Effect
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typed', {
        strings: ["Undergraduate", "Aspiring Software Engineer", "Designer", "Developer"],
        typeSpeed: 120, // typing speed in milliseconds
        backSpeed: 40, // backspacing speed in milliseconds
        loop: true // loop the animation
    });
});


// Download Button 
document.getElementById("resume-btn").addEventListener("click", function() {
    // shareable link of CV file
    var downloadLink = 'https://drive.google.com/file/d/1PRfJwKt6VeU1b8u3qZaefty-J9BDy9RO/view?usp=sharing';
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