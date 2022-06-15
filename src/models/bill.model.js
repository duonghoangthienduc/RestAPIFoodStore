const db = require('../configs/db');

class Bill {
    constructor(bill){
        this.billId = bill.billId;
        this.userId = bill.userId;
        this.cartId = bill.cartId;
        this.dateCreate = bill.dateCreate;
    }

    static GetAll(result){
        db.query('SELECT * FROM bill', (err, rows)=>{
            if(err) throw err;
            else{
                return result(rows);
            }
        })
    }

    static AddNewBill(billData, result){
        db.query('INSERT INTO bill(billId ,userId, cartId, dateCreate) VALUES(?, ? , ? , now())',
                [billData.billId, billData.userId, billData.cartId],(err, rows)=>{
                    if(err) throw err;
                    else{
                        return result(null, rows);
                    }
                })
    }
}

module.exports = Bill;