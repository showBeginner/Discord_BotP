const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

async function getStatus(){
    try{
        const response = await axios.get('https://api.warframestat.us/pc/earthCycle');
        const obj = JSON.parse(JSON.stringify(response.data));
        return obj.state;
    }catch(error){
        console.log(error)
    }
}
module.exports = {
	data: new SlashCommandBuilder()
		.setName('earthstate')
		.setDescription('Warframe Earth state'),
	async execute(interaction) {
        var temp = await getStatus();
        await interaction.reply(temp);
	},
};