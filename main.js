document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Core Team accordion — swap the button label when opened/closed
  var teamToggle = document.querySelector('.team-toggle');
  if (teamToggle) {
    var label = teamToggle.querySelector('.summary-text');
    teamToggle.addEventListener('toggle', function () {
      if (label) {
        label.textContent = teamToggle.open ? 'Hide Our Team' : 'View Our Team';
      }
    });
  }
});
