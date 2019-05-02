// Dropdown Menu
$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});



// filter

(function () {
    const filterBtn = document.querySelectorAll(".filter-btn");


    filterBtn.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            this.classList.add("active");

            const value = event.target.dataset.filter;

            const items = document.querySelectorAll(".store-item");

            items.forEach(function (items) {
                if (value === "all") {
                    items.style.display = "block";
                } else {
                    if (items.classList.contains(value)) {
                        items.style.display = "block";
                    } else {
                        items.style.display = "none";

                    }
                }

            });
        });

    });

})();


// show cart

// (function () {

//     const cartInfo = document.querySelector("cart-info");

//     const cart = document.querySelector("cart");

//     cartInfo.addEventListener("onmouseover", function () {
//         cart.classList.toggle("show-cart");
//     });

// })();

// Working on the cart

// (function () {
//     const cartBtn = document.querySelectorAll("store-item-button");


//     cartBtn.forEach(function (btn) {
//         btn.addEventListener("click", function (event) {
//             event.preventDefault();

//             if (event.target.parentElement.classList.contains("store-item-button")) {


//                 let fullPath = event.target.parentElement.previousElementSibling.src;

//                 let pos = fullPath.idexOf("img") + 3;


//                 let partPath = fullPath.slice(pos);

//                 const item = {};
//                 item.img = "img-cart${partPath}";
//                 let name = event.target.parentElement.parentElement.nextElement.children[0].textContent;

//                 let finalPrice = price.slice(1).trim();


//                 item.price = finalPrice;

//                 const cartItem = document.createElement("div");




//             }

//         });

//     });
// })();