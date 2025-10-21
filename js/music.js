document.addEventListener('DOMContentLoaded', function() {
  var playBtn = document.getElementById('playBtn');
  var audio = document.getElementById('myAudio'); // use the <audio> element

  playBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (audio.paused) {
      audio.play().catch(err => console.log('Audio play failed:', err));
    } else {
      audio.pause();
    }
  });
});
