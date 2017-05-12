
const users = require('./users');

module.exports = {

    getUsers: function(req, res, next){
        return res.status(200).json(users);
    },

    getUserByIndex: function(req, res, next){
        let i = req.params.index;
        return res.status(200).json(users[i]);
    },

    login: function(req, res, next){
        let user = req.body;
        if (user.name == 'lpabst' && user.password == 'hello'){
            req.session.admin = true;
            res.status(200).send({
                admin: true,
                status: 'logged in as lpabst!'
            });
        }else{
            res.status(200).send({
                admin: false,
                status: 'Wrong username/password'
            });
        }
    }

}