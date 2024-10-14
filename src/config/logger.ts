import { LoggerOptions, transports, format, createLogger } from 'winston';

const winstonConfig: LoggerOptions = {
    level: 'debug',
    format: format.combine(
        format.timestamp({
            format: 'DD-MM-YYYY HH:mm:ss'
        }),
        format.json()
    ),
    transports: [
        new transports.File({ filename: `./var/log/error.log`, level: 'error' }),
        new transports.File({ filename: `./var/log/info.log`, level: 'info' }),
        new transports.File({ filename: `./var/log/application.log` }),
    ]
};

const logger = createLogger(winstonConfig);

export default logger;
