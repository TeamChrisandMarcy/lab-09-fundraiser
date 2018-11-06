const section = document.getElementById('product-detail');

const productDetail = {
    init(onRemove) {
        const removeButton = section.querySelector('button');
        removeButton.addEventListener('click', function() {
            onRemove(productDetail.product);
            productDetail.product = null;
            section.classList.add('hidden');
        });
    },
    update(product) {
        productDetail.product = product;
        section.querySelector('h3').textContent = product.name;
        section.querySelector('p').textContent = product.description;
        section.classList.remove('hidden');
    }
};

export default productDetail;