// Toast Notifications Component
window.Toast = (function() {
  var container = null;

  function ensureContainer() {
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.setAttribute('role', 'status');
      container.setAttribute('aria-live', 'polite');
      document.body.appendChild(container);
    }
    return container;
  }

  function show(message, type, duration) {
    type = type || 'info';
    duration = duration || 3000;

    var c = ensureContainer();

    var toast = Utils.el('div', { className: 'toast ' + type }, [
      Utils.el('span', { textContent: message }),
      Utils.el('button', {
        className: 'toast-close',
        'aria-label': 'Close',
        innerHTML: Utils.icons.x,
        onClick: function() { dismiss(toast); }
      })
    ]);

    c.appendChild(toast);

    if (duration > 0) {
      setTimeout(function() { dismiss(toast); }, duration);
    }

    return toast;
  }

  function dismiss(toast) {
    if (!toast || !toast.parentNode) return;
    toast.classList.add('removing');
    setTimeout(function() {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 200);
  }

  function success(msg) { return show(msg, 'success'); }
  function error(msg) { return show(msg, 'error'); }
  function warning(msg) { return show(msg, 'warning'); }

  return { show: show, success: success, error: error, warning: warning, dismiss: dismiss };
})();
