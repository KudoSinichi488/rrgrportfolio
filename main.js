document.addEventListener("DOMContentLoaded", function() {

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav");

  if(hamburger && navMenu){
    hamburger.addEventListener("click", function(){
      hamburger.classList.toggle("open"); // animate hamburger
      navMenu.classList.toggle("active"); // show nav
    });

    // Close menu on link click
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if(window.innerWidth <= 900){  // only on mobile
          hamburger.classList.remove("open");
          navMenu.classList.remove("active");
        }
      });
    });
  }

});

  /* =========================
     Smooth Scroll for all anchor links
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

  /* =========================
     EmailJS Get in Touch Form
  ========================= */
  emailjs.init("nkR6KMxld08gdFhIo"); // public key

  const getTouchForm = document.getElementById("get-touch-form");
  if(getTouchForm){
    getTouchForm.addEventListener("submit", function(event){
      event.preventDefault(); // prevent reload

      // Disable button to prevent multiple submits
      const btn = getTouchForm.querySelector("button");
      btn.disabled = true;
      btn.textContent = "Sending...";

      emailjs.sendForm('service_qflrzel', 'template_mdp6ilz', this)
        .then(function(){
          alert("Message sent successfully!");
          getTouchForm.reset();
          btn.disabled = false;
          btn.textContent = "Send Message";
        }, function(error){
          alert("Failed to send message. Try again.");
          console.error(error);
          btn.disabled = false;
          btn.textContent = "Send Message";
        });
    });
  }

});
