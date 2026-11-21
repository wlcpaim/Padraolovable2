/**
 * js/modules/funil.js
 */
export const Funil = {
  render() {
    const stages = [
      { name: 'Lead', color: 'border-zinc-700', items: [{ title: 'Empresa Alpha', value: 'R$ 5.000', contact: 'Carlos Silva' }] },
      { name: 'Contato', color: 'border-blue-500/40', items: [{ title: 'Loja Beta SP', value: 'R$ 12.400', contact: 'Ana Souza' }] },
      { name: 'Proposta', color: 'border-amber-500/40', items: [{ title: 'Rede Gama', value: 'R$ 35.000', contact: 'Roberto Dias' }] },
      { name: 'Fechado', color: 'border-emerald-500/40', items: [{ title: 'Supermercado Delta', value: 'R$ 88.000', contact: 'Mariana Lima' }] }
    ];

    return `
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold tracking-tight text-white">Funil de Vendas Omnichannel</h2>
            <p class="text-sm text-zinc-400">Acompanhe as negociações B2B e conversões de leads em tempo real.</p>
          </div>
          <button onclick="alert('Funcionalidade de novo lead em breve')" class="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2">
            Novo Lead
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          ${stages.map(stage => `
            <div class="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex flex-col gap-3">
              <div class="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span class="font-semibold text-sm text-zinc-200">${stage.name}</span>
                <span class="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">${stage.items.length}</span>
              </div>
              <div class="space-y-3 flex-1">
                ${stage.items.map(item => `
                  <div class="bg-zinc-800/60 border ${stage.color} p-3 rounded-lg shadow-sm hover:border-zinc-600 transition">
                    <h4 class="font-medium text-sm text-zinc-100">${item.title}</h4>
                    <p class="text-xs text-zinc-400 mt-1">${item.contact}</p>
                    <div class="mt-3 flex items-center justify-between text-xs">
                      <span class="text-emerald-400 font-semibold">${item.value}</span>
                      <span class="text-zinc-500">B2B</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
};
