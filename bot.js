const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const keepAlive = require("./server")
const meme = require('./meme');
const token = process.env['token']
const markdown="```";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

	
client.on('messageCreate', async (message) => {
  if (message.author.id===client.user.id) return;
  console.log(message.content);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
  if (interaction.commandName === 'meme')  {
    const subreddit = interaction.options.getString('subreddit');
    const randomMeme= await meme.getMeme(subreddit);
    await interaction.reply(`${randomMeme.preview[3]}`);
  }
  
});


keepAlive()
client.login(token);