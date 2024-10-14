import { Context } from 'telegraf';
import { fetchDollarRate } from '../utils/fetchDollarRate';
import { User } from '../models/User';

export const textHandler = async (ctx: Context) => {
  const chatId = ctx.chat.id;

  if (ctx.message && 'text' in ctx.message) {
    let user = await User.findOne({ chatId });
    const messageText = ctx.message.text;

    if (!user) {
      user = new User({ chatId, name: messageText });
      await user.save();
    
      const rate = await fetchDollarRate();
      ctx.reply(`Рад знакомству, ${messageText}! Курс доллара сегодня ${rate.toFixed(2)}р.`);
    } else {
      ctx.reply(`Привет снова, ${user.name}!`);
    }
  } else {
    ctx.reply('Введите сообщение')
  }
};
