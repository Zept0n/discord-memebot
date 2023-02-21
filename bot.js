const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const keepAlive = require("./server")
const meme = require('./meme');
const token = process.env['token']


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  if (interaction.commandName === 'meme')  {
    const randomMeme= await meme.getMeme();
    await interaction.reply(`${randomMeme.url}`);
  }
  
});

keepAlive()
client.login(token);