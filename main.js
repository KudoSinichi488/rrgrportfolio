// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (window.innerWidth <= 900) {
    if (currentScroll > lastScroll) {
      header.style.transform = "translateY(-100%)"; // hide header
    } else {
      header.style.transform = "translateY(0)"; // show header
    }
    lastScroll = currentScroll;
  } else {
    header.style.transform = "translateY(0)";
  }
});

// Hamburger toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function() {
  // Initialize EmailJS
  emailjs.init("nkR6KMxld08gdFhIo"); // your Public Key

  // Contact form submission
  const getTouchForm = document.getElementById("get-touch-form");
  if(getTouchForm){
    getTouchForm.addEventListener("submit", function(event){
      event.preventDefault(); // prevent default page reload

      emailjs.sendForm('service_e53j7x9', 'template_mdp6ilz', this)
        .then(function(){
          alert("Message sent successfully!");
          getTouchForm.reset();
        }, function(error){
          alert("Failed to send message. Try again.");
          console.error(error);
        });
    });
  }
});
