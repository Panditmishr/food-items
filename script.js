const orderButton = document.querySelector('#orderButton');
const burger = document.querySelector('#burger');
const fries = document.querySelector('#fries');
const drink = document.querySelector('#drink');
const body = document.querySelector('body');

orderButton.addEventListener('click', () => {
    // Create an array of selected food items
    const selectedItems = [];
    const foodItems = [burger, fries, drink]; // Array to loop through checkboxes
    
    foodItems.forEach(checkbox => {
        if (checkbox.checked) {
            selectedItems.push(checkbox.value);
        }
    });
    // Clear the list before adding new items

    // Remove existing food images and order IDs
    const existingImages = document.querySelectorAll('.foodImage');
    existingImages.forEach(image => image.remove());
    const existingOrderIds = document.querySelectorAll('.orderId');
    existingOrderIds.forEach(id => id.remove());
    
    // Create an image based on selected items
    const foodImage = document.createElement('img');
    foodImage.classList.add('foodImage');
    
    // Assign image source based on selected items
    if (burger.checked) {
        foodImage.src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';
    } else if (fries.checked) {
        foodImage.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
    } else if (drink.checked) {
        foodImage.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
    } else {
        foodImage.src = 'https://www.kfc.co.uk/content/dam/KFC/UK/images/2020/02/05/2x2-burger.png';
    }
    foodImage.setAttribute('alt', 'Food Image');

    // Append the image to the body
   
    function generateOrderId() {
        return Math.floor(Math.random() * 1000);
    }
    // Generate a random order ID
    const orderId = generateOrderId();
    // Display the order ID
    const orderIdElement = document.createElement('p');
    orderIdElement.classList.add('orderId');
    orderIdElement.textContent = `Order ID: ${orderId}`;
    if(selectedItems.length === 0) {
        alert('Please select at least one item');
    } else {
    body.appendChild(foodImage);
    body.appendChild(orderIdElement);
    body.appendChild(selectedItemsList);
    }

 // Clear the list before adding new items
});
