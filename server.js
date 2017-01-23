var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('mfrp', ['details']);
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.post('/UserData', function(req, res, next) {

    var user = req.body;

    console.log(req.body);

    db.details.findOne({
            username: user.uname,
            password: user.password
        },
        function(err, docs) {

            if (err) {
                console.log("error");
                return next(err);
            }

            console.log(docs);
            res.json(docs);
        });
});

app.get('/accounts', function(req, res) {

    console.log("get req accepetd bro");
    db.accounts.find(function(err, docs) {
        console.log(docs);
        res.json(docs);

    });
});

app.get('/profiles/:id', function(req, res) {

    console.log("this is for profile details");
    console.log(req.params.id);
    var id = req.params.id;
    db.details.findOne({
        _id: mongojs.ObjectId(id)
    }, function(err, docs) {
        res.json(docs);
    });

});

app.post('/update', function(req, res, next) {

    var whitelist = ['company', 'firstname', 'lastname', 'username', 'newPassword', 'email'];

    var profileData = req.body;
    console.log(profileData);

    var updater = {};
    for (var ix in whitelist) {
        var field = whitelist[ix];
        if (profileData.hasOwnProperty(field)) {
            if (field == 'newPassword') {
                if (profileData.newPassword == profileData.newCPassword) {
                    updater['password'] = profileData[field];
                }
            } else
                updater[field] = profileData[field];
        }
    }

    db.details.update({
        _id: mongojs.ObjectId(profileData._id)
    }, {
        $set: updater
    }, function(err, updated) {
        if (err || !updated) console.log("User not updated");
        else console.log("User updated");
    });


    db.details.findOne({
        _id: mongojs.ObjectId(profileData._id)
    }, function(err, docs) {
        console.log(docs);
    });

    res.status(200).send('Profile has been updated');
});
app.listen(8000);
console.log("server running royyy on port 8000");