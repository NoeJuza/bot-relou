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
    "`feur`",
    "*feur*",
    "**feur**",
    "***feur***",
    "FEUR",
    ]   
const triggersQuoi = ["quoi","kwa","quoi?","kwa?"]
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) =>{
    if (message.author.bot) return false;
    let words = message.content.toLowerCase().split(" ");
    triggersQuoi.forEach(trig =>{
        if (words.includes(trig)) {
            message.reply(reactsQuoi[Math.floor(Math.random()*reactsQuoi.length)])
        }
    })

    if (words.includes("pourquoi")|| words.includes("pourquoi?")){
        await message.reply("bah pour feur mec")
    }
    if (words.includes("feur")){
        message.delete();
    }
});

client.login(process.env.TOKEN);