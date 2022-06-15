const BillModel = require('../models/bill.model');

exports.GetAllBill = (req, res) => {
    BillModel.GetAll((err, bills) => {
      if (err) {
        res.send(err);
      } else {
        console.log("Data found");
        res.send(bills);
      }
    });
};

exports.AddNewBill = (req, res) => {
    try {
      const billData = new BillModel(req.body);
      if (req.body.constructor === Object && Object.keys(req.body).length == 0)
        throw new Error("Please fill data");
      else {
        BillModel.AddNewBill(billData, (err, bill) => {
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