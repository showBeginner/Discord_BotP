const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('search item market!'),
	async execute(interaction) {
		//await interaction.reply('Pong!');
	},
};