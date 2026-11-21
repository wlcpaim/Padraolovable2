// js/modules/dashboard.js
export async function renderDashboard() {
  return `
    <h1 class=\"text-2xl font-bold mb-6\">Dashboard</h1>
    <div class=\"grid grid-cols-1 md:grid-cols-3 gap-4\">
      <div class=\"bg-zinc-900 p-6 rounded-lg border border-zinc-800\">
        <h3 class=\"text-zinc-400\">Vendas Hoje</h3>
        <p class=\"text-3xl font-bold mt-2\">R$ 0,00</p>
      </div>
    </div>
  `;
}
