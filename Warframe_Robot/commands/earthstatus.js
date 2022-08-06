const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const axios = require('axios');

async function getStatus(){
    try{
        const response = await axios.get('https://api.warframestat.us/pc/earthCycle');
        const obj = JSON.parse(JSON.stringify(response.data));
        return obj;
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
        const exampleEmbed = new EmbedBuilder()
        .setColor(0xFFCCFF)
        .setTitle('Warframe 地球 時間')
        .setDescription('取得地球時間與剩餘多久')
        .addFields(
            { name: '早上/晚上', value: temp.state },
            //{ name: '\u200B', value: '\u200B' },
            { name: '剩餘時間', value: temp.timeLeft , inline: true },
        )
        .setTimestamp()

        await interaction.reply({ embeds: [exampleEmbed] });
	},
};