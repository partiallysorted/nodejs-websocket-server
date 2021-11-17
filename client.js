const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080/ws', {
});

ws.on('open', function open() {
    ws.send('client open');
});

ws.on('message', function message(data) {
    console.log('message: %s', data);
});

ws.on('close', function open() {
    ws.send('client close');
});
