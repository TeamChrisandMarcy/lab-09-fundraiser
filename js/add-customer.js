const addCustomer = {

    init(onAdd) {
        const form = document.getElementById('shipping-reg'); 

        form.addEventListener('submit', function(event) {
            console.log('submit'); 
            event.preventDefault(); 

            const elements = form.elements; 

            const customer = {
                name: elements.shipname.value,
                email: elements.email.value,
                tel: elements.tel.value,
                street: elements.street.value,
                city: elements.city.value,
                state: elements.state.value,
                zip: elements.zip.value
            }; 
            
            onAdd(customer); 

            form.reset(); 

        }); 
    }

}; 

export default addCustomer;