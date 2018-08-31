# SimpleComm for NodeJS

SimpleComm NodeJS implementation

## Gettings started

### Prerequisites

1. NodeJS 8.x

### Installation

```
npm install github:IndustrialShields/node-simplecomm
```

## Usage

Set device address
```
const simplecomm = require('simplecomm');
simplecomm.address = 0x12; // The default address is 0x00
```

Send a packet to ```destination``` through the stream ```stream```
```
simplecomm.send(stream, data, destination, type, callback);
```

Parse the buffer ```buffer``` as a packet
```
simplecomm.fromBuffer(buffer).forEach((packet) => {
	console.log('Packet');
	console.log('\tsource:', packet.source);
	console.log('\ttype:', packet.type);
	console.log('\tdata:', packet.data.toString('hex'));
});
```

Parse the packet data
```
const fields = [
	{ 'name': 'byte' }, // default type: 'UInt8'
	{ 'name': 'num', 'type': 'UInt16' },
	{ 'name': 'anotherNum', 'type': 'Int32' },
	{ 'name': 'text', 'type': 'String', 'len': 2 }, // String with fixed length
	{ 'name': 'finalText', 'type': 'String' } // String to the end of the buffer
];
const data = packet.parse(fields);
console.log(data);
```
