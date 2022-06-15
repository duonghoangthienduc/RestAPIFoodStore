const CartModel = require("../models/cart.model");

exports.GetAll = (req, res) => {
    CartModel.getAll((err, carts) => {
      if (err) {
        res.send(err);
      } else {
        console.log("Data found");
        res.send(carts);
      }
    });
  };

exports.GetById = (req, res) =>{
  CartModel.getDetailByCart(parseInt(req.params.id),(err, carts) => {
    if (err) {
      res.send(err);
    } else {
      console.log("Data found");
      res.send(carts[0]);
    }
  });
}

exports.AddCart = (req, res) => {
    try {
      const cartData = new CartModel(req.body);
      if (req.body.constructor === Object && Object.keys(req.body).length == 0)
        throw new Error("Please fill data");
      else {
        CartModel.addCart(cartData, (err, cart) => {
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