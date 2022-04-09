import { Intents, Message } from 'discord.js';
import * as DiscordJS from 'discord.js'
import * as dotenv from 'dotenv';
dotenv.config();

export const client: any = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_VOICE_STATES,
		Intents.FLAGS.DIRECT_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGE_TYPING,
	],
	partials: [
		'CHANNEL', // Required to receive DMs
	]
});
// const distube = new DisTube.default(client)

client.on('ready', () => {
	console.log('The bot is ready')
})

//Commands handler
const fs = require('fs')
client.commands = new DiscordJS.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on('messageCreate', async (message) => {
    //jabba check subscriptions
	const JabbaCheckSub = client.commands.get('jabba check sub')
	if (!JabbaCheckSub) return;
	try {
		await JabbaCheckSub.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}

	//jabba check sv
	const JabbaCheckSv = client.commands.get('mc player count')
	if (!JabbaCheckSv) return;
	try {
		await JabbaCheckSv.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})



client.login(process.env.TOKEN)