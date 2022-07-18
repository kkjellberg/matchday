const { sequelize } = require(".");
const { DataTypes } = require("sequelize");

const boys = sequelize.define("boys", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    team_name: DataTypes.STRING
});

const girls = sequelize.define("girls", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    team_name: DataTypes.STRING
});

boys.sync();
girls.sync();

module.exports = {
    boys,
    girls
};