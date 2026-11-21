/**
 * js/core/router.js
 */
import { Dashboard } from '../modules/dashboard.js';
import { PDV } from '../modules/pdv.js';
import { Estoque } from '../modules/estoque.js';
import { Funil } from '../modules/funil.js';
import './db.js';

const routes = {
  '#dashboard': () => {
    const el = document.querySelector('[data-view="dashboard"]');
    if (el) el.innerHTML = Dashboard.render();
  },
  '#pdv': () => {
    const el = document.querySelector('[data-view="pdv"]');
    if (el) el.innerHTML = PDV.render();
  },
  '#estoque': () => {
    const el = document.querySelector('[data-view="estoque"]');
    if (el) el.innerHTML = Estoque.render();
  },
  '#funil': () => {
    const el = document.querySelector('[data-view="funil"]');
    if (el) el.innerHTML = Funil.render();
  }
};

function router() {
  const hash = window.location.hash || '#dashboard';
  const viewKey = hash.replace('#', '') || 'dashboard';

  // Oculta todas as panes
  document.querySelectorAll('.view-pane').forEach(pane => {
    pane.style.display = 'none';
  });

  // Exibe a ativa
  const activePane = document.querySelector(`[data-view="${viewKey}"]`);
  if (activePane) {
    activePane.style.display = 'block';
    const renderFn = routes[hash] || routes['#dashboard'];
    renderFn();
  } else {
    // Fallback para dashboard
    window.location.hash = '#dashboard';
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', () => {
  if (!window.location.hash) {
    window.location.hash = '#dashboard';
  } else {
    router();
  }
});
