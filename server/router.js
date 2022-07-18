const Router = require("koa-router");
const router = new Router();
const { addGirl, getGirlsAll, getGirls06DPL, getGirls06Premier } = require("./controllers/players.controller");
const { addData, getData } = require("./controllers/report.controller");

router.get("/api/all_girls", getGirlsAll);
router.get("/api/girls_06DPL", getGirls06DPL);
router.get("/api/girls_06Premier", getGirls06Premier);

router.post("/api/add_girl", addGirl);

router.get("/api/all_reports", getData);
router.post("/api/add_report", addData);

module.exports = router;