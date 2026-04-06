import { Order } from './entities/order';
import { Product } from './entities/product';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './entities/shopping-cart';

const cart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(cart, messaging, persistency);

cart.addItem(new Product('Caderno', 49.9));
cart.addItem(new Product('Camiseta', 2.5));
cart.addItem(new Product('Banana', 3));
console.log(cart.total);
console.log(cart.items);
cart.removeItem(1);
/* cart.clear(); */
console.log(cart.items);
console.log(cart.total);
order.checkout();
console.log(order.orderStatus);
