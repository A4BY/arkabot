const Discord = require("discord.js");
const client = new Discord.Client();
client.login('NTEzNzg0MTY1NjI4Mzc5MTM3.DtNNFw.DQNPUUYC6JibqcY6dZieiME7EuI');
var prefix = ("!");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur Alzylia ' + member.displayName +'.Lit les regles et le fonctionement du sevveur !')
  }).catch(console.error)
  var generalChannel = client.channels.get("512706499240525824")
  generalChannel.send('Bienvenue sur Alzylia ' + member.displayName +'.Lit les regles et le fonctionement du sevveur !') 
})



client.on('message', message => {
  
  if (message.content ===  prefix + 'stats') {
   var embed = new Discord.RichEmbed()
   .setDescription("Information du Discord")
   .addField("Nom du Discord", message.guild.name)
   .addField("Crée le", message.guild.createdAt)
   .addField("Tu as rejoin le", message.member.joinedAt)
   .addField("Utilisateurs du Discord", message.guild.memberCount)
   .setColor("0x0000FF")
  message.channel.sendEmbed(embed)
  }
  if (message.content === prefix + 'regle') {
    message.reply('Voici les regles : #les-règles');
  }
  if (message.content === prefix + 'help') {
    message.author.send("Liste des commandes :", +
     "!stats - Permet de voir les statistiques du serveur", +
     "!regles - Permet de rejoindre le salon Règles")
  }
});
