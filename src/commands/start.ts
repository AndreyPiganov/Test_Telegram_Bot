import { Context } from 'telegraf';
import { fetchDollarRate } from '../utils/fetchDollarRate';
import { User } from '../models/User';

export const startCommand = async (ctx: Context) => {
  const chatId = ctx.chat.id;

  const existingUser = await User.findOne({ chatId });

  if (existingUser) {
    const rate = await fetchDollarRate();
    ctx.reply(`Привет снова, ${existingUser.name}! Курс доллара сегодня ${rate.toFixed(2)}р.`);
  } else {
    ctx.reply('Добрый день. Как вас зовут?');
  }
};
