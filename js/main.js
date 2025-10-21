const overlay = document.getElementById('enter-overlay');
const mainContent = document.getElementById('main-content');
const video = document.getElementById('bg-video');

// Typewriter effect
const typewriterEl = document.getElementById('typewriter');
const text = "Click Anywhere To Enter";
let i = 0;

function typeWriter() {
  typewriterEl.textContent = text.slice(0, i);
  i++;
  if (i <= text.length) {
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => { i = 0; typeWriter(); }, 1000);
  }
}
typeWriter();

// Start experience on click
overlay.addEventListener('click', async () => {
  // Fade out overlay
  overlay.style.opacity = '0';
  overlay.style.pointerEvents = 'none';
  setTimeout(() => overlay.style.display = 'none', 1000);

  // Show main content
  mainContent.style.display = 'block';

  // Play video with audio
  try {
    video.muted = false; // unmute after user interaction
    await video.play();
    console.log("Video playing");
  } catch (err) {
    console.error("Video play failed:", err);
  }

  // Initialize crypto icons copy functionality
  const cryptoIcons = document.querySelectorAll('.crypto-icon');

  cryptoIcons.forEach(icon => {
    const tooltip = icon.querySelector('.tooltip');

    icon.addEventListener('click', async (e) => {
      e.stopPropagation(); // prevent triggering overlay click
      const address = icon.getAttribute('data-address');
      try {
        await navigator.clipboard.writeText(address);
        tooltip.textContent = "Copied Address!";
        setTimeout(() => {
          tooltip.textContent = "Copy Address";
        }, 1500);
      } catch (err) {
        console.error("Failed to copy:", err);
        tooltip.textContent = "Copy Failed!";
        setTimeout(() => {
          tooltip.textContent = "Copy Address";
        }, 1500);
      }
    });

    // Optional: show tooltip on hover
    icon.addEventListener('mouseenter', () => {
      tooltip.style.opacity = '1';
    });
    icon.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
    });
  });
});
