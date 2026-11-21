/**
 * js/core/router.js
 */
import { Dashboard } from '../modules/dashboard.js';
import { PDV } from '../modules/pdv.js';
import { Estoque } from '../modules/estoque.js';
import { Funil } from '../modules/funil.js';
import './db.js';

const routes = {
  '#dashboard': async () => {
    const el = document.querySelector('[data-view="dashboard"]');
    if (el) el.innerHTML = Dashboard.render();
  },
  '#pdv': async () => {
    const el = document.querySelector('[data-view="pdv"]');
    if (el) await PDV.render(el);
  },
  '#estoque': async () => {
    const el = document.querySelector('[data-view="estoque"]');
    if (el) await Estoque.render(el);
  },
  '#funil': async () => {
    const el = document.querySelector('[data-view="funil"]');
    if (el) el.innerHTML = Funil.render();
  }
};

async function router() {
  const hash = window.location.hash || '#dashboard';
  const viewKey = hash.replace('#', '');

  document.querySelectorAll('.view-pane').forEach(pane => pane.style.display = 'none');

  const activePane = document.querySelector(`[data-view="${viewKey}"]`);
  if (activePane) {
    activePane.style.display = 'block';
    const renderFn = routes[hash] || routes['#dashboard'];
    await renderFn();
  } else {
    window.location.hash = '#dashboard';
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);