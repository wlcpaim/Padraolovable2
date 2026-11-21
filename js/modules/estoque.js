/**
 * js/modules/estoque.js
 */
export const renderEstoque = async () => {
  const container = document.querySelector('[data-view="estoque"]');
  const products = await window.wlcDb.getProducts();
  
  container.innerHTML = `
    <h2 class="text-2xl font-bold text-white mb-6">Controle de Estoque</h2>
    <div class="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-slate-900 text-slate-400">
          <tr><th class="p-4">Produto</th><th class="p-4">Qtd</th><th class="p-4">Status</th></tr>
        </thead>
        <tbody>
          ${products.map(p => `
            <tr class="border-t border-slate-700">
              <td class="p-4">${p.name}</td>
              <td class="p-4">${p.stock}</td>
              <td class="p-4"><span class="px-2 py-1 rounded text-xs ${p.status === 'ok' ? 'bg-emerald-900 text-emerald-300' : 'bg-red-900 text-red-300'}">${p.status}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
};
