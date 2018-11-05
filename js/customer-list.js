/* eslint-disable indent */
function makeCustomer(customer) {
    const html = `
        <li id="customer-list">
            <h3 class="name">
            ${product.name + ' :'}
            </h3>
            <p class="description">
            ${product.description}
            </p>
        </li>
        `;

    const template = document.createElement('template'); 
    template.innerHTML = html; 
    return template.content;
}

const list = document.getElementById('products');

const productList = {
    init(products, onSelect) {
        for(let i = 0; i < products.length; i++) {
            productList.add(products[i]);
        }
        productList.onSelect = onSelect; 
        productList.products = products; 
    }, 
    add(product) {
        // console.log('productList.add', product); 
        const dom = makeProduct(product); 

        const listItem = dom.querySelector('li'); 

        listItem.addEventListener('click', function() {
                productList.onSelect(product); 
        }); 

        list.appendChild(dom);
    },
    remove(index) {
        list.querySelectorAll('li')[index].remove();
    }
}; 

export default productList; 