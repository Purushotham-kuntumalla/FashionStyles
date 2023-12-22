let URL = 'https://fakestoreapi.com/products';
let body = document.querySelector('body');

let main = document.querySelector('main');
let section = document.querySelector('section');
let filteredSection = document.createElement('section');

// Step 1: Create a variable to represent the cart and cart button
let cart = [];
let cartButton = document.getElementById('cartButton'); // Add the id 'cartButton' to your cart button

let api = async () => {
    console.log('API is getting ....');
    let res = await fetch(URL);
    let data = await res.json();
    console.log(data);

    let p = document.createElement('p');
    if (data) {
        p.innerText = '';
    } else {
        p.innerText = 'API is getting Data...';
    }

    data.forEach((product) => {
        let container = document.createElement('div');
        let cardBody = document.createElement('div');
        let catagory = document.createElement('p');
        let img = document.createElement('img');
        let price = document.createElement('p');
        let rating = document.createElement('p');
        let count = document.createElement('p');
        let btn = document.createElement('button');

        main.append(section);
        section.append(container);
        container.append(img);
        container.append(cardBody);
        cardBody.append(catagory, price, rating, count, btn);

        container.className = 'card';
        img.className = 'card-img-top';
        cardBody.className = 'card-body';
        catagory.className = 'card-text';
        price.className = 'card-text';
        p.className = 'card-text';
        count.className = 'card-text';
        btn.className = 'btn btn-primary';

        container.style.margin = '1rem';
        container.style.padding = '1rem';
        cardBody.style.display = 'flex';
        cardBody.style.flexDirection = 'row';
        cardBody.style.flexWrap = 'wrap';
        cardBody.style.alignContent = 'center';
        cardBody.style.justifyContent = 'space-evenly';
        container.style.width = '18rem';
        img.style.height = '18rem';
        catagory.style.fontWeight = '900';
        price.style.fontWeight = '900';

        img.src = product.image;
        catagory.innerHTML = `<i>Category</i>: ${product.category}`;
        price.innerHTML = `<i>Price</i>: $${product.price}`;
        rating.innerHTML = `<i>Rating</i>: ${product.rating.rate}`;
        count.innerHTML = `<i>Count</i>: ${product.rating.count}`;
        btn.innerText = 'Buy';

        // Step 2: Update event listener to add product to the cart
        btn.addEventListener('click', () => {
            cart.push(product);
            console.log(product);
            alert('Product added to the cart!')
            // Step 3: Optionally, update the UI to reflect changes in the cart
            updateCartUI();
        });
    });
    console.log(' time out');
};

// Optional: Function to update the UI to reflect changes in the cart
function updateCartUI() {
    // Update the cart button text with the number of items in the cart
    cartButton.innerText = `${cart.length}`;

    // You can implement the logic to display the items in the UI based on your requirements
}

// Step 3: Add an event listener to the cart button to show items in the UI when clicked
cartButton.addEventListener('click', () => {
    // Display the items in the UI, for example, show a modal or update a sidebar

    console.log('Cart button clicked! Items in the cart:', cart);
});

setTimeout(api, 100);
