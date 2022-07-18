const data = require("../models/report.model");

const getData = async ctx => {
    try {
        const allData = await data.findAll();
        ctx.body = allData;
        ctx.status = 200;
    }
    catch (err) {
        ctx.body = err;
        ctx.status = 500;
    }
};

const addData = async ctx => {
    try {
        const { opponent_team, opponent_formation, opponent_score, home_team, home_formation, home_score, first_half, second_half } = ctx.request.body;
        await data.create({ opponent_team, opponent_formation, opponent_score, home_team, home_formation, home_score, first_half, second_half });
        ctx.body = "Match Report added.";
        ctx.status = 201;
    }
    catch (err) {
        ctx.status = 500;
        throw err;
    }
};

module.exports = {
    getData,
    addData
};