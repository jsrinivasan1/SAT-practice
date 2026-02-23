// Hash-based SPA Router — works with file:// protocol
window.Router = (function() {
  const routes = {};
  let currentRoute = null;
  let contentEl = null;

  function register(path, handler) {
    routes[path] = handler;
  }

  function navigate(path) {
    window.location.hash = '#' + path;
  }

  function getCurrentPath() {
    const hash = window.location.hash.slice(1) || '/';
    // Strip query params for route matching, but keep them accessible
    return hash.split('?')[0];
  }

  function getQueryParams() {
    const hash = window.location.hash.slice(1) || '/';
    const parts = hash.split('?');
    if (parts.length < 2) return {};
    const params = {};
    parts[1].split('&').forEach(function(pair) {
      const [key, value] = pair.split('=');
      if (key) params[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });
    return params;
  }

  function handleRoute() {
    const path = getCurrentPath();
    const params = getQueryParams();

    if (!contentEl) {
      contentEl = document.getElementById('app-content');
    }

    if (!contentEl) return;

    // Find matching route
    const handler = routes[path];
    if (handler) {
      if (currentRoute !== path) {
        currentRoute = path;
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(function(link) {
          const href = link.getAttribute('href');
          if (href) {
            const linkPath = href.replace('#', '');
            link.classList.toggle('active', linkPath === path);
          }
        });
      }
      contentEl.innerHTML = '';
      handler(contentEl, params);
    } else {
      // 404 - redirect to home
      navigate('/');
    }
  }

  function init() {
    window.addEventListener('hashchange', handleRoute);
    // Initial route
    if (!window.location.hash) {
      window.location.hash = '#/';
    }
    handleRoute();
  }

  return {
    register: register,
    navigate: navigate,
    getCurrentPath: getCurrentPath,
    getQueryParams: getQueryParams,
    init: init
  };
})();
