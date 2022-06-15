const db = require('../configs/db');

class  User{
    constructor(user){
        this.userId = user.userId;
        this.userName = user.userName;
        this.userPass = user.userPass;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.middleName = user.middleName;
        this.phone = user.phone;
        this.email = user.email;
        this.address = user.address;
    }
    static getAll(result) {
        db.query('SELECT userId, lastName, middleName, firstName, phone, email, address FROM user', 
        (err, rows) => {
            if (err) throw err;
            result(rows);
        });
    }

    static getCustomer(result){
        db.query('SELECT userId, lastName, middleName, firstName, phone, email, address'+
        ' FROM user WHERE userName IS NULL && userPass IS NULL', (err, rows) => {
            if (err) throw err;
            result(rows);
        });
    }

    static getByNameAndPass(userData, result) {
        db.query('SELECT * FROM user WHERE userName = ? && userPass = ?',
        [userData.userName, userData.userPass], (err, rows) => {
            if (err) throw err;
            else{
                if(rows.length > 0){
                    console.log('Data found', rows.length);
                    return result(rows[0]); 
                }
                else{
                    return result('Wrong password or username');
                }                
            }
            
        });
    }
    
    static getCustomerById(id, result){
        db.query('SELECT userId, lastName, middleName, firstName, phone, email, address '+
        'FROM user WHERE userId= ?',id, (err, rows) => {
            if (err) throw err;
            else{
                if(rows.length > 0){
                    console.log('Data found');
                    return result(rows[0]); 
                }
                else{
                    return result('Data not found');
                }                
            }           
        });
    }
    
    static getCustomerOrderByPhoneNumberAndAddress(userData, result){
        db.query('SELECT userId, lastName, middleName, firstName, phone, email, address '+
        'FROM user WHERE phone = ? && address = ?',
        [userData.phone, userData.address], (err, rows) => {
            if (err) throw err;
            else{
                if(rows.length > 0){
                    console.log('Data found');
                    return result(rows[0]); 
                }
                else{
                    return result('Data not found');
                }                
            }           
        });
    }
    
    static addCustomer(userData,result){
        db.query('INSERT INTO user(userId, firstName, lastName, middleName, phone, email, address)'+
        ' VALUES(?,?,?,?,?,?,?)',
        [   userData.userId, userData.firstName, userData.lastName, 
            userData.middleName, userData.phone, 
            userData.email, userData.address
        ],(err, rows)=>{
            if(err) throw err;
            else{
                console.log('Data has been update');
                result(null, rows);
            }   
        } )
    }

}

module.exports = User;