
const Router = require('koa-router');
const dinerController = require("./controllers/Diner.controller");

module.exports = function () {
    let router = new Router();
    router.post("/api/addDiner", dinerController.addDiner);
    router.get("/api/getDiners", dinerController.getDiner);

    return router;
};