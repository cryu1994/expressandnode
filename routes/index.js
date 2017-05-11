module.exports = function Route(app){
    app.get('/', function(req, res) {
        res.render("index");
    });
    app.post('/result', function(req, res) {
        PostData = {
            name: req.body.name,
            location: req.body.location,
            lanaguage: req.body.lanaguage,
            comment: req.body.comment

        };
        res.render("result", {user_info: PostData});
    });
};