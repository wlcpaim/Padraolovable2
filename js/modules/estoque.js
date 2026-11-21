// js/modules/estoque.js
export async function renderEstoque() {
  const products = await window.wlcDb.getProducts();
  
  const statusColors = {
    ok: 'bg-emerald-500/10 text-emerald-400',
    low: 'bg-amber-500/10 text-amber-400',
    out: 'bg-rose-500/10 text-rose-400'
  };

  return `
    <div class=\"flex justify-between items-center mb-6\">
      <h1 class=\"text-2xl font-bold\">Estoque</h1>
      <button class=\"bg-zinc-100 text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-white\">Novo Produto</button>
    </div>
    <div class=\"bg-zinc-900 rounded-lg border border-zinc-800\">
      <table class=\"w-full\">
        <thead>
          <tr class=\"border-b border-zinc-800 text-left text-zinc-400\">
            <th class=\"p-4\">Produto</th>
            <th class=\"p-4\">Preço</th>
            <th class=\"p-4\">Estoque</th>
            <th class=\"p-4\">Status</th>
          </tr>
        </thead>
        <tbody>
          ${products.map(p => `
            <tr class=\"border-b border-zinc-800 last:border-0\">
              <td class=\"p-4\">${p.name}</td>
              <td class=\"p-4\">R$ ${p.price}</td>
              <td class=\"p-4\">${p.stock}</td>
              <td class=\"p-4\"><span class=\"px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[p.status]}\">${p.status.toUpperCase()}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}
