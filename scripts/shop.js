class switchItem {
    constructor(name, price, imageSrc) {
        this.name = name;
        this.price = price;
        this.imageSrc = imageSrc;
    }

    render() {
        return `
        <article class="shop-item">
            <img src="${this.imageSrc}" alt="${this.name}">
            <div class="item-info">
                <h2>${this.name}</h2>
                <div class="item-actions">
                    <select class="item-quantity">
                    </select>
                    <p class="price">$${this.price}</p>
                    <button class="add-to-cart" data-name="${this.name}" data-price="${this.price}" data-image="${this.imageSrc}">Add to cart</button>
                </div>
            </div>
        </article>
        `;
    }
}


let products = [
    new switchItem("Cherry MX black linear", "6.00", "../images/switch pictures/cherrymxblacklinearsiwtches.png"),
    new switchItem("Ayaka linear", "4.50", "../images/switch pictures/ayakalinearswitches.png"),
    new switchItem("Jerrzi tu clicky", "11.00", "../images/switch pictures/jerrzitulinearswitches.png"),
    new switchItem("Tecsee eclair linear", "4.90", "../images/switch pictures/tecseeeclairlinearswitches.png"),
    new switchItem("Gateron yellow milky linear", "2.50", "../images/switch pictures/gateronyellowmilkylinearswitches.png"),
    new switchItem("Gateron blizzard tactile", "5.00", "../images/switch pictures/gateronblizzardtactileswitches.png"),
    new switchItem("Cheese mocha linear", "1.50", "../images/switch pictures/cheesemochalinearswitches.png"),
    new switchItem("Kailh box crystal royal cheese clicky", "5.50", "../images/switch pictures/kailhboxcrystalroyaltactileswitches.png"),
    new switchItem("Gateron black ink linear", "8.50", "../images/switch pictures/gateronblackinv2silentlinearswitches.png"),
];

let shopContainer = document.querySelector('.shop-container');

products.forEach(product => {
    shopContainer.innerHTML += product.render();
});