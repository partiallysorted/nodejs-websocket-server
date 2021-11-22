const WebSocket = require('ws');

var pingCallback;

function ping() {
    ws.ping(JSON.stringify({ op: "ping", timestamp: Date.now() }));
    console.log("ping.");
}

const ws = new WebSocket('ws://localhost:8080/ws', {
});

ws.on('open', function open() {
    pingCallback = setInterval(ping, 3000);
    console.log('client open');
});

ws.on('message', function message(msg) {
    console.log('message: %s', msg);
});

ws.on('close', function close() {
    clearInterval(pingCallback);
    console.log('client close');
});
