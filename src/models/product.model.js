const db = require('../configs/db');

class Product {
    constructor(product) {
        this.productId = product.id;
        this.productName = product.name;
        this.price = product.price;
        this.image = product.image;
    }
    static getAll(result) {
        db.query('SELECT * FROM product', (err, rows) => {
            if (err) throw err;
            result(rows);
        });
    }
    static getById(id, result) {
        db.query('SELECT * FROM product WHERE productId = ?', id, (err, row) => {
            if (err) throw err;
            console.log('Data found');
            if(row.length > 0){
                result(row[0])
            }
            else{
                result(null)
            }
        });
    }
    static addProd(productData, result) {
        db.query('INSERT INTO product(productName, price, image) VALUES(?, ?, ?)',
            [productData.name, productData.price, productData.image], (err, rows) => {
                if (err) throw err;
                else{
                    console.log('Data has been update');
                    result(null, rows);
                }   
            });
    }
    static updateProd(id, productData, result) {
        db.query('UPDATE product SET productName = ?, price = ?, image = ? WHERE productId = ?',
            [productData.name, productData.price, productData.image, id], (err, rows) => {
                if (err) throw err;
                else{
                    console.log('Data has been replace');
                    result(null, rows);
                }     
            });
    }
}

module.exports = Product;