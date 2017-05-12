
const users = require('./users');

module.exports = {

    getUsers: function(req, res, next){
        return res.status(200).json(users);
    },

    getUserByIndex: function(req, res, next){
        let i = req.params.index;
        return res.status(200).json(users[i]);
    },

}