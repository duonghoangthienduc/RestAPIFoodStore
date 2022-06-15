const cartItemModel = require('../models/cart-item.model');

exports.GetAll = (req, res)=>{
    cartItemModel.getAll((err, items)=>{
        if(err){
            res.send(err); 
        }
        else{
            res.send(items);
        }
    })
}

exports.GetItem = (req, res)=>{
    cartItemModel.getDetailByCart( parseInt(req.params.id), ((err, items)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send(items);
        }
    }))
}

exports.AddCartItem = (req, res) => {
    try {
      const cartData = req.body.Cart;

      if (req.body.constructor === Object && Object.keys(req.body).length == 0)
        throw new Error("Please fill data");
      else {
        cartItemModel.addItem(cartData, (err, cartItem) => {
          if (err) throw err;
          else {
            return res.status(200).send({ message: "Add success" });
          }
        });
      }
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };