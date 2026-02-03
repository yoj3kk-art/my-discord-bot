const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const WELCOME_CHANNEL_ID = '1367910089964654627'; // روم الويلكم
const YOUR_ID = '1367910089964654627'; // ايديك (invited by)

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.get(WELCOME_CHANNEL_ID);
  if (!channel) return;

  const message =
`「 𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝓉𝑜 𝑅𝑒𝒶𝓁𝒵𝑜𝓃𝑒 𝒢𝒶𝓃𝑔 」

𝒩𝒶𝓂𝑒 : <@${member.id}>

𝒾𝓃𝓋𝒾𝓉𝑒𝒹 𝒷𝓎 : <@${1244286481930125316}>

𝓔𝓷𝓳𝓸𝔂 𝓨𝓸𝓾𝓻 𝓣𝓲𝓶𝓮 ✨`;

  channel.send(message);
});

client.login(MTQ2Nzg3OTg1MTc0MTQxMzM5Nw.GMgDNs.pKacXEZg5wft-9UYexxK7xOvKPT0ORmNfEl2Vs);
