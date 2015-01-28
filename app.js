var path = require("path"),
    express = require('express'),
    app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(path.dirname(require.main.filename), 'public')));

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

app.get('/getScore', function(req, res) {
    res.status(200).json({
        scoreBoard: scoreBoard
    });
})