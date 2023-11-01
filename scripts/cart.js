
document.addEventListener('DOMContentLoaded', () => {

    let cartList = document.querySelector('.cart-list');
    let storedCart = localStorage.getItem('cart');
    let cart = storedCart ? JSON.parse(storedCart) : [];
    let total = 0;

    cart.forEach(item => {
        let totalPriceForItem = (item.price * item.quantity).toFixed(2);
        total += parseFloat(totalPriceForItem);

        let cartItem = `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.imageSrc}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h2 class="cart-item-name">${item.name}</h2>
                    <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
                    <p class="cart-item-price">Price: $${totalPriceForItem}</p>
                    <button class="remove-from-cart btn btn-danger">Remove</button>
                </div>
            </div>
        `;

        cartList.innerHTML += cartItem;
    });

    document.getElementById('total-price').textContent = total.toFixed(2);


    document.querySelectorAll('.remove-from-cart').forEach(button => {

        button.addEventListener('click', (event) => {
            
            const id = event.target.closest('.cart-item').dataset.id;
            cart = cart.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(cart));
            location.reload();
        });
    });
});
