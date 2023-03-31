const {Router} = require("express");
const {ParseIntMiddleware, AuthMiddlware} = require("../middlewares")

module.exports = function ({IdeaController}){
    const router = Router();

    router.get('',[ParseIntMiddleware], IdeaController.getAll);
    router.get('/:ideaId', IdeaController.get);
    router.get('/:userId/all', IdeaController.getUserIdeas);
    router.post('', AuthMiddlware, IdeaController.create);
    router.patch('/:ideaId', AuthMiddlware, IdeaController.update);
    router.delete('/:ideaId', AuthMiddlware, IdeaController.delete);
    router.post(':ideaId/upvote',AuthMiddlware, IdeaController.upvoteIdea);
    router.post(':ideaId/downvote', AuthMiddlware, IdeaController.downvoteIdea);

    return router;
}