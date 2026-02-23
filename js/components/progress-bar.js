// Progress Bar / Ring Component
window.ProgressBar = (function() {
  var el = Utils.el;

  // Linear progress bar
  function bar(value, max, colorClass) {
    var pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;
    colorClass = colorClass || '';

    var fill = el('div', {
      className: 'progress-fill ' + colorClass,
      style: { width: pct + '%' },
      role: 'progressbar',
      'aria-valuenow': String(value),
      'aria-valuemin': '0',
      'aria-valuemax': String(max)
    });

    var track = el('div', { className: 'progress-track' }, [fill]);
    return track;
  }

  // Donut / ring chart using canvas
  function ring(options) {
    var value = options.value || 0;       // 0-100
    var size = options.size || 120;
    var thickness = options.thickness || 12;
    var color = options.color || '#1a56db';
    var bgColor = options.bgColor || '#e5e7eb';
    var label = options.label || '';

    var canvas = el('canvas', {
      width: String(size),
      height: String(size),
      style: { width: size + 'px', height: size + 'px' }
    });

    var wrapper = el('div', {
      className: 'chart-container',
      style: { width: size + 'px', height: size + 'px', position: 'relative' }
    }, [
      canvas,
      el('div', {
        style: {
          position: 'absolute',
          inset: '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, [
        el('span', {
          className: 'text-2xl font-bold',
          textContent: value + '%'
        }),
        label ? el('span', {
          className: 'text-xs text-secondary',
          textContent: label
        }) : null
      ])
    ]);

    // Draw on next tick so canvas is in DOM
    setTimeout(function() {
      drawRing(canvas, value, size, thickness, color, bgColor);
    }, 0);

    return wrapper;
  }

  function drawRing(canvas, value, size, thickness, color, bgColor) {
    var ctx = canvas.getContext('2d');
    var dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    var center = size / 2;
    var radius = center - thickness;
    var startAngle = -Math.PI / 2;
    var endAngle = startAngle + (2 * Math.PI * value / 100);

    // Background ring
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.lineWidth = thickness;
    ctx.strokeStyle = bgColor;
    ctx.stroke();

    // Value ring
    if (value > 0) {
      ctx.beginPath();
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.lineWidth = thickness;
      ctx.strokeStyle = color;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }

  return { bar: bar, ring: ring };
})();
