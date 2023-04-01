const {Router} = require("express");
const {AuthMiddlware} = require("../middlewares")

module.exports = function ({CommentController}){
    const router = Router();

    router.get('/:commentId/unique', CommentController.get);
    router.get('/:ideaId', CommentController.getIdeaComments);
    router.post('/:ideaId',AuthMiddlware, CommentController.createComment);
    router.patch('/:commentId',AuthMiddlware, CommentController.update);
    router.delete('/:commentId',AuthMiddlware, CommentController.delete);

    return router;
}