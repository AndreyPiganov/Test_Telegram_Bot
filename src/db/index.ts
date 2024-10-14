import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from '../config/logger';

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    logger.info('Подключено к базе данных MongoDB');
  } catch (error) {
      logger.error('Ошибка при подключении к базе данных', error);
      throw error;
  }
};
