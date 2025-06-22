const dotenv = require('dotenv').config()
const request = require('request')

var backend_uri  = process.env.BACKEND_URI
var frontend_uri = process.env.FRONTEND_URI
var client_id = process.env.CLIENT_ID
var client_secret = process.env.CLIENT_SECRET

exports.getLogin = (req, res) => {
    var state = "ABCDEFGHIJKLMNILA";
    var scope = 'user-read-private user-read-email user-top-read user-follow-read user-read-recently-played playlist-read-private playlist-read-collaborative';
    res.redirect('https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: backend_uri + "/callback",
        state: state
    }))
}

exports.getCallback = (req, res) => {
    var code = req.query.code || null;
    var state = req.query.state || null;
    if (state === null) {
        res.redirect('/#' +
            querystring.stringify({
            error: 'state_mismatch'
        }));
      } else {
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
            code: code,
            redirect_uri: backend_uri + "/callback",
            grant_type: 'authorization_code'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
            json: true
        };
        request.post(authOptions, (error, response, body) => {
            if(!error || response.statusCode === 200) {
                console.log(body);
                res.redirect(frontend_uri + "#" + new URLSearchParams({ access_token: body.access_token, refresh_token: body.refresh_token }));
            }
        });        
    }
}

exports.getRefreshToken = (req, res) => {
    var refresh_token = req.query.refresh_token;
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
    },
        json: true
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token,
            refresh_token = body.refresh_token || refresh_token;
            res.send({
                'access_token': access_token,
                'refresh_token': refresh_token
            });
        }
    });
}