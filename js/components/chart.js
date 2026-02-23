// Canvas-based Charts — line, bar, donut
window.Chart = (function() {

  var defaultColors = ['#1a56db', '#059669', '#d97706', '#dc2626', '#7c3aed', '#0891b2', '#be185d', '#4f46e5'];

  // ===== Bar Chart =====
  function bar(options) {
    var data = options.data || [];         // [{ label, value, color? }]
    var width = options.width || 500;
    var height = options.height || 250;
    var maxValue = options.maxValue || 0;
    var showValues = options.showValues !== false;

    if (maxValue === 0) {
      data.forEach(function(d) { if (d.value > maxValue) maxValue = d.value; });
      if (maxValue === 0) maxValue = 100;
    }

    var canvas = document.createElement('canvas');
    var wrapper = Utils.el('div', { className: 'chart-container' }, [canvas]);

    setTimeout(function() {
      drawBar(canvas, data, width, height, maxValue, showValues);
    }, 0);

    return wrapper;
  }

  function drawBar(canvas, data, width, height, maxValue, showValues) {
    var dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var padding = { top: 20, right: 20, bottom: 40, left: 40 };
    var chartW = width - padding.left - padding.right;
    var chartH = height - padding.top - padding.bottom;
    var barCount = data.length;
    if (barCount === 0) return;

    var gap = 8;
    var barW = Math.min(60, (chartW - gap * (barCount - 1)) / barCount);
    var totalBarsWidth = barW * barCount + gap * (barCount - 1);
    var offsetX = padding.left + (chartW - totalBarsWidth) / 2;

    // Grid lines
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    for (var g = 0; g <= 4; g++) {
      var gy = padding.top + chartH - (chartH * g / 4);
      ctx.beginPath();
      ctx.moveTo(padding.left, gy);
      ctx.lineTo(width - padding.right, gy);
      ctx.stroke();

      // Y-axis labels
      ctx.fillStyle = '#6b7280';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(Math.round(maxValue * g / 4), padding.left - 6, gy + 4);
    }
    ctx.setLineDash([]);

    // Bars
    data.forEach(function(d, i) {
      var x = offsetX + i * (barW + gap);
      var barH = (d.value / maxValue) * chartH;
      var y = padding.top + chartH - barH;

      // Bar
      ctx.fillStyle = d.color || defaultColors[i % defaultColors.length];
      var r = 4;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + barW - r, y);
      ctx.quadraticCurveTo(x + barW, y, x + barW, y + r);
      ctx.lineTo(x + barW, padding.top + chartH);
      ctx.lineTo(x, padding.top + chartH);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.fill();

      // Value on top
      if (showValues) {
        ctx.fillStyle = '#374151';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(d.value + (d.suffix || ''), x + barW / 2, y - 6);
      }

      // Label below
      ctx.fillStyle = '#6b7280';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      // Truncate long labels
      var lbl = d.label || '';
      if (lbl.length > 10) lbl = lbl.substring(0, 9) + '...';
      ctx.fillText(lbl, x + barW / 2, height - padding.bottom + 16);
    });
  }

  // ===== Line Chart =====
  function line(options) {
    var datasets = options.datasets || [];  // [{ label, data: [values], color }]
    var labels = options.labels || [];       // x-axis labels
    var width = options.width || 500;
    var height = options.height || 250;
    var maxValue = options.maxValue || 0;

    if (maxValue === 0) {
      datasets.forEach(function(ds) {
        ds.data.forEach(function(v) { if (v > maxValue) maxValue = v; });
      });
      if (maxValue === 0) maxValue = 100;
    }

    var canvas = document.createElement('canvas');
    var wrapper = Utils.el('div', { className: 'chart-container' }, [canvas]);

    setTimeout(function() {
      drawLine(canvas, datasets, labels, width, height, maxValue);
    }, 0);

    return wrapper;
  }

  function drawLine(canvas, datasets, labels, width, height, maxValue) {
    var dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var padding = { top: 20, right: 20, bottom: 40, left: 40 };
    var chartW = width - padding.left - padding.right;
    var chartH = height - padding.top - padding.bottom;

    // Grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    for (var g = 0; g <= 4; g++) {
      var gy = padding.top + chartH - (chartH * g / 4);
      ctx.beginPath();
      ctx.moveTo(padding.left, gy);
      ctx.lineTo(width - padding.right, gy);
      ctx.stroke();

      ctx.fillStyle = '#6b7280';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(Math.round(maxValue * g / 4), padding.left - 6, gy + 4);
    }
    ctx.setLineDash([]);

    // X-axis labels
    var pointCount = labels.length || (datasets.length > 0 ? datasets[0].data.length : 0);
    if (pointCount < 2) pointCount = 2;

    for (var li = 0; li < labels.length; li++) {
      var lx = padding.left + (chartW * li / (pointCount - 1));
      ctx.fillStyle = '#6b7280';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(labels[li], lx, height - padding.bottom + 16);
    }

    // Lines
    datasets.forEach(function(ds, di) {
      var color = ds.color || defaultColors[di % defaultColors.length];
      var pts = ds.data;
      if (pts.length === 0) return;
      var n = pts.length;

      // Fill area
      ctx.beginPath();
      ctx.moveTo(padding.left, padding.top + chartH);
      for (var i = 0; i < n; i++) {
        var x = padding.left + (chartW * i / (n - 1 || 1));
        var y = padding.top + chartH - (pts[i] / maxValue * chartH);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(padding.left + chartW * (n - 1) / (n - 1 || 1), padding.top + chartH);
      ctx.closePath();
      ctx.fillStyle = color + '15';
      ctx.fill();

      // Line
      ctx.beginPath();
      for (var j = 0; j < n; j++) {
        var px = padding.left + (chartW * j / (n - 1 || 1));
        var py = padding.top + chartH - (pts[j] / maxValue * chartH);
        if (j === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.lineJoin = 'round';
      ctx.stroke();

      // Dots
      for (var k = 0; k < n; k++) {
        var dx = padding.left + (chartW * k / (n - 1 || 1));
        var dy = padding.top + chartH - (pts[k] / maxValue * chartH);
        ctx.beginPath();
        ctx.arc(dx, dy, 4, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(dx, dy, 2, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }
    });
  }

  // ===== Donut Chart =====
  function donut(options) {
    var segments = options.segments || [];  // [{ label, value, color }]
    var size = options.size || 180;
    var thickness = options.thickness || 30;
    var centerLabel = options.centerLabel || '';
    var centerValue = options.centerValue || '';

    var canvas = document.createElement('canvas');
    var wrapper = Utils.el('div', {
      className: 'chart-container',
      style: { width: size + 'px', height: size + 'px', position: 'relative' }
    }, [
      canvas,
      el_center(centerValue, centerLabel)
    ]);

    setTimeout(function() {
      drawDonut(canvas, segments, size, thickness);
    }, 0);

    return wrapper;
  }

  function el_center(value, label) {
    return Utils.el('div', {
      style: {
        position: 'absolute',
        inset: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }
    }, [
      Utils.el('span', { className: 'text-2xl font-bold', textContent: value }),
      label ? Utils.el('span', { className: 'text-xs text-secondary', textContent: label }) : null
    ]);
  }

  function drawDonut(canvas, segments, size, thickness) {
    var dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    var ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    var center = size / 2;
    var radius = center - thickness / 2;
    var total = 0;
    segments.forEach(function(s) { total += s.value; });

    if (total === 0) {
      // Empty state
      ctx.beginPath();
      ctx.arc(center, center, radius, 0, 2 * Math.PI);
      ctx.lineWidth = thickness;
      ctx.strokeStyle = '#e5e7eb';
      ctx.stroke();
      return;
    }

    var startAngle = -Math.PI / 2;
    segments.forEach(function(seg, i) {
      var sweep = (seg.value / total) * 2 * Math.PI;
      ctx.beginPath();
      ctx.arc(center, center, radius, startAngle, startAngle + sweep);
      ctx.lineWidth = thickness;
      ctx.strokeStyle = seg.color || defaultColors[i % defaultColors.length];
      ctx.lineCap = 'butt';
      ctx.stroke();
      startAngle += sweep;
    });
  }

  return { bar: bar, line: line, donut: donut };
})();
