/*
const WebSocketServer = require('ws');
 
const wss = new WebSocketServer.Server({ port: 8080 });

wss.on('connection', ws => {
//wss.on('connection', function connection(ws, req) {

    //const ip = req.socket.remoteAddress;
    //console.log('connection: %s', ip);
    console.log('connection');

    ws.send('Hello');

    ws.on('message', (message) => {
        console.log('Received: %s', message);
        ws.send('Received: ' + message);
    });
    
    ws.on('close', () => {
        console.log('close');
    });

    ws.onerror = function () {
        console.log("Some Error occurred")
    }

});
*/



var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

//app.use(function (req, res, next) {
//    console.log('middleware');
//    req.testing = 'testing';
//    return next();
//});

//app.get('/', function(req, res, next){
//    console.log('get route', req.testing);
//    res.end();
//});

app.ws('/ws', function(ws, req) {
    ws.on('message', function(msg) {
        console.log("MESSAGE:", msg);
        msg = JSON.parse(msg);
        if (msg.op == 'ping') {
            ws.pong(JSON.stringify({ op: "pong", timestamp: new Date().getTime() }));
        }
    });
});

app.listen(8080);

/*
var router = express.Router();

router.ws('/', function(ws, req) {
    ws.on('message', function(msg) {
        ws.send(msg);
    });
});

app.use("/ws", router);
*/
