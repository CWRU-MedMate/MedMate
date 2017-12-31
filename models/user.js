module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      login_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email_address: {
        type: DataTypes.STRING,
        validate: {
          isEmail_address: true
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
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active"
      }
    });
  
    User.associate = function(models) {
      User.hasMany(models.Meds, {
        foreignKey: { allowNull: false },
        onDelete: "cascade"
      });
    };
  
    return User;
  };
  