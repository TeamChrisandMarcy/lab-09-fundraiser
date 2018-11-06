const addProduct = {

    init(onAdd) {
        const form = document.getElementById('product-form'); 

        form.addEventListener('submit', function(event) {
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


