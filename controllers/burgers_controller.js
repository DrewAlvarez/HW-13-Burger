var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers: data });
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {
        res.json({ id: result.insertId });
    });
});
module.exports = router;