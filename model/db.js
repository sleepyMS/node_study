var Sequelize = require("sequelize");
var sequelize = new Sequelize("node_study", "root", "ms011017", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    timezone: "+09:00",
    define: {
        charset: "utf8",
        collate: "utf8_general_ci",
        timestamps: true,
        freezeTableName: true
    }
})


var db = {};
db.users = sequelize.import(__dirname + "/users.js");
db.reviews = sequelize.import(__dirname + "/reviews.js");


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;