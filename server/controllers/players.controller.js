const { boys, girls } = require("../models/player.model");

const getGirlsAll = async ctx => {
    try {
        const everyone = await girls.findAll();
        ctx.body = everyone;
        ctx.status = 200;
    }
    catch (err) {
        ctx.body = err;
        ctx.status = 500;
    }
};

const getGirls06DPL = async ctx => {
    try {
        const roster = await girls.findAll({
            where: {
                team_name: "06DPL"
            }
        });
        ctx.body = roster;
        ctx.status = 200;
    }
    catch (err) {
        ctx.body = err;
        ctx.status = 500;
    }
};

const getGirls06Premier = async ctx => {
    try {
        const roster = await girls.findAll({
            where: {
                team_name: "06Premier"
            }
        });
        ctx.body = roster;
        ctx.status = 200;
    }
    catch (err) {
        ctx.body = err;
        ctx.status = 500;
    }
};

const addGirl = async ctx => {
    try {
        const { first_name, last_name, team_name } = ctx.request.body;
        await girls.create({ first_name, last_name, team_name });
        ctx.body = "Player added.";
        ctx.status = 201;
    }
    catch (err) {
        ctx.status = 500;
        throw err;
    }
};

module.exports = {
    addGirl,
    getGirlsAll,
    getGirls06DPL,
    getGirls06Premier
};