const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TOKEN; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Process the incoming message here

  if (messageText === '/start') {
    bot.sendMessage(chatId, 'Welcome to the Cash tap bot!');
  }
});
