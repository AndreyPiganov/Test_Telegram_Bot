import axios from 'axios';
import logger from '../config/logger';

export const fetchDollarRate = async (): Promise<number> => {
  try {
    logger.info('Получаем данные о курсе доллара');
    const {data} = await axios.get('https://api.exchangerate-api.com/v4/latest/RUB');
    return Math.ceil(1 / data.rates.USD);
  } catch (error) {
    logger.error('Ошибка при получении курса доллара:', error);
    return 100;
  }
};
