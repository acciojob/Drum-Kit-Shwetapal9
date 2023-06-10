//your JS code here. If required.
function playSound(event) {
      const keyCode = event.keyCode;
      const keyElement = document.querySelector(`.key[data-key="${keyCode}"]`);
      if (!keyElement) return;

      const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
      if (!audioElement) return; 

      audioElement.currentTime = 0; // Rewind audio to the start
      audioElement.play();
      keyElement.classList.add('playing');
    }

    function removeTransition(event) {
      if (event.propertyName !== 'transform') return; 
      this.classList.remove('playing');
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
    
 