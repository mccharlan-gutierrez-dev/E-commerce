// Cart array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart information
    function updateCart() {

        // Calculate total quantity
        let totalItems = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );


        // Calculate subtotal
        let subtotal = cart.reduce(
            (total, item) => total + (item.price * item.quantity),
            0
        );


        // Update item count
        document.getElementById("cart-count").textContent =
            totalItems;


        // Update "X Items"
        document.getElementById("cart-items").textContent =
            totalItems + (totalItems === 1 ? " Item" : " Items");


        // Update subtotal
        document.getElementById("cart-subtotal").textContent =
            "Subtotal: ₱" + subtotal.toLocaleString("en-PH", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });

           

    }

//    display product
function displayCart() {

    // Get latest cart
    cart = JSON.parse(localStorage.getItem("cart")) || [];


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


                        <!-- Product Image -->

                        <img
                            src="${item.image}"
                            alt="${item.name}"
                            class="w-32 h-32 object-cover rounded-xl"
                        >


                        <!-- Product Information -->

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


                        <!-- Remove -->

                        <button
                            onclick="removeFromCart(${index})"
                            class="btn btn-error btn-sm">

                            Remove

                        </button>

                    </div>

                </div>

            </div>

        `;
    });


    totalItems.textContent = totalQuantity;


    cartTotal.textContent =
        "₱" +
        subtotal.toLocaleString("en-PH", {
            minimumFractionDigits: 2
        });

}

// add remove
function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();

}
