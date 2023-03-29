let _commentService = null;

class CommentController {
    constructor({CommentService}){
        _commentService = CommentService
    }

    async get(req, res){
        const {commentId} = req.params;
        const comments = await _commentService.get(commentId);
        return res.send(comments);
    }

    
    async update(req, res){
        const {body} = req;
        const {commentId} = req.params;
        const updateComment = await _commentService.update(commentId, body);
        return res.send(updateComment);
    }

    async delete(req, res){
        const {commentId} = req.params;
        const deletedUser = await _commentService.delete(commentId);
        return res.send(deletedUser);

    }

    async getIdeaComments(req, res){
        const {ideaId} = req.params;
        const comments = await _commentService.getIdeaComments(ideaId);
        return res.send(comments);
    }

    async createComments(req, res){
        const {body} = req;
        const {ideaId} = req.params;
        const createdComment = await _commentService.createComments(ideaId, body);
        return res.status(201).send(createdComment);
    }
}

module.exports = CommentController