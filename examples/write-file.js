const fs = require('fs');
const simplecomm = require('../index.js');

simplecomm.address = 12;

let file = fs.createWriteStream('./dummy.bin');
simplecomm.send(file, [0x01, 0x02, 0x03, 0x04, 0x05, 0x45, 0x46, 0x47, 0x48, 0x49], 0, 10, () => {
	file.end();
});
