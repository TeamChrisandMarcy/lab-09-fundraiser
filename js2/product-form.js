function makeProduct(product) {
    const html = `
        <li class="product">
            <img src="assets/${product.image ? product.image : 'logo.png'}">
            <h3 class="name">
            ${product.name + ' :'}
            </h3>
            <p class="description">
            ${product.description}
            </p>
            <button id="checkbox" type="checkbox"></button>
        </li>
        `;

    const template = document.createElement('template'); 

    template.innerHTML = html; 

    return template.content;
    
}

const list = document.getElementById('product-list-form');

const productForm = {
    init(products, onSelect) {
        for(let i = 0; i < products.length; i++) {
            productForm.add(products[i]);
        }
        productForm.onSelect = onSelect; 
        productForm.products = products; 
    },
    add(product) {
        console.log('productForm.add', product); 
        const dom = makeProduct(product); 

        const listItem = dom.getElementById('add'); 

        listItem.addEventListener('click,', function() {
            productForm.onSelect(product); 
        }); 

        list.appendChild(dom);
    },
    remove(index) {
        list.querySelectorAll('li')[index].remove();

    }
}; 

export default productForm; 