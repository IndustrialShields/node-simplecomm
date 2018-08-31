const fs = require('fs');
const simplecomm = require('../index.js');

simplecomm.address = 0;

let buff;
let readStream = fs.createReadStream('./dummy.bin');
readStream.on('error', (err) => {
	console.error(err);
});
readStream.on('end', () => {
	simplecomm.fromBuffer(buff).forEach((packet) => {
		console.log('packet', packet);
		let data = packet.parse([
				{ name: 'byte' },
				{ name: 'num', type: 'UInt16' },
				{ name: 'alt', type: 'Int16' },
				{ name: 'text_2', type: 'String', len: 2 },
				{ name: 'invalidType', type: 'InvalidType' },
				{ name: 'text', type: 'String' },
				{ name: 'outOfRange' }
		]);
		console.log('data', data);
	});
});
readStream.on('data', (chunk) => {
	buff = buff ? Buffer.concat([buff, chunk], buff.length + chunk.length) : chunk;
});
