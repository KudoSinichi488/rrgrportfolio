// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (window.innerWidth <= 900) {
    header.style.transform = currentScroll > lastScroll ? "translateY(-100%)" : "translateY(0)";
    lastScroll = currentScroll;
  } else {
    header.style.transform = "translateY(0)";
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// ===== EMAILJS INIT =====
document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("nkR6KMxld08gdFhIo"); // your Public Key

  const getTouchForm = document.getElementById("get-touch-form");
  if(getTouchForm){
    getTouchForm.addEventListener("submit", function(event){
      event.preventDefault();

      const form = this;
      const senderName = form.name.value.trim();
      const senderEmail = form.email.value.trim();
      const senderMessage = form.message.value.trim();

      // Send message to Rex
      emailjs.sendForm('service_qflrzel', 'template_mdp6ilz', form)
        .then(function(){
          console.log("Message sent to Rex!");

          // Send auto-reply to sender
          emailjs.send('service_qflrzel', 'template_7xswrfc', {
            email: senderEmail,   // {{email}}
            name: senderName,     // {{name}}
            title: senderMessage  // {{message}}
          })
          .then(function(){
            console.log("Auto-reply sent to sender.");
          })
          .catch(function(error){
            console.error("Auto-reply error:", error);
          })
          .finally(function(){
            // Alert user only once, regardless of auto-reply success
            alert("Message sent successfully! You will receive an auto-reply shortly.");
            form.reset();
          });

        })
        .catch(function(error){
          alert("Failed to send message. Try again.");
          console.error("Send to Rex error:", error);
        });
    });
  }
});


const video = document.getElementById("dancingVideo");
const muteBtn = document.getElementById("muteBtn");

muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.textContent = video.muted ? "🔇" : "🔊";
});
