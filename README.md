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
const packet = simplecomm.fromBuffer(buffer);
console.log('source:', packet.source);
console.log('type:', packet.type);
console.log('data:', packet.data.toString('hex'));
```
