var express = require("express");
var burgerORM = require("../models/burger.js");

var router = express.Router();


//select all burgers from the db and render them
router.get("/", function(req, res) {
    burgerORM.selectAll(function(data) {
        res.render("index", {burger:data});
 });
});


router.post("/", function(req, res) {
    burgerORM.insertOne(req.body.burger, function(result) {
        console.log(result);
        res.redirect("/");
  });
});

//update a burger's devoured status
router.put("/:id", function(req,res) {
    burgerORM.updateOne(req.params.id, function(result) {
        console.log(result);
        res.redirect("/");
  });
});

//delete a burger from the database
router.delete("/:id", function(req,res) {
    burgerORM.deleteOne(req.params.id, function(result) {
      res.redirect("/");
    });
});

module.exports = router;
