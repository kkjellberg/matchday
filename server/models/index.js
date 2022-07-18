const { Sequelize } = require("sequelize");

const settings = {
    host: "localhost",
    dialect: "postgres"
};

const sequelize = new Sequelize("players", "kkjell", "Abs10oulo", settings);
const sequelizeReport = new Sequelize("archive", "kkjell", "Abs10oulo", settings);

module.exports = {
    sequelize,
    sequelizeReport
}