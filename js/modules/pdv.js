/**
 * js/modules/pdv.js
 */
export const PDV = {
  async render(container) {
    container.innerHTML = `<div class="p-8 text-center text-zinc-400">Carregando catálogo...</div>`;
    
    try {
      const products = await window.wlcDb.list('produtos');
      container.innerHTML = `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-white">Ponto de Venda</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-2 bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h3 class="text-zinc-400 mb-4">Catálogo de Produtos</h3>
              <div id="product-list" class="space-y-2">
                ${products.map(p => `
                  <div class="flex justify-between items-center p-3 bg-zinc-800 rounded border border-zinc-700">
                    <span class="text-zinc-200">${p.name}</span>
                    <span class="font-mono text-zinc-300">R$ ${p.price.toFixed(2)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <h3 class="text-zinc-400 mb-4">Carrinho</h3>
              <div id="cart-list" class="min-h-[200px] text-zinc-500 italic">Carrinho vazio</div>
              <button class="w-full mt-4 bg-emerald-600 py-2 rounded font-bold hover:bg-emerald-500 text-white transition">Finalizar Venda</button>
            </div>
          </div>
        </div>
      `;
    } catch {
      container.innerHTML = `<div class="p-8 text-center text-rose-400">Erro ao carregar catálogo.</div>`;
    }
  }
};