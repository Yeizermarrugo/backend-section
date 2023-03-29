const {generateToken} = require('../helpers/jwt.helper');
let _userService = null;

class AuthService {
    constructor({UserService}){
        _userService = UserService
    }

    async signUp(user){
        const {username} = user
        const userExists = await _userService.getUserByUsername(username);
         if(userExists){
            const error = new Error();
            error.status = 401;
            error.message = 'Username already exists'
            throw error;
         }

         return await _userService.create(user)
    }

    async signIn(user){
        const {username, password} = user;
        const userExists = await _userService.getUserByUsername(username);
        if(!userExists){
            const error = new Error();
            error.status = 404;
            error.message = 'User does not exists';
            throw error;
        }
        const validPassword = userExists.comparePassword(password);
        if(!validPassword){
            const error = new Error();
            error.status = 400;
            error.message = 'Invalid Password'
            throw error;
        }

        const userToEncode = {
            username: userExists.username,
            id: userExists._id,
        }

        const token = generateToken(userToEncode);

        return {token, user: userExists}
    }
}

module.exports = AuthService