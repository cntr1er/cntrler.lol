const overlay = document.getElementById('enter-overlay');
const mainContent = document.getElementById('main-content');
const video = document.getElementById('bg-video');

// Typewriter
const typewriterEl = document.getElementById('typewriter');
const text = "Click Anywhere To Enter";
let i = 0;
function typeWriter() {
  typewriterEl.textContent = text.slice(0, i);
  i++;
  if(i <= text.length) setTimeout(typeWriter, 100);
  else setTimeout(() => { i = 0; typeWriter(); }, 1000);
}
typeWriter();

// Start experience on click
overlay.addEventListener('click', async () => {
  overlay.style.opacity = '0';
  overlay.style.pointerEvents = 'none';
  setTimeout(() => overlay.style.display = 'none', 1000);

  mainContent.style.display = 'block';

  try {
    video.muted = false; // unmute video after user interaction
    await video.play();
    console.log("Video playing");
  } catch(err) {
    console.error("Video play failed:", err);
  }

const cryptoIcons = document.querySelectorAll('.crypto-icon');

cryptoIcons.forEach(icon => {
  const tooltip = icon.querySelector('.tooltip');
  
  icon.addEventListener('click', async () => {
    const address = icon.getAttribute('data-address');
    try {
      await navigator.clipboard.writeText(address);

      // Change tooltip text to "Copied Address!"
      tooltip.textContent = "Copied Address!";
      
      // Revert tooltip text after 1.5 seconds
      setTimeout(() => {
        tooltip.textContent = "Copy Address";
      }, 1500);
    } catch(err) {
      console.error("Failed to copy:", err);
    }
  });
})});