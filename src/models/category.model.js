const db = require('../configs/db');

class Category{
    constructor(category){
        this.categoryId = category.categoryId;
        this.categoryName = category.categoryName;
    }
    static getAllCategory(result){
        db.query('SELECT * FROM category', (err, rows)=>{
            if(err) throw err;
            result(rows);
        })
    }
    static getCategoryById(id, result){
        db.query('SELECT * FROM category where categoryId = ?',id,(err, row)=>{
            if(err) throw err;
            result(row[0]);
        })
    }
    
}

module.exports = Category;