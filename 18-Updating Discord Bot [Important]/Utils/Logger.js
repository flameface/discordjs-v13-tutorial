const chalk = require('chalk');
const moment = require('moment');
const log = require('simple-node-logger').createRollingFileLogger({
		logDirectory: './Utils/logs',
		fileNamePattern: 'roll-<DATE>.log',
		dateFormat: 'YYYY.MM.DD',
	});

// LOGGERS
exports.log = (content, type = 'log') => {
	if (content == 'error') return;
	const timestamp = `[${moment().format('HH:mm:ss:SSS')}]:`;
	switch (type) {
	case 'log':
		log.info(content);
		console.log(`${timestamp} ${chalk.bgGreen(type.toUpperCase())} ${content} `);
		break;
	case 'warn':
		log.warn(content);
		console.log(`${timestamp} ${chalk.black.bgYellow(type.toUpperCase())} ${content} `);
		break;
	case 'error':
		log.error(content);
		console.log(`${timestamp} ${chalk.bgRed(type.toUpperCase())} ${content} `);
		break;
	case 'debug':
		log.debug(content);
		console.log(`${timestamp} ${chalk.green(type.toUpperCase())} ${content} `);
		break;
	case 'cmd':
		log.info(content);
		console.log(`${timestamp} ${chalk.black.bgWhite(type.toUpperCase())} ${content}`);
		break;
	case 'ready':
		log.info(content);
		console.log(`${timestamp} ${chalk.black.bgBlue(type.toUpperCase())} ${content}`);
		break;
	default:
		break;
	}
};

// EXPORTS LOGGER
exports.warn = (client) => this.log(client, 'warn');
exports.error = (client) => this.log(client, 'error');
exports.debug = (client) => this.log(client, 'debug');
exports.cmd = (client) => this.log(client, 'cmd');
exports.ready = (client) => this.log(client, 'ready');
