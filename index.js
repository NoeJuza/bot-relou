require('dotenv').config();
const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder, Guild, EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,] });
const reactsQuoi = [
    "https://tenor.com/view/feur-meme-gif-24407942",
    "https://tenor.com/view/feur-theobabac-quoi-gif-24294658",
    "https://tenor.com/view/feur-th%C3%A9obabac-not-funny-gif-22130648",
    "https://tenor.com/view/feur-heart-locket-vred-quoi-quoi-feur-gif-22321210",
    "https://cdn.discordapp.com/attachments/919656305583603722/1085953209136320572/FMTA-jUXoAcVA1K.png",
    "https://tenor.com/view/feur-quoi-clip-gif-21195505",
    "https://tenor.com/view/feur-gif-24566779",
    "https://media.discordapp.net/attachments/1076118712052105318/1087276473796263986/64180ae2902c5441299305.gif",
    "`feur`",
    "*feur*",
    "**feur**",
    "***feur***",
    "FEUR",
    "f e u r"
]
const reactsRatio = [
    "https://tenor.com/view/uzui-better-gif-24953549",
    "https://media.discordapp.net/attachments/1040355592730054666/1080788252618928178/willy.gif?width=441&height=662",
    "https://media.discordapp.net/attachments/1027641697359900774/1054734329785368646/ratio.gif?width=633&height=662",
    "https://tenor.com/view/ratio-twitter-persona4-adachi-ratioed-gif-22974098",
    "https://tenor.com/view/ratio-goatsante-the-kennel-squidward-squidward-dance-gif-23477820",
    "https://tenor.com/view/travis-scott-apology-ratio-unsuccessful-gif-23850764",
    "https://tenor.com/view/ratio-ratio-declined-failed-ratio-gif-25220819"
]
const reactsRatioAdrien = [
    "https://tenor.com/view/adrian-rat-ok-gif-24818394",
    "https://media.discordapp.net/attachments/1027641697359900774/1080782886157946920/adrien.gif",
    "https://media.discordapp.net/attachments/1076118712052105318/1087743118763376660/Ok_adrien.gif?width=888&height=662"

]
const shadowedUsers = []
const triggersQuoi = ["quoi","qu0i","quo1","qu01", "kwa", "koi", "koa", "qwa", "qoi"]
const mute = new SlashCommandBuilder()
	.setName('mute')
	.setDescription("mute l'utilisateur")
	.addStringOption(option =>
		option.setName('utilisateur')
			.setDescription('ID du user'))
const bachelor = new SlashCommandBuilder()
                        .setName("bachelor")
                        .setDescription("indique c'est quand le bachelor")
const commands = [mute,bachelor]
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
            Routes.applicationGuildCommands("1085938920153432126", "1026854340415213618"),
            { body: commands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
})();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(client);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return false;
    if (shadowedUsers.includes(message.author.id)){
        message.delete();
        return false;
    }
    let msg = message.content.toLowerCase();
    if (msg.split(" ").includes("feur")) {
        message.delete();
        return false;
    }
    if (msg.includes("c'est quoi")) {
        await message.reply("c'est feur")
        return false;
    }
    if (msg.includes("pourquoi") || msg.includes("pour quoi") ||msg.includes("pk") || msg.includes("pq")) {
        await message.reply("bah pour feur mec")
        return false;
    }
    triggersQuoi.forEach(trig => {
        if (msg.includes(trig)) {
            message.reply(reactsQuoi[Math.floor(Math.random() * reactsQuoi.length)])
            return false;
        }
    })
    if (msg.split(" ").includes("ratio")) {
        const special = Math.round(Math.random() * 100) <= 60; // 60% chance
        if (message.author.id == "381821906824724492" && special) { // React to Adrien
            message.reply(reactsRatioAdrien[Math.floor(Math.random() * reactsRatioAdrien.length)])
        } else {
            message.reply(reactsRatio[Math.floor(Math.random() * reactsRatio.length)])
        }
        return false;
    }
    if(msg.includes("https://media.discordapp.net/attachments/1040973582097977384/1086197033708306472/noe.gif")){
        message.delete();
        return false;
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    if (shadowedUsers.includes(interaction.user.id)) {
        interaction.reply("bien tenté mais t'es mute connard")
        return false;
    }
    if (interaction.commandName === 'mute') {
        
        let toban;
        try{
            toban= interaction.options.get("utilisateur").value;
        }catch{
            interaction.reply("mets un @ valide, connard")
        }
        if (toban != undefined) {
            let filtered = toban.substring(2,toban.length-1)
            console.log(filtered)
            interaction.reply(toban + " a été mute, cheh sur lui")
            shadowedUsers.push(filtered)
            return false;
        }
        interaction.reply("mets un @ valide, connard")
    }
    if (interaction.commandName === "bachelor") {
        const finBachelor = 1748728800;
        const embed = new EmbedBuilder().setColor(0x0099FF)
                                        .setTitle("Encore un peu de patience")
                                        .setURL("https://www.watchisup.fr/compte-a-rebours/divers/2025-06-01-00-00-8")
                                        .setDescription("Il reste encore: " + Math.floor(( finBachelor - ((new Date()).getTime()/1000) ) /60/60 /24) + " jours")
        interaction.reply({embeds: [embed]})
        return false;
    }
  });
client.login(process.env.TOKEN);