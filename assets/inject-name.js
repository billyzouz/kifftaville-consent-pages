/* KiffTaVille — Inject parental consent name from URL query.
 * RGPD : aucune donnée n'est envoyée. On lit juste ?name= côté client.
 * Anti-XSS : textContent uniquement, jamais innerHTML. */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var params = new URLSearchParams(window.location.search);
    var raw = params.get('name');
    var name = raw && raw.trim() ? raw.trim().slice(0, 50) : 'votre enfant';
    var nodes = document.querySelectorAll('[data-inject-name]');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = name;
    }
  });
})();
