const addProduct = {

    init(onAdd) {
        const form = document.getElementById('new-product'); 

        form.addEventListener('submit', function(event) {
            console.log('submit'); 
            event.preventDefault(); 

            const elements = form.elements; 

            const product = {
                name: elements.name.value,
                image: elements.image.value,
                description: elements.description.value
            }; 
            
            onAdd(product); 

            form.reset(); 

        }); 
    }

}; 

export default addProduct; 