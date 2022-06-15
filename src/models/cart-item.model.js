const db = require('../configs/db');

class CartItem {
    constructor(cartItem){
        this.id = cartItem.id;
        this.cartId = cartItem.cartId;
        this.productId = cartItem.productId;
        this.quantity = cartItem.quantity;
        this.price = cartItem.price;
    }
    static getAll(result){
        db.query("SELECT cart.cartId, prod.productId, prod.productName , item.quantity, item.price "+
        "FROM cart_item as item, cart, product as prod "+
        "WHERE cart.cartId = item.cartId & prod.productId = item.productId",((err, rows)=>{
            if(err)throw err;
            result(rows);
        }))
    }
    static getDetailByCart(id, result){
        db.query("SELECT cart.cartId, prod.productId, prod.productName , item.quantity, item.price "+
        "FROM cart_item as item, cart, product as prod "+
        "WHERE cart.cartId = item.cartId && prod.productId = item.productId && item.cartId = ?",
        id,((err, row)=>{
            if(err)throw err;
            result(row[0]);
        }))
    }
    static addItem(itemData, result){
        
        console.log(itemData.map(item =>[item.cartId, item.productId, item.quantity, item.price ]))
        db.query("INSERT INTO cart_item(cartId, productId, quantity, price) VALUES ? ",
        [
            //  itemData.cartId, itemData.productId, itemData.quantity, itemData.price 
            itemData.map(item =>[item.cartId, item.productId, item.quantity, item.price ])
        ],((err, rows)=>{
            if(err) throw err;
            else{
                result(null, rows);
            }
        }))
    }

}

module.exports = CartItem;