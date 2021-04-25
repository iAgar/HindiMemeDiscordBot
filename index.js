require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'Namaste' || msg.content === 'namaste') {
    msg.reply('Namaste');    

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});

bot.on('message', message => {
  if(message.content === 'raju-waiting')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/phir-hera-pheri-akshay-waiting-pose-.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'paisa-hi-paisa')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/phir-hera-pheri-paisa-hi-paisa-hoga-meme-template-1024x535.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'andar-lo')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/abe-mereko-to-andar-lo-1024x555.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'scheme-bata-de')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/2019/01/jor-jor-se-bolke-sabko-scheme-bata-de-1024x457.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'overacting')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/2019/01/50-rupya-kaat-overacting-ka-1024x452.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'no-risk')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/Bilkul-risks-ne-lene-ka-1024x576.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'baburao-style')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/2019/01/ye-Baburao-ka-style-ha-1024x474.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'attack')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/Khadak-singh-chasing-with-sword.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'sad')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/hum-dukhi-the-lekin-humse-bhi-jyada-dukhi-do-2-aur-log-the.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'abba')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/3-idiots-farhan-abba-nahi-manenge.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'rahul-dravid')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/indiranagar-ka-gunda-hun-main-561x316.jpg?crop=1"]});
});

bot.on('message', message => {
  if(message.content === 'takleef-hua-h')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/bolne-de-takleef-hua-hai-bechare-ko.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'kis-line')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/2019/02/bhaisahab-yeh-kis-line-mein-aa-gaye-aap-1024x522.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'miracle')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/2019/03/miracle-miracle-1024x481.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'control')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/control-uday-control.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'hahaha')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/uday-shetty-and-ballu-laughing.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'seh-lenge-thoda')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/2019/02/welcome-nana-patekar-seh-lenge-thoda-1024x565.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'cut-it')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/cut-it-yaar-cut-it-1024x575.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'taang-nakli')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/meri-ek-taang-nakli-hai-mein-hockey-ka-1024x576.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'swole-doge')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/Swole-Doge-755x1024.jpg"]});
});

bot.on('message', message => {
  if(message.content === 'chad')
  message.reply("", {files: ["https://indianmemetemplates.com/wp-content/uploads/barges-into-any-argument-meme-635x1024.jpg"]});
});