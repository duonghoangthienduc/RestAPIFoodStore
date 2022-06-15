const CategoryModel = require('../models/category.model');

exports.GetAll = (req, res)=>{
    CategoryModel.getAllCategory((err, category)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log('Data found');
            res.send(category);
        }
    })
}

exports.GetCategoryById = (req, res)=>{
    CategoryModel.getCategoryById(parseInt(req.params.id),(err, category)=>{
        if(err){
            res.send(err);
        }
        else{
            console.log('Data found');
            res.send(category);
        }
    })
}