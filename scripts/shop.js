class switchItem {

    constructor(name, price, imageSrc, id) {
        this.name = name;
        this.price = price;
        this.imageSrc = imageSrc;
        this.id = id;
    }

    render() {
        return `
        <article class="shop-item">
        <div class="shop-item-img-container-ibg">
        <img src="${this.imageSrc}" alt="${this.name}">
        </div>
        <h2 class="item-header">${this.name}</h2>
        <div class="item-actions">
        <input type="number" class="item-quantity" min="1" value="1">
        <p class="price">$${this.price}</p>
        <button class="add-to-cart btn btn-secondary" data-id="${this.id}">Add to cart</button>
        </div>
        </article>
        `;
    }
}

let products = [
    new switchItem("Cherry MX black linear", "6.00", "../images/switch pictures/cherrymxblacklinearsiwtches.png", "1"),
    new switchItem("Ayaka linear", "4.50", "../images/switch pictures/ayakalinearswitches.png", "2"),
    new switchItem("Jerrzi tu clicky", "11.00", "../images/switch pictures/jerrzitulinearswitches.png", "3"),
    new switchItem("Tecsee eclair linear", "4.90", "../images/switch pictures/tecseeeclairlinearswitches.png", "4"),
    new switchItem("Gateron yellow milky linear", "2.50", "../images/switch pictures/gateronyellowmilkylinearswitches.png", "5"),
    new switchItem("Gateron blizzard tactile", "5.00", "../images/switch pictures/gateronblizzardtactileswitches.png", "6"),
    new switchItem("Cheese mocha linear", "1.50", "../images/switch pictures/cheesemochalinearswitches.png", "7"),
    new switchItem("Kailh box crystal royal cheese clicky", "5.50", "../images/switch pictures/kailhboxcrystalroyaltactileswitches.png", "8"),
    new switchItem("Gateron black ink linear", "8.50", "../images/switch pictures/gateronblackinv2silentlinearswitches.png", "9"),
];

let shopContainer = document.querySelector('.shop-items');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

products.forEach(product => {
    shopContainer.innerHTML += product.render();
});

document.querySelectorAll('.add-to-cart').forEach(button => {

    button.addEventListener('click', (event) => {
        
        const id = event.target.dataset.id;
        const selectElement = event.target.parentElement.querySelector('.item-quantity');
        const quantity = parseInt(selectElement.value);

        const product = products.find(p => p.id === id);
        const existingProduct = cart.find(item => item.id === id);

        if (existingProduct) {

            existingProduct.quantity += quantity;
        } else {

            cart.push({
                id: product.id,
                name: product.name,
                imageSrc: product.imageSrc,
                price: product.price,
                quantity: quantity
            });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    });
});