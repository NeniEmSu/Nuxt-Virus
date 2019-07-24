import products from './products.js';

export default {
  getProducts: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 200);
    });
  },
  products: (action, productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productId);
      }, 100);
    });
  },
  buyProducts( cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) ?
      cb(): errorCb();
    }, 100);
  }
};
