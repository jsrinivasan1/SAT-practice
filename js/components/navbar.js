// Navigation Bar Component
window.Navbar = (function() {
  var el = Utils.el;

  function render() {
    var nav = el('nav', { className: 'navbar', role: 'navigation', 'aria-label': 'Main navigation' }, [
      el('div', { className: 'container' }, [
        el('a', { className: 'navbar-brand', href: '#/' }, [
          el('span', { innerHTML: '<svg viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="6" fill="#1a56db"/><text x="14" y="19" text-anchor="middle" fill="white" font-size="14" font-weight="bold" font-family="sans-serif">S</text></svg>' }),
          'SAT Study'
        ]),
        el('button', {
          className: 'navbar-toggle btn-icon',
          'aria-label': 'Toggle navigation',
          'aria-expanded': 'false',
          onClick: function() {
            var navList = document.getElementById('navbar-nav');
            var open = navList.classList.toggle('open');
            this.setAttribute('aria-expanded', String(open));
          }
        }, [
          Utils.icon('menu', 24)
        ]),
        el('div', { className: 'navbar-nav', id: 'navbar-nav' }, [
          navLink('#/', 'home', 'Dashboard'),
          navLink('#/practice', 'practice', 'Practice'),
          navLink('#/test', 'test', 'Tests'),
          navLink('#/progress', 'progress', 'Progress'),
          navLink('#/resources', 'resources', 'Resources')
        ])
      ])
    ]);

    return nav;
  }

  function navLink(href, iconName, label) {
    var link = el('a', {
      className: 'nav-link',
      href: href,
      onClick: function() {
        // Close mobile menu on click
        var navList = document.getElementById('navbar-nav');
        if (navList) navList.classList.remove('open');
      }
    }, [
      Utils.icon(iconName, 18),
      label
    ]);

    // Set active based on current hash
    var currentPath = Router.getCurrentPath();
    var linkPath = href.replace('#', '');
    if (currentPath === linkPath) {
      link.classList.add('active');
    }

    return link;
  }

  return { render: render };
})();
