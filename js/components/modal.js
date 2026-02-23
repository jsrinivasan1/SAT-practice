// Modal Dialog Component
window.Modal = (function() {
  var el = Utils.el;

  function show(options) {
    var title = options.title || '';
    var body = options.body || '';
    var confirmText = options.confirmText || 'OK';
    var cancelText = options.cancelText || 'Cancel';
    var onConfirm = options.onConfirm || function() {};
    var onCancel = options.onCancel || function() {};
    var showCancel = options.showCancel !== false;
    var confirmClass = options.confirmClass || 'btn-primary';

    function close() {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
      document.removeEventListener('keydown', handleKey);
    }

    function handleKey(e) {
      if (e.key === 'Escape') {
        close();
        onCancel();
      }
    }

    var footer = el('div', { className: 'modal-footer' });
    if (showCancel) {
      footer.appendChild(el('button', {
        className: 'btn btn-secondary',
        textContent: cancelText,
        onClick: function() { close(); onCancel(); }
      }));
    }
    footer.appendChild(el('button', {
      className: 'btn ' + confirmClass,
      textContent: confirmText,
      onClick: function() { close(); onConfirm(); }
    }));

    var bodyContent;
    if (typeof body === 'string') {
      bodyContent = el('div', { className: 'modal-body', innerHTML: body });
    } else {
      bodyContent = el('div', { className: 'modal-body' }, [body]);
    }

    var modal = el('div', { className: 'modal', role: 'dialog', 'aria-modal': 'true', 'aria-label': title }, [
      el('div', { className: 'modal-header' }, [
        el('h3', { className: 'modal-title', textContent: title }),
        el('button', {
          className: 'modal-close btn-icon',
          'aria-label': 'Close',
          innerHTML: Utils.icons.x,
          onClick: function() { close(); onCancel(); }
        })
      ]),
      bodyContent,
      footer
    ]);

    var overlay = el('div', {
      className: 'modal-overlay',
      onClick: function(e) {
        if (e.target === overlay) { close(); onCancel(); }
      }
    }, [modal]);

    document.body.appendChild(overlay);
    document.addEventListener('keydown', handleKey);

    // Focus first button
    var btn = modal.querySelector('.btn');
    if (btn) btn.focus();

    return { close: close };
  }

  function confirm(title, message, onConfirm) {
    return show({
      title: title,
      body: '<p>' + message + '</p>',
      confirmText: 'Confirm',
      confirmClass: 'btn-primary',
      onConfirm: onConfirm
    });
  }

  return { show: show, confirm: confirm };
})();
