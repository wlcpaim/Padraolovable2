/**
 * js/modules/pdv.js
 */
export const renderPDV = async () => {
  const container = document.querySelector('[data-view="pdv"]');
  container.innerHTML = `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold text-white">Ponto de Venda</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-2 bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h3 class="text-slate-400 mb-4">Catálogo de Produtos</h3>
          <div id="product-list" class="space-y-2">Carregando...</div>
        </div>
        <div class="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <h3 class="text-slate-400 mb-4">Carrinho</h3>
          <div id="cart-list" class="min-h-[200px]"></div>
          <button id="checkout-btn" class="w-full mt-4 bg-emerald-600 py-2 rounded font-bold hover:bg-emerald-500">Finalizar Venda</button>
        </div>
      </div>
    </div>
  `;
  
  const products = await window.wlcDb.getProducts();
  const listEl = document.getElementById('product-list');
  listEl.innerHTML = products.map(p => `
    <div class="flex justify-between items-center p-3 bg-slate-700 rounded">
      <span>${p.name}</span>
      <span class="font-mono">R$ ${p.price}</span>
    </div>
  `).join('');
};
