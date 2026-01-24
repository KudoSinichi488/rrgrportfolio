// HAMBURGER
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if(window.innerWidth <= 900){
    if(currentScroll>lastScroll){
      header.style.transform="translateY(-100%)"; // hide header
    }else{
      header.style.transform="translateY(0)"; // show header
    }
    lastScroll=currentScroll;
  }else{
    header.style.transform="translateY(0)";
  }
});

// Hamburger toggle
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// SUPABASE (CDN version)
const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if(!name || !email || !message) return;

  const { error } = await supabase
    .from("portfolio_comments")
    .insert([{ user_name: name, user_email: email, content: message }]);

  if(error){
    alert("Error sending message");
  } else {
    alert("Message sent!");
    contactForm.reset();
    loadComments();
  }
});

// Load comments
async function loadComments(){
  const { data, error } = await supabase
    .from("portfolio_comments")
    .select("*")
    .order("created_at", { ascending:false });

  const commentsList = document.getElementById("commentsList");
  commentsList.innerHTML = "";

  if(data && !error){
    data.forEach(comment=>{
      const card = document.createElement("div");
      card.className="comment-card";
      card.innerHTML = `<h4>${comment.user_name}</h4><p>${comment.content}</p>`;
      commentsList.appendChild(card);
    });
  }
}

// Load on page start
loadComments();

function openCertificate(img){
  // Create popup container
  const popup = document.createElement('div');
  popup.classList.add('certificate-popup');

  // Create image
  const newImg = document.createElement('img');
  newImg.src = img.src;
  popup.appendChild(newImg);

  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.innerText = 'X';
  closeBtn.onclick = () => document.body.removeChild(popup);
  popup.appendChild(closeBtn);

  // Append popup to body
  document.body.appendChild(popup);
}

document.addEventListener("DOMContentLoaded", function() {
document.addEventListener("DOMContentLoaded", function() {

  
  // Initialize EmailJS
  emailjs.init("nkR6KMxld08gdFhIo"); // your Public Key

  // Handle form submission
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
})
