import addCustomer from './add-customer.js'; 
import customersApi from './customer-api.js'; 
import customerList from './customer-list.js';
import cartApi from './cart-api.js'; 
import productsApi from './product-api.js'; 
import productList from './product-list.js';
import shoppingCart from './cart.js'; 
import addProduct from './add-inventory.js';

const customers = customersApi.getAll();
 
customerList.init();

addCustomer.init(customers, function(customer) {

    customersApi.add(customer);
    customerList.add(customer); 
}); 

const cart = cartApi.get(); 

shoppingCart.init(cart); 

productList.init(products, function(product) {
    cartApi.add(product); 
    shoppingCart.update(cart);
}); 

productList.init(products, function(product) {
    const index = productsApi.remove(product);
    productList.remove(index);
});

addProduct.init(function(product) {
    productsApi.add(product);
    productList.add(product);
});