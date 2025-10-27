const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Replace with your real bot token and server IP
const TOKEN = 'MTQzMjM3MDk2NDg2NzU3OTkxMQ.GSsrJM.8F7N-QTHWRdf7l2svhVH6K9ZdU681Sey-6OthY';
const SERVER_IP = 'play.blendermc.fun〡19142';

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes('ip')) {
    message.reply(`Our Minecraft server IP is ${SERVER_IP}`);
  }
});

client.once('ready', () => {
  console.log(`✅ BLENDER MC BOT is online as ${client.user.tag}`);
});

client.login(process.env.TOKEN);


