# SimpleComm for NodeJS

SimpleComm NodeJS implementation

## Gettings started

### Prerequisites

1. NodeJS 6.x

### Installation

```
npm install github IndustrialShields/node-simplecomm
```

## Usage

```
const simplecomm = require('simplecomm');
simplecomm.address = 0x12; // The default address is 0x00
```

```
simplecomm.send(stream, data, destination, type, callback);
```

```
const packet = simplecomm.fromBuffer(buffer);
console.log('source:', packet.source);
console.log('type:', packet.type);
console.log('data:', packet.data.toString('hex'));
```
