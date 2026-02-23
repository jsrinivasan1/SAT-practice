// Study Resources Page
window.ResourcesPage = (function() {
  var el = Utils.el;
  var activeSection = 'strategies';

  function render(container) {
    var page = el('div', { className: 'page' });
    var wrap = el('div', { className: 'container' });

    wrap.appendChild(el('div', { className: 'mb-6' }, [
      el('h1', { className: 'text-3xl font-bold mb-2', textContent: 'Study Resources' }),
      el('p', { className: 'text-secondary text-lg', textContent: 'Review key concepts, formulas, and strategies for the SAT.' })
    ]));

    var layout = el('div', { className: 'flex gap-6 resource-layout' });

    // Navigation sidebar
    var nav = el('div', { className: 'resource-nav' });
    var contentArea = el('div', { className: 'resource-content flex-1', id: 'resource-content' });

    var sections = [
      { key: 'strategies', label: 'Test Strategies' },
      { key: 'grammar', label: 'Grammar Rules' },
      { key: 'math-algebra', label: 'Algebra' },
      { key: 'math-advanced', label: 'Advanced Math' },
      { key: 'math-data', label: 'Data Analysis' },
      { key: 'math-geometry', label: 'Geometry & Trig' },
      { key: 'formulas', label: 'Formula Sheet' },
      { key: 'vocabulary', label: 'SAT Vocabulary' },
      { key: 'tips', label: 'Test Day Tips' }
    ];

    sections.forEach(function(sec) {
      var item = el('div', {
        className: 'resource-nav-item' + (sec.key === activeSection ? ' active' : ''),
        textContent: sec.label,
        onClick: function() {
          activeSection = sec.key;
          nav.querySelectorAll('.resource-nav-item').forEach(function(n) { n.classList.remove('active'); });
          this.classList.add('active');
          renderContent(contentArea, sec.key);
        }
      });
      nav.appendChild(item);
    });

    layout.appendChild(nav);
    layout.appendChild(contentArea);
    wrap.appendChild(layout);
    page.appendChild(wrap);
    container.appendChild(page);

    renderContent(contentArea, activeSection);
  }

  function renderContent(container, key) {
    container.innerHTML = '';

    if (!window.ResourcesData || !ResourcesData[key]) {
      container.appendChild(el('div', { className: 'empty-state', textContent: 'Content coming soon.' }));
      return;
    }

    var data = ResourcesData[key];

    if (data.title) {
      container.appendChild(el('h3', { textContent: data.title }));
    }

    if (data.intro) {
      container.appendChild(el('p', { textContent: data.intro }));
    }

    if (data.sections) {
      data.sections.forEach(function(section) {
        if (section.heading) {
          container.appendChild(el('h4', { textContent: section.heading }));
        }
        if (section.content) {
          section.content.forEach(function(item) {
            if (typeof item === 'string') {
              container.appendChild(el('p', { textContent: item }));
            } else if (item.type === 'list') {
              var list = el(item.ordered ? 'ol' : 'ul');
              item.items.forEach(function(li) {
                list.appendChild(el('li', { innerHTML: li }));
              });
              container.appendChild(list);
            } else if (item.type === 'formula') {
              container.appendChild(el('div', { className: 'formula-box', textContent: item.text }));
            } else if (item.type === 'vocab') {
              var vocabList = el('div', { className: 'vocab-list' });
              item.words.forEach(function(w) {
                vocabList.appendChild(el('div', { className: 'vocab-item' }, [
                  el('div', { className: 'vocab-word', textContent: w.word }),
                  el('div', { className: 'vocab-def', textContent: w.definition })
                ]));
              });
              container.appendChild(vocabList);
            } else if (item.type === 'tip') {
              container.appendChild(el('div', {
                className: 'p-4 mb-3',
                style: {
                  background: 'var(--color-primary-bg)',
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: '4px solid var(--color-primary)'
                }
              }, [
                el('strong', { textContent: item.title || 'Tip: ' }),
                el('span', { textContent: item.text })
              ]));
            }
          });
        }
      });
    }
  }

  return { render: render };
})();
