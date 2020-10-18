var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(col, cb) {
        orm.insertOne(col, function(res) {
            cb(res);
        });
    },
    updateOne: function(value, cb) {
        orm.update(value, function(res) {
            cb(res);
        });
    }
};
module.exports = burger;