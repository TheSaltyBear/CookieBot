const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
	if (message.content === 'Can I please have a cookie?') 
       
        message.channel.send('Sure, Have a freshly baked cookie.:cookie: ');
});


client.on('message', message => {
	if (message.content === 'Can i please have a cookie?') 
       
        message.channel.send('Sure, Have a freshly baked cookie.:cookie: ');
});




client.login('NzI0ODk5MzIxNzE5NTU0MDg5.XvG6zw.DEckrx7wYaXRvaePtqDTeVaXU-c');