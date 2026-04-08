import { Order } from './classes/order';
import { Product } from './classes/product';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';

/*const fiftyPercentDiscount = new FiftyPercentDiscount();*/
/* const tenPercentDiscount = new TenPercentDiscount(); */
const noDiscount = new NoDiscount();
const cart = new ShoppingCart(noDiscount);
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
