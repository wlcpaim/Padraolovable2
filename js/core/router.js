/* js/core/router.js */
import { PDV } from '../modules/pdv.js';
import { Estoque } from '../modules/estoque.js';
import { Funil } from '../modules/funil.js';
import '../core/db.js';

const routes = {
  '#pdv': () => document.querySelector('[data-view="pdv"]').innerHTML = PDV.render(),
  '#estoque': () => document.querySelector('[data-view="estoque"]').innerHTML = Estoque.render(),
  '#funil': () => document.querySelector('[data-view="funil"]').innerHTML = Funil.render(),
  '#': () => document.querySelector('[data-view="dashboard"]').innerHTML = '<h1>Dashboard em breve</h1>'
};

async function router() {
  const hash = window.location.hash || '#';
  const viewKey = hash.replace('#', '') || 'dashboard';
  
  // Oculta todas
  document.querySelectorAll('.view-pane').forEach(el => el.style.display = 'none');
  
  const activeView = document.querySelector(`[data-view="${viewKey}"]`);
  if (activeView) {
    activeView.style.display = 'block';
    const renderer = routes[hash] || routes['#'];
    renderer();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
