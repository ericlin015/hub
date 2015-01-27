var path = require("path");
var express = require('express');
var app = express();
var scoreBoard = [{
    name: 'Eric',
    score: '50'
},{
    name: 'Erac',
    score: '40'
},{
    name: 'Erika',
    score: '60'
}];

app.use(express.static(path.resolve(path.dirname(require.main.filename), 'public')));

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

app.get('/getScore', function(req, res) {
    res.status(200).json({
        scoreBoard: scoreBoard
    });
})