import addProduct from './add-inventory.js'; 
import productsApi from './product-api.js'; 
import productDetail from './product-detail.js';
import productList from './product-list.js';

const products = productsApi.getAll();
 
productList.init(products, function(product) {
    productDetail.update(product); 
}); 

// productDetail.init(function(product) {
//     const index = productsApi.remove(product); 
//     productList.remove(index);
// }); 

addProduct.init(function(product) {

    productsApi.add(product);

    productList.add(product); 
}); 
