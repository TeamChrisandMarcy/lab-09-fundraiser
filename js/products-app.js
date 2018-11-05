import cartApi from './cart-api.js'; 
import productsApi from './product-api.js'; 
import productList from './product-admin-list.js';
import shoppingCart from './cart.js'; 

const products = productsApi.getAll(); 

const cart = cartApi.get(); 

shoppingCart.init(cart); 

productList.init(products, function(product) {
    cartApi.add(product); 
    shoppingCart.update(cart);
}); 