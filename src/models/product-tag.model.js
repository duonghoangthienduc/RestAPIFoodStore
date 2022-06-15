const db = require('../configs/db');

class ProductTag{
    constructor(ProductTag){
        this.productId = ProductTag.productId;
        this.tagId = ProductTag.tagId;
    }
    static getAllProductTag(result){
        db.query('SELECT pr.productId, pr.productName, pr.price, pr.image, tg.tagId, tg.tagName FROM product pr, product_tag prtg, tag tg '+
        'WHERE pr.productId = prtg.productId && tg.tagId = prtg.tagId',
        (err, rows)=>{
            if(err) throw err;
            else{
                console.log('Found data');
                result(rows);
            }
            
        })
    }
    static getProductByTag(id,result){
        db.query('SELECT pr.productId, pr.productName, pr.price, pr.image, tg.tagId, tg.tagName '+
        ' FROM product pr, product_tag prtg, tag tg'+
        ' WHERE pr.productId = prtg.productId && tg.tagId = prtg.tagId && tg.tagId = ?',id,
        (err, rows)=>{
            if(err) throw err;
            else{
                console.log('Found data');
                result(rows);
            }
            
        })
    }
    static getTagByProduct(id, result){
        db.query('SELECT pr.productId, pr.productName, pr.price, pr.image, tg.tagId, tg.tagName'+
        ' FROM product pr, product_tag prtg, tag tg'+
        ' WHERE pr.productId = prtg.productId && tg.tagId = prtg.tagId && pr.productId = ?',id,
        (err, rows)=>{
            if(err) throw err;
            else{
                console.log('Found data');
                result(rows);
            }
            
        })
    }
}

module.exports = ProductTag;