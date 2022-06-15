const db = require('../configs/db');

class ProductCategory{
    constructor(productCategory){
        this.productId = productCategory.productId;
        this.categoryId = productCategory.categoryId;
    }
    static getAll(result){
        db.query('SELECT prd.productId, prd.productName, prd.price, prd.image, '+
                 'cate.categoryId, cate.categoryName '+  
                 'FROM product_category as prdcate, product as prd, category as cate '+
                 'WHERE prd.productId = prdcate.productId '+
                 '&& cate.categoryId = prdcate.categoryId',(err, rows)=>{
            if(err) throw err;
            else{
                result(rows);
            }
            
        })
    }
    static getProductByCategory(id,result){
        db.query('SELECT prd.productId, prd.productName, prd.price, prd.image, '+
                 'cate.categoryId, cate.categoryName '+  
                 'FROM product_category as prdcate, product as prd, category as cate '+
                 'WHERE prd.productId = prdcate.productId '+
                 '&& cate.categoryId = prdcate.categoryId '+
                 '&& cate.categoryId = ?',id,(err, rows)=>{
            if(err) throw err;
            else{
                result(rows);
            }
        })
    }

}

module.exports = ProductCategory;