import { Order } from './classes/order';
import { Product } from './classes/product';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { ShoppingCart } from './classes/shopping-cart';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';

/*const fiftyPercentDiscount = new FiftyPercentDiscount();*/
/* const tenPercentDiscount = new TenPercentDiscount(); */
const noDiscount = new NoDiscount();
const cart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
/* const individualCustomer = new IndividualCustomer('John', 'Doe', '1234567890'); */
const enterpriseCustomer = new EnterpriseCustomer('Enterprise', '1234567890/23123');
const order = new Order(cart, messaging, persistency, enterpriseCustomer);

cart.addItem(new Product('Caderno', 49.9));
cart.addItem(new Product('Blusa', 2.5));
cart.addItem(new Product('Banana', 3));
console.log(order.orderStatus);

order.checkout();

console.log(order.orderStatus);
