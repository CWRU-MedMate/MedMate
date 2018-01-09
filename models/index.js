"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var configRetriever = require(__dirname + "/../utility/ConfigRetriever.js");
var config = configRetriever.getAllConfig();
var db = {};

if (config.db.use_env_variable) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  var sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    config.db
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Models/tables
db.User = require("./user.js")(sequelize, Sequelize);
db.Meds = require("./meds.js")(sequelize, Sequelize);
db.Events = require("./events.js")(sequelize, Sequelize);

//Relations
db.Events.belongsTo(db.Meds, {
  foreignKey: {
    allowNull: false
  },
  onDelete: "cascade"
});

db.Meds.hasMany(db.Events, {
  foreignKey: {
    allowNull: false
  },
  onDelete: "cascade"
});

db.Meds.belongsTo(db.User, {
  foreignKey: {
    allowNull: false
  },
  onDelete: "cascade"
});

db.User.hasMany(db.Meds, {
  foreignKey: {
    allowNull: false
  },
  onDelete: "cascade"
});

module.exports = db;
