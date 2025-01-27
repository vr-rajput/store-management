const { createLogger, format, transports, level } = require('winston');
const { combine, timestamp, printf, colorize } = format;

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`;
});


const logger = createLogger({
  level: "info",
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    colorize(),
    logFormat
  ),
  transports: [
    // new transports.Console(), // Log to console
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
  ]
})

module.exports = logger;