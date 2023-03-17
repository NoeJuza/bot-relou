require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,] });
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
const triggersQuoi = ["quoi","kwa","koi","koa","qwa","qoi"]
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) =>{
    if (message.author.bot) return false;
    let msg = message.content.toLowerCase();
    if (msg.split(" ").includes("feur")){
        message.delete();
        return false;
    }
    if (msg.includes("c'est quoi")){
        await message.reply("c'est feur")
        return false;
    }
    if (msg.includes("pourquoi") || msg.includes("pour quoi")){
        await message.reply("bah pour feur mec")
        return false;
    }
    triggersQuoi.forEach(trig =>{
        if (msg.includes(trig)) {
            message.reply(reactsQuoi[Math.floor(Math.random()*reactsQuoi.length)])
            return false;
        }
    })
});

client.login(process.env.TOKEN);