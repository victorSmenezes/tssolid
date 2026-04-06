type CartItem = { name: string; price: number };

type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return +this._items.reduce((total, item) => total + item.price, 0).toFixed(2);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('O carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(`Seu pedido com total de ${this.total} foi recebido e está sendo processado`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log(message);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }

  clear(): void {
    console.log('Carrinho limpo');
    this._items.length = 0;
  }
}

const cart = new ShoppingCartLegacy();
cart.addItem({ name: 'Caderno', price: 49.9 });
cart.addItem({ name: 'Camiseta', price: 2.5 });
cart.addItem({ name: 'Banana', price: 3 });
console.log(cart.total);
console.log(cart.items);
cart.removeItem(1);
/* cart.clear(); */
console.log(cart.items);
console.log(cart.total);
cart.checkout();
console.log(cart.orderStatus);
