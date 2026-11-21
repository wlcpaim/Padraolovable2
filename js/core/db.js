/**
 * js/core/db.js - Persistência local e seed de dados
 */

const SEED_PRODUCTS = [
  { id: 'p1', name: 'Notebook Pro 14', price: 8500, stock: 15, status: 'ok' },
  { id: 'p2', name: 'Wireless Mouse', price: 150, stock: 5, status: 'low' },
  { id: 'p3', name: 'Monitor 4K', price: 2200, stock: 0, status: 'out' }
];

const db = {
  async getProducts() {
    const stored = localStorage.getItem('products');
    if (!stored) {
      localStorage.setItem('products', JSON.stringify(SEED_PRODUCTS));
      return SEED_PRODUCTS;
    }
    return JSON.parse(stored);
  },
  
  async getSales() {
    return JSON.parse(localStorage.getItem('sales') || '[]');
  },

  async addSale(sale) {
    const sales = await this.getSales();
    sales.push({ ...sale, id: Date.now(), date: new Date().toISOString() });
    localStorage.setItem('sales', JSON.stringify(sales));
  }
};

window.wlcDb = db;
export default db;
