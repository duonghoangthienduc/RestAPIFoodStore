const UserModel = require('../models/user.model');

exports.getUser = (req, res) =>{
    UserModel.getAll((err, users) => {
        if (err) {
          res.send(err);
        } else {
          console.log("Data found");
          res.send(users);
        }
      });
};

exports.getCustomer = (req, res)=>{
    UserModel.getCustomer((err, cus)=>{
        if (err) {
            res.send(err);
          } else {
            console.log("Data found");
            res.send(cus);
          }
    })
}

exports.getLogging = (req, res) =>{
    try {
        const UserData = new UserModel(req.body);
        console.log(UserData);
        if(req.body.constructor === Object && Object.keys(req.body).length ==0)
            throw new Error("Please fill data");
        else{
            UserModel.getByNameAndPass(UserData, (err, user)=>{
                if(err){
                    res.send(err);
                }
                else{
                    return res.status(200).send(user);
                }
        })
    }
    } catch (error) {
        return res.status(400).send({error: error.message});
    }
};

exports.AddNewCustomer = (req, res) =>{
    try {
        const UserData = new UserModel(req.body);
        if(req.body.constructor === Object && Object.keys(req.body).length ==0)
            throw new Error("Please fill data");
        else{
            UserModel.addCustomer(UserData, (err, user)=>{
                if(err){
                    res.send(err);
                }
                else{
                    return res.status(200).send(user);
                }
        })
    }
    } catch (error) {
        return res.status(400).send({error: error.message});
    }
};