/* js/core/router.js */
import { renderDashboard } from '../modules/dashboard.js';
import { renderPDV } from '../modules/pdv.js';
import { renderEstoque } from '../modules/estoque.js';
import { renderFunil } from '../modules/funil.js';
import '../core/db.js';

const routes = {
  '#dashboard': renderDashboard,
  '#pdv': renderPDV,
  '#estoque': renderEstoque,
  '#funil': renderFunil,
  '#': renderDashboard
};

async function router() {
  const hash = window.location.hash || '#';
  const content = document.getElementById('content');
  
  // Limpa a tela atual mas preserva a estrutura de views
  content.innerHTML = `
    <section data-view="dashboard" class="view-pane" style="display:none"></section>
    <section data-view="pdv" class="view-pane" style="display:none"></section>
    <section data-view="estoque" class="view-pane" style="display:none"></section>
    <section data-view="funil" class="view-pane" style="display:none"></section>
  `;
  
  const viewKey = hash.replace('#', '') || 'dashboard';
  const activeView = document.querySelector(`[data-view="${viewKey}"]`);
  
  if (activeView) {
    activeView.style.display = 'block';
    const renderer = routes[hash] || routes['#dashboard'];
    await renderer();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
