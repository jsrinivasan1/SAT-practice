// Countdown Timer Component
window.Timer = (function() {

  function create(options) {
    var totalSeconds = options.seconds || 0;
    var onTick = options.onTick || function() {};
    var onComplete = options.onComplete || function() {};
    var remaining = totalSeconds;
    var interval = null;
    var paused = false;

    var display = Utils.el('div', {
      className: 'timer-display',
      textContent: Utils.formatTime(remaining),
      'aria-live': 'polite',
      'aria-label': 'Time remaining'
    });

    function updateDisplay() {
      display.textContent = Utils.formatTime(remaining);
      // Color warnings
      if (remaining <= 60) {
        display.className = 'timer-display danger';
      } else if (remaining <= 300) {
        display.className = 'timer-display warning';
      } else {
        display.className = 'timer-display';
      }
    }

    function start() {
      if (interval) return;
      paused = false;
      interval = setInterval(function() {
        if (!paused) {
          remaining--;
          updateDisplay();
          onTick(remaining);
          if (remaining <= 0) {
            stop();
            onComplete();
          }
        }
      }, 1000);
    }

    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }

    function pause() {
      paused = true;
    }

    function resume() {
      paused = false;
    }

    function getRemaining() {
      return remaining;
    }

    function setRemaining(s) {
      remaining = s;
      updateDisplay();
    }

    function destroy() {
      stop();
    }

    updateDisplay();

    return {
      el: display,
      start: start,
      stop: stop,
      pause: pause,
      resume: resume,
      getRemaining: getRemaining,
      setRemaining: setRemaining,
      destroy: destroy
    };
  }

  return { create: create };
})();
