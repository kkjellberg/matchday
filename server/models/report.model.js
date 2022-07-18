const { sequelizeReport } = require("./index");
const { DataTypes } = require("sequelize");

const data = sequelizeReport.define("data", {
    opponent_team: DataTypes.STRING,
    opponent_formation: DataTypes.STRING,
    opponent_score: DataTypes.STRING,
    home_team: DataTypes.STRING,
    home_formation: DataTypes.STRING,
    home_score: DataTypes.STRING,
    first_half: DataTypes.STRING,
    second_half: DataTypes.STRING
});

data.sync();

module.exports = data;