export const state = () => ({
  forSale: [{
      invId: '54ddfeedf',
      name: 'An Item',
      image: '~assets/img/86.png',
      price: 999
    },
    {
      invId: '89dfdgrfv',
      name: 'Thing',
      image: '~/assets/img/86.png',
      price: 1499
    },
    {
      invId: '7624sdft6',
      name: 'Doo-dad',
      image: '~/assets/img/86.png',
      price: 499
    },
    {
      invId: 'dfg21686',
      name: 'Other thing',
      image: '~/assets/img/86.png',
      price: 299
    },
  ],
  inCart: [],
})

export const mutations = {
  ADD_TO_CART(state, invId) {
    state.inCart.push(invId);
  },
  REMOVE_FROM_CART(state, index) {
    state.inCart.splice(index, 1);
  },
}

export const getters = {
  forSale: state => state.forSale,
  inCart: state => state.inCart,
}

export const actions = {
  addToCart(context, invId) {
    context.commit('ADD_TO_CART', invId);
  },
  removeFromCart(context, index) {
    context.commit('REMOVE_FROM_CART', index);
  },
}
