const {Router} = require("express");
const {AuthMiddlware, ParseIntMiddleware} = require("../middlewares")

module.exports = function ({UserController}){
    const router = Router();

    router.get('', [AuthMiddlware, ParseIntMiddleware], UserController.getAll);
    router.get('/:userId', UserController.get);
    router.patch('/:userId', UserController.update);
    router.delete('/:userId', UserController.delete);

    return router;
}