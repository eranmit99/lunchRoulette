
const Router = require('koa-router');
const dinerController = require("./controllers/Diner.controller");

module.exports = function () {
    let router = new Router();
    router.post("/addDiner", dinerController.addDiner);
    router.get("/getDiners", dinerController.getDiner);

    return router;
};