var app = new Vue({
    el: '#app',
    data: {
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1;
        }
    }
});