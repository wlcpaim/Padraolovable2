/**
 * js/modules/funil.js
 */
export const renderFunil = () => {
  const container = document.querySelector('[data-view="funil"]');
  const stages = ['Lead', 'Contato', 'Proposta', 'Fechado'];
  container.innerHTML = `
    <h2 class="text-2xl font-bold text-white mb-6">Funil de Vendas</h2>
    <div class="grid grid-cols-4 gap-4">
      ${stages.map(stage => `
        <div class="bg-slate-800 p-4 rounded-xl border border-slate-700">
          <h3 class="text-slate-400 text-sm mb-4">${stage}</h3>
          <div class="h-64 border-2 border-dashed border-slate-700 rounded"></div>
        </div>
      `).join('')}
    </div>
  `;
};
