let products = [
    {
        name: 'Mugs',
        image: 'mug.png',
        description: 'Unicef Mug. Shiny!'
    },
    {
        name: 'T-Shirt',
        image: 't-shirt.png',
        description: 'T-Shirt. 100% Cotton.'
    },
    {
        name: 'Tote',
        image: 'tote.png',
        description: 'Tote Bag. Cotton/Ramie Blend.'
    }, 
];

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

const productsApi = {
    getAll() {
        const json = localStorage.getItem('products');
        if(json) {
            products = JSON.parse(json);
        }
        return products;

    },

    add(product) {
        products.push(product);
        saveProducts();
    },
    remove(product) {
        const index = products.indexOf(product);
        if(index !== -1) {
            products.splice(index, 1);
            saveProducts();
            return index;
        }
    }
};

export default productsApi;