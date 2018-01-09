var db = require("../models");

module.exports = function(app, passport) {
 
    app.post('/api/signup', 
    passport.authenticate('local-signup'),
    function(req, res) {
            res.json({
                success: true
            });
    });
    app.get('/api/logout', function(req, res){
        req.session.destroy(function(err) {
            res.redirect('/');
        }); 
    });
    app.get('/api/isloggedin', function(req, res){
        console.log("please work", req.isAuthenticated());
        if(req.isAuthenticated()){
            return res.json({authenticated: true});
        }else{
            return res.json({authenticated: false});
        };
    });
}