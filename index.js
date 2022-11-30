require("dotenv").config();
const { Events } = require('discord.js')
const client = require('./src/api/client');

client.once(Events.ClientReady, (ready) => {
  client.user.setPresence({ activities: [{ name: 'Discord' }], status: 'online' });
  console.log(`logged in as ${ready.user.tag} is ${ready.user.presence.status}`);
});

client.on('messageCreate', async interaction => {
  if (interaction.author.bot) return false  
  
  console.log(`Message from ${interaction.author.username}/${interaction.author.id}`);
  interaction.channel.send(`hi there`)
  interaction.channel.send('how can i help you today?')
  interaction.channel.send('1 - help me || 2 - tell me a dad joke ')
});


//Login to the server using bot token
client.login(process.env.TOKEN);
