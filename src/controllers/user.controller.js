let _userService = null;

class UserController {
    constructor({UserService}){
        _userService = UserService
    }

    async get(req, res){
        const {userId} = req.params;
        const users = await _userService.get(userId);
        return res.send(users);
    }

    async getAll(req, res){
        const {pageSize, pageNum} = req.query;
        const user = await _userService.getAll(pageSize, pageNum)
        return res.send(user);
    }

    async update(req, res){
        const {body} = req;
        const {userId} = req.params;
        const updateUser = await _userService.update(userId, body);
        return res.send(updateUser);
    }

    async delete(req, res){
        const {userId} = req.params;
        const deletedUser = await _userService.delete(userId);
        return res.send(deletedUser);

    }
}

module.exports = UserController