
//I'm keeping this as an artifact of trying to use ES6 to separate items and logic.
//There are certain reasons why I decided to not go with this.

export class switchItem {
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
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        // ... add more options if needed
                    </select>
                    <button class="add-to-cart" data-name="${this.name}" data-price="${this.price}" data-image="${this.imageSrc}">Add to Cart</button>
                </div>
            </div>
        </article>
        `;
    }
}