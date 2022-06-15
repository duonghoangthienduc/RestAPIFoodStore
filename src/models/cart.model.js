const db = require('../configs/db');

class Cart {
    constructor(cart){
        this.cartId = cart.cartId;
        this.totalPrice = cart.totalPrice;
    }

    static getAll(result){
        db.query('SELECT * FROM cart', (err, rows)=>{
            if(err) throw err;
            else{
                return result(rows);
            }
        })
    }

    static getDetailByCart(id, result){
        db.query('SELECT * FROM cart WHERE cartId = ?',id, (err, rows)=>{
            if(err) throw err;
            else{
                return result(rows);
            }
        })
    }
    static addCart(cartData, result){
        db.query('INSERT INTO cart(cartId, totalPrice) VALUES(?, ?)',
                [cartData.cartId, cartData.totalPrice],(err, rows)=>{
                    if(err) throw err;
                    else{
                        return result(null, rows);
                    }
                })
    }
    
}

module.exports = Cart;