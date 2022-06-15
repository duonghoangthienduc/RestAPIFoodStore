const product = require('./product.router');
const tag = require('./tag.router');
const productTag = require('./tag-product.router');
const productCategory = require('./category-product.route');
const category = require('./category.router');
const cartItem = require('./cart-item.router');
const userLogin = require('./user.router');
const cart = require('./cart.router');
const bill = require('./bill.router');

function routes(app){
    app.use('/product',product);
    app.use('/tag',tag);
    app.use('/product-tag',productTag);
    app.use('/category',category);
    app.use('/product-category',productCategory);
    app.use('/cart-detail',cartItem);
    app.use('/login',userLogin);
    app.use('/cart',cart);
    app.use('/bill',bill)
}

module.exports = routes;
