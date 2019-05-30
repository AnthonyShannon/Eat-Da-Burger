var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burger_name, cb) {
        orm.insertOne(burger_name, function(res) {
            cb(res);
        });
    },
    updateOne: function(burgerName, cb) {
        orm.updateOne(burgerName, function(res) {
            cb(res);
        });
    },
    deleteOne: function(burgerName, cb) {
        orm.deleteOne(burgerName, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;