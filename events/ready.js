const Discord = require('discord.js');
const db = require("quick.db")
module.exports = client => {

  setInterval(() => {
var aktivite = [    
,"!botekle",
  "İnfinity BotList #Yakında"
];
 var rastgeleOyun = Math.floor(Math.random() * aktivite.length);
  client.user.setActivity(aktivite[rastgeleOyun],  {type: 'PLAYING'}) 
}, 5000);
   console.log(`${client.user.username} başarıyla giriş yaptı.`);




}

// { type: 'STREAMING' ,  url: 'https://twitch.tv/.' } yayın yapıyor
 //LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR