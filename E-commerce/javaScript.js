// function decision(){
//     let mes = document.querySelector("#message");
//     alert("Add to cart successfully!");
    
// }


    // Cart array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(name, price, image) {

    let existingProduct =
        cart.find(item => item.name === name);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({
            name: name,
            price: Number(price),
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();

    showCartAlert();
}
    // setTimeout
    function showCartAlert() {

    const alertBox = document.getElementById("cart-alert");

    alertBox.classList.add("show");

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 2000);

}


    // Update cart information
    function updateCart() {

    let totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    let subtotal = cart.reduce(
        (total, item) =>
            total + (item.price * item.quantity),
        0
    );


    // Navbar cart count
    const cartCount =
        document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = totalItems;
    }


    // Navbar cart items
    const cartItems =
        document.getElementById("cart-items");

    if (cartItems) {
        cartItems.textContent =
            totalItems +
            (totalItems === 1 ? " Item" : " Items");
    }


    // Navbar subtotal
    const cartSubtotal =
        document.getElementById("cart-subtotal");

    if (cartSubtotal) {
        cartSubtotal.textContent =
            "Subtotal: ₱" +
            subtotal.toLocaleString("en-PH", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
    }
}

//    display product
function displayCart() {

    // Get latest cart
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Make sure price and quantity are numbers
    cart = cart.map(item => ({
        ...item,
        price: Number(item.price),
        quantity: Number(item.quantity)
    }));

    const cartProducts =
        document.getElementById("cart-products");

    const totalItems =
        document.getElementById("total-items");

    const cartTotal =
        document.getElementById("cart-total");

    // Empty cart
    if (cart.length === 0) {

        cartProducts.innerHTML = `
            <div class="text-center py-10">

                <p class="text-2xl font-bold">
                    Your cart is empty.
                </p>

                <a
                    href="index.html"
                    class="btn btn-primary mt-4">
                    Continue Shopping
                </a>

            </div>
        `;

        totalItems.textContent = "0";
        cartTotal.textContent = "₱0.00";

        return;
    }

    cartProducts.innerHTML = "";

    let totalQuantity = 0;
    let subtotal = 0;

    cart.forEach((item, index) => {

        let itemTotal =
            item.price * item.quantity;

        totalQuantity += item.quantity;
        subtotal += itemTotal;

        cartProducts.innerHTML += `

            <div class="card bg-base-100 shadow-sm">

                <div class="card-body">

                    <div class="flex flex-col md:flex-row
                                items-center gap-5">

                        <img
                            src="${item.image}"
                            alt="${item.name}"
                            class="w-32 h-32 object-cover rounded-xl"
                        >

                        <div class="flex-1 text-center md:text-left">

                            <h2 class="text-xl font-bold">
                                ${item.name}
                            </h2>

                            <p class="text-gray-500 mt-1">
                                Price:
                                ₱${item.price.toLocaleString("en-PH", {
                                    minimumFractionDigits: 2
                                })}
                            </p>

                            <p class="mt-1">
                                Quantity:
                                <strong>${item.quantity}</strong>
                            </p>

                            <p class="font-bold mt-1">
                                Total:
                                ₱${itemTotal.toLocaleString("en-PH", {
                                    minimumFractionDigits: 2
                                })}
                            </p>

                        </div>

                         

                        <!-- MINUS -->
                        <button
                            onclick="subtractQuantity(${index})"
                            class="btn btn-error btn-sm">
                            -
                        </button>

                        <!-- PLUS -->
                        <button
                            onclick="addQuantity(${index})"
                            class="btn btn-secondary btn-sm">
                            +
                        </button>

                        <!-- CHECKOUT -->
                        <button
                            class="btn btn-primary btn-sm">
                            Checkout
                        </button>

                    </div>

                </div>

            </div>
        `;
    });

    // =========================
    // CART SUMMARY
    // =========================

    totalItems.textContent = totalQuantity;

    cartTotal.textContent =
        "₱" +
        subtotal.toLocaleString("en-PH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
}
function addQuantity(index) {

    cart[index].quantity++;

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
    updateCart();
}
function subtractQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        // Quantity is 1 → remove product
        cart.splice(index, 1);
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
    updateCart();
}
//remove
function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

}
// Run when cart.html loads
if (document.getElementById("cart-products")) {
    displayCart();
}

if (document.getElementById("cart-count")) {
    updateCart();
}





function hover() {
    let image = document.querySelector(".hero img");

    

    setTimeout(() => {
        image.src = " https://media.gq.com/photos/69209042ab42e11f1fa2ca4e/16:9/w_2560%2Cc_limit/2193320154";
        
        // https://media.gq.com/photos/69209042ab42e11f1fa2ca4e/16:9/w_2560%2Cc_limit/2193320154
        
    }, 500);
}

function unhoverMe() {
    let image = document.querySelector(".hero img");

    

    setTimeout(() => {
        image.src = "https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_v38qr1kv/def_height/2700/def_width/2700/version/100012/type/1";
        
    }, 500);
}

// https://www.google.com/search?sca_esv=3d61bb1f6eb631d7&sxsrf=APpeQnuAQYfeQbK55PdYhXwJM91O6gV5jQ:1787066389140&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832VstEKsVDqPorK0Gahnm2nq-aQnTz_mBV-EZYISbLc-StUIq_PhL7hb0Qt0YiIGOHmbgdzA7WLFluE76f-Gw9-kn_vuuCCPCJpHu1gmKqCIuSZd8T1yAgM1fgsi1HxBhCFiENZXz4ZKHEBpVkmKN66EIoEw_7IqUjVjTZo0KvW1khG7vGQ&q=UA+Men+Halo+Tour+SI+Golf&sa=X&ved=2ahUKEwjr7MGKvaqWAxVp8DQHHaTSO1cQtKgLegQIFRAB&biw=1280&bih=551&dpr=1.5#sv=CAMSURoyKhBlLWgzbDBqSmVPc05IVnFNMg5oM2wwakplT3NOSFZxTToORXFZcFF5bnZiLWQ4N00gBCoXCgFzEhBlLWgzbDBqSmVPc05IVnFNGAEwARgHIKyluLoFSggQARgBIAEoAQ

// Set timeout with arrow functions
// setTimeout(() => {
//     let body = document.querySelector('body');
//     body.style.transition = "1s";
//     body.style.background = "black";
// },2000);
// runs after 2000 milliseconds(2s)

function hover(image, hoverImage) {
    image.src = hoverImage;
}

function unhoverMe(image) {
    image.src = image.dataset.original;
}