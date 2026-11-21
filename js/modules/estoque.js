// js/modules/estoque.js
export const Estoque = {
  async render(container) {
    container.innerHTML = `<div class="p-8 text-center text-zinc-400">Carregando estoque...</div>`;
    
    try {
      const products = await window.wlcDb.getProducts();
      
      const statusColors = {
        ok: 'bg-emerald-500/10 text-emerald-400',
        low: 'bg-amber-500/10 text-amber-400',
        out: 'bg-rose-500/10 text-rose-400'
      };

      container.innerHTML = `
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold text-white">Estoque</h1>
          <button class="bg-zinc-100 text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-white transition">Novo Produto</button>
        </div>
        <div class="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
          <table class="w-full">
            <thead>
              <tr class="border-b border-zinc-800 text-left text-zinc-400 text-sm">
                <th class="p-4">Produto</th>
                <th class="p-4">Preço</th>
                <th class="p-4">Estoque</th>
                <th class="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              ${products.map(p => `
                <tr class="border-b border-zinc-800 last:border-0 hover:bg-zinc-800/50 transition">
                  <td class="p-4 text-zinc-200 font-medium">${p.name}</td>
                  <td class="p-4 text-zinc-300 font-mono">R$ ${p.price.toFixed(2)}</td>
                  <td class="p-4 text-zinc-300">${p.stock}</td>
                  <td class="p-4"><span class="px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[p.status] || 'bg-zinc-800 text-zinc-300'}">${p.status.toUpperCase()}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } catch (err) {
      container.innerHTML = `<div class="p-8 text-center text-rose-400">Erro ao carregar estoque.</div>`;
    }
  }
};
