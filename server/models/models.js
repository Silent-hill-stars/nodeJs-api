const sequelize = require("./../db")
const {DataTypes} = require("sequelize")

const User = sequelize.define("User", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.String, unique: true},
    password: {type: DataTypes.String}

});
