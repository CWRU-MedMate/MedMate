var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];

module.exports = {
  getAllConfig: function() {
    return config;
  },
  getConfigByName: function(name) {
    return config[name];
  }
};