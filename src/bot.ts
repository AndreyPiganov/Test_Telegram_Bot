import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import {startCommand} from  './commands/start'
import { textHandler } from './handlers/textHandler';
import logger from './config/logger';
import { connectDB } from './db/index';

dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_TOKEN as string);

connectDB();

bot.start(startCommand)

bot.hears(/.*/, textHandler);

bot.launch()
  .then(() => logger.info('Бот запущен...'))
  .catch((error) => logger.error('Ошибка при запуске бота', error));

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
