if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

module.exports = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    APPLICATION_NAME: process.env.APPLICATION_NAME
}