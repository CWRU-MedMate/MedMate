module.exports = function(sequelize, DataTypes){

  var User = sequelize.define("User", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    user_name: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    login_name: {
      type: DataTypes.STRING
    },
    email_address: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE
    },
    active_status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    }
  });


return User;
};