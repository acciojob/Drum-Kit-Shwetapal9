//your JS code here. If required.
function playSound(event) {
      const keyCode = event.keyCode || event.which;
      const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
      if (!keyElement) return; // Ignore unrecognized keys

      const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
      if (!audioElement) return; // Ignore keys without associated audio

      audioElement.currentTime = 0; // Rewind audio to the start
      audioElement.play();
      keyElement.classList.add('playing');
    }

    function removeTransition(event) {
      if (event.propertyName !== 'transform') return; // Skip if it's not a transform-related transition
      this.classList.remove('playing');
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
  </script>
  
  <!-- Audio files -->
  <audio data-key="65" src="sounds/clap.wav"></audio>
  <audio data-key="83" src="sounds/hihat.wav"></audio>
  <audio data-key="68" src="sounds/kick.wav"></audio>
  <audio data-key="70" src="sounds/openhat.wav"></audio>
  <audio data-key="71" src="sounds/boom.wav"></audio>
  <audio data-key="72" src="sounds/ride.wav"></audio>
  <audio data-key="74" src="sounds/snare.wav"></audio>
  <audio data-key="75" src="sounds/tom.wav"></audio>
  <audio data-key="76" src="sounds/tink.wav"></audio>