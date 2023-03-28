const mongoose = require('mongoose');
const {Schema} = mongoose;
const {compareSync, hashSync, genSaltSync} = require('bcrypt');


const UserSchema = new Schema({
    name: {type: 'string', required: true},
    username: {type: 'string', required: true},
    password: {type: 'string', required: true},
});

UserSchema.methods.toJSON = function(){
    let user = this.toObject();
    delete user.password;
    return user;
};

UserSchema.methods.comparePassword = function(password){
    return compareSync(password, this.password)
};

UserSchema.pre('save', async function(next){
    const user = this;

    if(!user.isModified("password")){
        return next();
    }

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
})

module.exports = mongoose.model('user', UserSchema)