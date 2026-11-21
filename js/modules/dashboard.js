/**
 * js/modules/dashboard.js
 */
export const Dashboard = {
  render() {
    // Dados simulados do db
    const vendasHoje = "R$ 14.850,00";
    const pedidosCount = 38;
    const ticketMedio = "R$ 390,78";

    return `
      <div class="space-y-6">
        <div>
          <h2 class="text-2xl font-bold tracking-tight text-white">Dashboard Omnichannel</h2>
          <p class="text-sm text-zinc-400">Visão geral unificada de vendas, PDV e e-commerce.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-zinc-950 border border-zinc-800 rounded-xl p-5 shadow-sm">
            <span class="text-xs font-medium text-zinc-400 uppercase tracking-wider">Vendas Hoje</span>
            <div class="mt-2 flex items-baseline justify-between">
              <span class="text-3xl font-bold text-white">${vendasHoje}</span>
              <span class="text-xs text-emerald-400 font-semibold bg-emerald-950/50 border border-emerald-900/50 px-2 py-0.5 rounded">+12.4%</span>
            </div>
          </div>

          <div class="bg-zinc-950 border border-zinc-800 rounded-xl p-5 shadow-sm">
            <span class="text-xs font-medium text-zinc-400 uppercase tracking-wider">Pedidos Realizados</span>
            <div class="mt-2 flex items-baseline justify-between">
              <span class="text-3xl font-bold text-white">${pedidosCount}</span>
              <span class="text-xs text-emerald-400 font-semibold bg-emerald-950/50 border border-emerald-900/50 px-2 py-0.5 rounded">+8.1%</span>
            </div>
          </div>

          <div class="bg-zinc-950 border border-zinc-800 rounded-xl p-5 shadow-sm">
            <span class="text-xs font-medium text-zinc-400 uppercase tracking-wider">Ticket Médio</span>
            <div class="mt-2 flex items-baseline justify-between">
              <span class="text-3xl font-bold text-white">${ticketMedio}</span>
              <span class="text-xs text-zinc-400 font-semibold bg-zinc-900 px-2 py-0.5 rounded">Estável</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-white mb-4">Últimas Transações</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                <div>
                  <div class="font-medium text-sm text-zinc-200">Pedido #1089 (PDV)</div>
                  <div class="text-xs text-zinc-400">Há 5 minutos • 3 itens</div>
                </div>
                <span class="text-emerald-400 font-semibold text-sm">R$ 450,00</span>
              </div>
              <div class="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800">
                <div>
                  <div class="font-medium text-sm text-zinc-200">Pedido #1088 (Loja Virtual)</div>
                  <div class="text-xs text-zinc-400">Há 22 minutos • 1 item</div>
                </div>
                <span class="text-emerald-400 font-semibold text-sm">R$ 1.200,00</span>
              </div>
            </div>
          </div>

          <div class="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-white mb-4">Canais de Venda (%)</h3>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-zinc-300">PDV Física</span>
                  <span class="text-white font-medium">58%</span>
                </div>
                <div class="w-full bg-zinc-900 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 58%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-zinc-300">E-commerce / Loja Virtual</span>
                  <span class="text-white font-medium">32%</span>
                </div>
                <div class="w-full bg-zinc-900 rounded-full h-2">
                  <div class="bg-indigo-600 h-2 rounded-full" style="width: 32%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-zinc-300">Marketplaces</span>
                  <span class="text-white font-medium">10%</span>
                </div>
                <div class="w-full bg-zinc-900 rounded-full h-2">
                  <div class="bg-violet-600 h-2 rounded-full" style="width: 10%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
