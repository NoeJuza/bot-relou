require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,] });
const reactsQuoi = [
    "https://tenor.com/view/feur-meme-gif-24407942",
    "https://tenor.com/view/feur-theobabac-quoi-gif-24294658",
    "https://tenor.com/view/feur-th%C3%A9obabac-not-funny-gif-22130648",
    "https://tenor.com/view/feur-heart-locket-vred-quoi-quoi-feur-gif-22321210",
    "https://cdn.discordapp.com/attachments/919656305583603722/1085953209136320572/FMTA-jUXoAcVA1K.png",
    "https://tenor.com/view/feur-quoi-clip-gif-21195505",
    "https://tenor.com/view/feur-gif-24566779",
    "https://media.discordapp.net/attachments/1026874473816789053/1086191217936699492/ezgif.com-video-to-gif.gif",
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
    "https://media.discordapp.net/attachments/1027641697359900774/1080782886157946920/adrien.gif"

]

const triggersQuoi = ["quoi", "kwa", "koi", "koa", "qwa", "qoi"]
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return false;
    let msg = message.content.toLowerCase();
    if (msg.split(" ").includes("feur")) {
        message.delete();
        return false;
    }
    if (msg.includes("c'est quoi")) {
        await message.reply("c'est feur")
        return false;
    }
    if (msg.includes("pourquoi") || msg.includes("pour quoi")) {
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
        if (message.author.id == 381821906824724492 && special) { // React to Adrien
            message.reply(reactsRatioAdrien[Math.floor(Math.random() * reactsRatioAdrien.length)])
        } else {
            message.reply(`You are ${msg.author}\n` + reactsRatio[Math.floor(Math.random() * reactsRatio.length)])
        }
        return false;
    }
});

client.login(process.env.TOKEN);