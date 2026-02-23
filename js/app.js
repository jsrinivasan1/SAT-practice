// App initialization
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize question bank
    QuestionBank.init();

    // Render navbar
    var appContainer = document.querySelector('.app-container');
    appContainer.insertBefore(Navbar.render(), appContainer.firstChild);

    // Register routes
    Router.register('/', function(container) { HomePage.render(container); });
    Router.register('/practice', function(container, params) { PracticePage.render(container, params); });
    Router.register('/test', function(container, params) { TestPage.render(container, params); });
    Router.register('/progress', function(container) { ProgressPage.render(container); });
    Router.register('/resources', function(container) { ResourcesPage.render(container); });
    Router.register('/review', function(container, params) { ReviewPage.render(container, params); });

    // Start router
    Router.init();

    // Update streak on load
    Storage.updateStreak();
  });
})();
