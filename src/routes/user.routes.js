const {Router} = require("express");
const {AuthMiddlware, ParseIntMiddleware, CacheMiddleware} = require("../middlewares")
const {CACHE_TIME} = require("../helpers")

module.exports = function ({UserController}){
    const router = Router();

    router.get('',
        [
        AuthMiddlware,
        ParseIntMiddleware,
        CacheMiddleware(CACHE_TIME.ONE_HOUR)
        ],
        UserController.getAll);
    router.get('/:userId', UserController.get);
    router.patch('/:userId', AuthMiddlware, UserController.update);
    router.delete('/:userId', AuthMiddlware, UserController.delete);

    return router;
}