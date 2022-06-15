const db = require('../configs/db');

class Tag {
    constructor(tag){
        this.tagId = tag.tagId;
        this.tagName = tag.tagName;
    }
    static getAll(result) {
        db.query('SELECT * FROM tag', (err, rows) => {
            if (err) throw err;
            result(rows);
        });
    }
    static getById(id, result) {
        db.query('SELECT * FROM tag WHERE tagId = ?', id, (err, row) => {
            if (err) throw err;
            else{
                console.log('Data found');
                result(row[0]); 
            }
            
        });
    }
    static addTag(tagData,result){
        db.query('INSERT INTO tag(tagName) VALUE(?)',[tagData.tagName], (err, rows)=>{
            if(err) throw err;
            else{
                console.log('Data has been update');
                result(null, rows);
            }   
        } )
    }
    static updateTag(id,tagData,result){
        db.query('UPDATE tag SET tagName = ? WHERE tagId = ?',[tagData.tagName, id], (err, rows)=>{
            if(err) throw err;
            else{
                console.log('Data has been replace');
                result(null, rows);
            }   
        } )
    }
}

module.exports = Tag;