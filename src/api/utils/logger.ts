import winston from "winston";

const { combine, timestamp, printf, colorize, align } = winston.format;

export const logger = winston.createLogger({
  level: "info",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss A",
    }),
    align(),
    printf((info) =>
      `[${info.timestamp}] ${info.level}: ${String(info.message).trim()}`
    ),
  ),
  transports: [new winston.transports.Console()],
});

export function errorLogger(location: string, error: any): void {
  logger.error(`An error happened at "${location}"`);
  logger.error(`${error.name} - ${error.message}`);
}
