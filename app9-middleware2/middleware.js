
module.exports = {

    checkLogin: function(req, res, next){
        if (req.session.currentUser){
            return next();
        }else{
            return res.status(403).send('Unauthorized. Please log in')
        }
    }

}


