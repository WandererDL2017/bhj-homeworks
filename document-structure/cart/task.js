const products = document.querySelectorAll('.product');
const productControls = document.querySelectorAll('.product__controls');
const cartProducts = document.querySelector('.cart__products');

function getCartData(){
    return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(data){
    localStorage.setItem('cart', JSON.stringify(data));
    return false;
}

function addCartProduct(product) {
    let cartData = getCartData() || {};

    const productId = product.dataset.id;
    const srcProductImg = product.querySelector('.product__image').getAttribute('src');
    const countProduct = Number(product.querySelector('.product__quantity-value').innerText);
    
    if (cartData.hasOwnProperty(productId)) {
        cartData[productId][1] += countProduct;
    } else {
        cartData[productId] = [srcProductImg, countProduct];
    }
    setCartData(cartData);
}

function deleteProduct() {
    const buttonDelete = document.querySelector('.cart__product-delete');
    buttonDelete.addEventListener('click', () => {
        while (cartProducts.firstChild) {
            cartProducts.firstChild.remove();
        }
        localStorage.removeItem('cart');
        document.querySelector('.cart').setAttribute('hidden', 'true');
    });
}

function showCartProduct() {
    let cartData = getCartData();
    let cartProduct = '';
    
    if (cartData !== null) {
        document.querySelector('.cart').removeAttribute('hidden');
        for(var items in cartData) {
            cartProduct += `
                    <div class="cart__product" data-id=${items}>
                        <img class="cart__product-image" src="${cartData[items][0]}">
                        <div class="cart__product-count">${cartData[items][1]}</div> 
                    </div>    
                `;
        }
        deleteProduct();
        cartProducts.innerHTML = cartProduct;
    } else {
        document.querySelector('.cart').setAttribute('hidden', 'true');
    }

    
}

showCartProduct();

Array.from(products).findIndex((product) => {
    const addButton = product.querySelector('.product__add');
    addButton.addEventListener('click', () => {
        addCartProduct(product);
        showCartProduct(product);
    });
});

Array.from(productControls).findIndex((productControl) => {
    const productQuantityControls = productControl.querySelectorAll('.product__quantity-control');

   Array.from(productQuantityControls).forEach((productQuantityControl) => {
        productQuantityControl.addEventListener('click', (e) => {
            let quantityValue = productControl.querySelector('.product__quantity-value');
            if (e.target.classList.contains('product__quantity-control_inc')) {
                 quantityValue.innerText++;
            } else if (e.target.classList.contains('product__quantity-control_dec') && quantityValue.innerText > 1) {
                quantityValue.innerText--;
            } else {
                quantityValue.innerText = 1;
            }
        });
    });
});