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