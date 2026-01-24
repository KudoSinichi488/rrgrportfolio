document.addEventListener("DOMContentLoaded", function() {

  /* =========================
     Hamburger Menu Toggle
  ========================= */
  const hamburger = document.getElementById("hamburger"); // your fixed-hamburger
  const navMenu = document.getElementById("nav-menu");   // your navigation menu

  if(hamburger && navMenu){
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("open"); // animate hamburger to X
      navMenu.classList.toggle("active"); // show/hide menu
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll("#nav-menu a");
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        hamburger.classList.remove("open");
        navMenu.classList.remove("active");
      });
    });
  }

  /* =========================
     Initialize EmailJS
  ========================= */
  emailjs.init("nkR6KMxld08gdFhIo"); // your Public Key

  /* =========================
     Get in Touch Form
  ========================= */
  const getTouchForm = document.getElementById("get-touch-form");
  if(getTouchForm){
    getTouchForm.addEventListener("submit", function(event){
      event.preventDefault(); // prevent page reload

      emailjs.sendForm('service_qflrzel', 'template_mdp6ilz', this)
        .then(function(){
          alert("Message sent successfully!");
          getTouchForm.reset();
        }, function(error){
          alert("Failed to send message. Try again.");
          console.error(error);
        });
    });
  }

  /* =========================
     Smooth Scroll for links
  ========================= */
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener("click", function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if(target){
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
