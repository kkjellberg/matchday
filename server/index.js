const Koa = require("koa");
const cors = require("koa-cors");
const parser = require("koa-bodyparser");
const router = require("./router");

const port = 6060;
const app = new Koa();

app.use(cors());
app.use(parser());
app.use(router.routes());

app.listen(port, () => {
    console.log(`Server listening at port ${port}`)
});