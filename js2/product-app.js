import addProduct from './product-list.js'; 
import productsApi from '../js/product-api.js';
import productForm from '../js2/product-form.js'; 
import productDetail from '../js2/products-detail-list.js'; 

const products = productsApi.getAll();

console.log('hello', products); 

productForm.init(products, /*onSelect*/ function(product) {
    productDetail.update(product);
});

productDetail.init(/*onRemove*/ function(product) {
    const index = productsApi.remove(product);
    // TODO: tell fruit list to re-render
    productForm.remove(index);
});

addProduct.init(function(product) {
    // this is the onAdd listener

    // tell the api service first
    productsApi.add(product);

    // then update components
    productForm.add(product);
});