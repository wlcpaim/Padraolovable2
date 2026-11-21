/* js/core/router.js */
import { renderDashboard } from '../modules/dashboard.js';
import { renderPDV } from '../modules/pdv.js';

const routes = {
  '#dashboard': renderDashboard,
  '#pdv': renderPDV,
  '#': renderDashboard
};

function router() {
  const hash = window.location.hash || '#';
  const content = document.getElementById('content');
  const view = routes[hash] || renderDashboard;
  
  content.innerHTML = '<div class="animate-pulse">Carregando...</div>';
  view().then(html => content.innerHTML = html);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
lucide.createIcons();
