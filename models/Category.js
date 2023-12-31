const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: 
    {
      // Integer
      type: DataTypes.INTEGER,
      // Doesn't allow null values
      allowNull: false,
      // Set as primary key
      primaryKey: true,
      // Uses auto increment
      autoIncrement: true
    },
    name:
    {
      // String
      type: DataTypes.STRING,
      // Doesn't allow null values
      allowNull: false,
      defaultValue: 'Shirt'
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
