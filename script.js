// Sample menu items (replace with your actual menu items and prices)
const menu = [
    { name: 'Porterhouse', price: 18.00, image: 'imgs/Porterhouse.jpg' },
    { name: 'T Bone', price: 17.00, image: 'imgs/TBoneSteak.jpg' },
    { name: 'Tomahawk', price: 15.00, image: 'imgs/Tomahawk.jpg' },
    { name: 'Top Sirloin', price: 11.00, image: 'imgs/Sirloin.jpg' },
    { name: 'Tuna Steak', price: 10.00, image: 'imgs/Tuna-Steak-008d.jpg' },
    { name: 'Egg Muffins', price: 5.00, image: 'imgs/eggmuffins.webp' },
];

// Initialize object to store ordered items with quantities
let orderedItems = {};
let totalAmount = 0;

// Function to display menu items
function displayMenu() {
    const menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = '';

    menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        menuItem.classList.add('menu-item');
        menuItem.onclick = () => addToOrder(item);
        menuContainer.appendChild(menuItem);
    });
}


// Function to add item to order with quantity tracking
function addToOrder(item) {
    // Check if item already exists in order
    if (orderedItems[item.name]) {
        // If item exists, increase quantity by 1
        orderedItems[item.name].quantity++;
    } else {
        // If item does not exist, add it with quantity 1
        orderedItems[item.name] = { ...item, quantity: 1 };
    }

    // Update display of ordered items
    displayOrderedItems();
    calculateTotal();
}


// Function to display ordered items with quantities
function displayOrderedItems() {
    const orderedItemsContainer = document.getElementById('orderedItems');
    orderedItemsContainer.innerHTML = '';

    Object.values(orderedItems).forEach(item => {
        const orderedItem = document.createElement('div');
        orderedItem.innerHTML = `<p>${item.name} - Quantity: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>`;
        orderedItemsContainer.appendChild(orderedItem);
    });
}

// Function to calculate total amount based on ordered items and quantities
function calculateTotal() {
    totalAmount = 0;
    Object.values(orderedItems).forEach(item => {
        totalAmount += item.price * item.quantity;
    });
    // Display the total amount in the HTML element with id "totalAmount"
    document.getElementById('totalAmount').textContent = `$${totalAmount.toFixed(2)}`;
}

// Function to handle payment
function pay() {
    // Perform actions related to payment, such as displaying a confirmation message
    alert('Payment successful! Thank you for your order.');

    // Reset ordered items and total amount after payment
    orderedItems = {};
    totalAmount = 0;
    displayOrderedItems(); // Update the display of ordered items (optional)
    calculateTotal(); // Update the total amount display (optional)
}



// Function to search menu items
// Function to search and display menu items
function searchMenu() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    menu.forEach(item => {
        if (item.name.toLowerCase().includes(searchInput)) {
            const card = document.createElement('div');
            card.classList.add('card', 'mb-3', 'search-card');

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const itemName = document.createElement('h5');
            itemName.classList.add('card-title');
            itemName.textContent = item.name;

            const itemImage = document.createElement('img');
            itemImage.src = item.image; // Set image source from item object
            itemImage.classList.add('card-img-top', 'search-image');

            const itemPrice = document.createElement('p');
            itemPrice.classList.add('card-text');
            itemPrice.textContent = `$${item.price}`;

            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Order';
            addButton.classList.add('btn', 'btn-primary');
            addButton.onclick = () => addToOrder(item);

            cardBody.appendChild(itemName);
            cardBody.appendChild(itemImage);
            cardBody.appendChild(itemPrice);
            cardBody.appendChild(addButton);

            card.appendChild(cardBody);
            searchResultsContainer.appendChild(card);
        }
    });

    // Show/hide search results container based on search input
    if (searchInput.trim() !== '') {
        searchResultsContainer.style.display = 'block';
    } else {
        searchResultsContainer.style.display = 'none';
    }
}


// Function to display search results
function displaySearchResults(results) {
    const menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = '';

    results.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
        menuItem.classList.add('menu-item');
        menuItem.onclick = () => addToOrder(item);
        menuContainer.appendChild(menuItem);
    });
}

// Function to print receipt
function printReceipt() {
    // Generate receipt content with ordered items and quantities
    let receiptContent = '<h2>Receipt</h2><ul>';
    Object.values(orderedItems).forEach(item => {
        receiptContent += `<li>${item.name} - Quantity: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</li>`;
    });
    receiptContent += `</ul><h3>Total: $${totalAmount.toFixed(2)}</h3>`;

    // Open a new window with receipt content for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(receiptContent);
    printWindow.print();
}


// Initial setup
displayMenu();

// Function to display menu items as cards
// Function to display menu items as cards with images
function displayMenu() {
    const menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = '';

    menu.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Create image element
        const itemImage = document.createElement('img');
        itemImage.src = item.image; // Set image source from item object
        itemImage.classList.add('card-img-top');
        itemImage.alt = item.name; // Set alt text for accessibility

        const itemName = document.createElement('h5');
        itemName.classList.add('card-title');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.classList.add('card-text');
        itemPrice.textContent = `$${item.price}`;

        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Order';
        addButton.classList.add('btn', 'btn-primary');
        addButton.onclick = () => addToOrder(item);

        cardBody.appendChild(itemImage); // Add image to card body
        cardBody.appendChild(itemName);
        cardBody.appendChild(itemPrice);
        cardBody.appendChild(addButton);

        card.appendChild(cardBody);
        menuContainer.appendChild(card);
    });
}

