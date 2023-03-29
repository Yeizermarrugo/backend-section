module.exports = function(req, res, next) {
    const queryString = req.query;
    for(const key in queryString) {
        const length = queryString[key].length;
        const isvalid = length > 20 ? false : !isNaN(parseInt(queryString[key]))

        if(isvalid) {
            queryString[key] = parseInt(queryString[key])
        }
    }

    req.query = queryString;
    next();
}