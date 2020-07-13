const router = require('express').Router();
const verify = require('./authority_verify');
const MongoClient = require('mongodb').MongoClient;
const buses = require('../model/bus');
const { ReadStream } = require('fs');


router.post('/reschedule', verify, (req, res) => {

  var url = "mongodb://localhost:27017/";

  const type = String(req.body.type);
  const new_bus_no = Number(req.body.new_bus_no);
  const prev_bus_no = Number(req.body.prev_bus_no);
  const quantitys = Number(req.body.quantity);
  const number = Number(req.body.number);
  const time = String(req.body.time)
  const source = String(req.body.source)



  if (type == 'bus') {

    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("ibm6");
      var myquery = { number: prev_bus_no };
      var newvalues = { $inc: { quantity: -quantitys } };
      dbo.collection("buses").updateOne(myquery, newvalues, function (err, result) {
        if (err) throw err;
        res.status(200)
      });

      var myquerys = { number: new_bus_no };
      var newvaluess = { $inc: { quantity: +quantitys } };
      dbo.collection("buses").updateOne(myquerys, newvaluess, function (err, result) {
        if (err) throw err;
        res.status(200).send('updated')
        db.close();
      });
    });
  }
  else {


    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myquery = { number: number };
      var newvalues = { $set: { source: source } };
      dbo.collection("transportations").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
    });
  };
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: 'Mountain 21' };
    dbo.collection("transportations").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  })
});


router.post('/reschedule', verify, (req, res) => {

  var url = "mongodb://localhost:27017/";

  const type = String(req.body.type);
  const new_train_no = Number(req.body.new_train_no);
  const prev_train_no = Number(req.body.prev_train_no);
  const quantitys = Number(req.body.quantity);
  const number = Number(req.body.number);
  const time = String(req.body.time);
  const source = String(req.body.source);
  const new_train_name = String(req.body.new_train_name);
  const prev_train_name = String(req.body.prev_train_name); const name = String(req.body.name);



  if (type == 'train') {

    MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
      if (err) throw err;
      var dbo = db.db("ibm6");
      var myquery = { number: prev_train_no, name: prev_train_name };
      var newvalues = { $inc: { quantity: -quantitys } };
      dbo.collection("train").updateOne(myquery, newvalues, function (err, result) {
        if (err) throw err;
        res.status(200)
      });

      var myquerys = { number: new_train_no, name: new_train_name };
      var newvaluess = { $inc: { quantity: +quantitys } };
      dbo.collection("train").updateOne(myquerys, newvaluess, function (err, result) {
        if (err) throw err;
        res.status(200).send('updated')
        db.close();
      });
    });
  }
  else {


    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      var myquery = { number: number, name: name };
      var newvalues = { $set: { source: source } };
      dbo.collection("transportations").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
    });
  };
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: 'Mountain 21' };
    dbo.collection("transportations").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  })
})

module.exports = router