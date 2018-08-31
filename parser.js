module.exports = function(buff, fields) {
	let ret = {};
	let offset = 0;

	for (let field of fields) {
		if (typeof field.name != 'string') {
			continue;
		}

		let type = typeof field.type === 'string' ? field.type : 'UInt8';
		let len = typeof field.len === 'number' ? field.len : undefined;

		try {
			switch (type) {
				case 'String':
					if (len !== undefined) {
						end = offset + len;
					} else {
						end = buff.length;
					}
					ret[field.name] = buff.toString('utf8', offset, end);
					offset = end;
					break;

				case 'Int8':
				case 'UInt8':
					ret[field.name] = buff['read' + type](offset);
					++offset;
					break;

				case 'Int16':
				case 'UInt16':
					ret[field.name] = buff['read' + type + 'LE'](offset);
					offset += 2;
					break;

				case 'Int32':
				case 'UInt32':
					ret[field.name] = buff['read' + type + 'LE'](offset);
					offset += 2;
					break;

				default:
					break;
			}
		} catch (e) {
		}
	}
	return ret;
}
