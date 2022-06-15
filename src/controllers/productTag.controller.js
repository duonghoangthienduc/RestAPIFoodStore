const ProductTagModel = require('../models/product-tag.model');

exports.GetAll = (req, res)=>{
    ProductTagModel.getAllProductTag((err,product)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log('Data found');
            res.send(product);
        }
    })
}
exports.GetByTag = (req, res)=>{
    ProductTagModel.getProductByTag(parseInt(req.params.id) ,(err,product)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log('Data found');
            res.send(product);
        }
    })
}
exports.GetByProduct = (req, res)=>{
    ProductTagModel.getTagByProduct(parseInt(req.params.id) ,(err,tag)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log('Data found');
            res.send(tag);
        }
    })
}