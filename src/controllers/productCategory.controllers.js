const ProductCategoryModel = require('../models/product-category.model');

exports.GetAll = (req, res)=>{
    ProductCategoryModel.getAll((err, products)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log('Data found');
            res.send(products);
        }
    })
}

exports.GetProductsByCategory = (req, res)=>{
    ProductCategoryModel.getProductByCategory(parseInt(req.params.id) ,(err, products)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log('Data found');
            res.send(products);
        }
    })
}