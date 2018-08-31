const net = require('net');
const simplecomm = require('../index.js');

simplecomm.address = 12;

let client = new net.Socket();
client.on('connect', () => {
	console.log('connected to server');
	simplecomm.send(client, [0x01, 0x02, 0x03, 0x04], 0, 10);
});
client.on('data', (data) => {
	simplecomm.fromBuffer(data).forEach(packet => {
		console.log('packet received:', packet);
	});
});
client.on('close', () => {
	console.log('connection closed');
});
client.on('error', (err) => {
	console.error('error', err);
});
client.connect({
	'host': '10.20.30.100',
	'port': 64321,
});
