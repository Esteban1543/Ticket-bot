const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

const Estancia = require('./controller/Estancia.js')

client.once('guildCreate', Estancia.CrearCanalTiket)

try {
    client.login(
        ``
    );

    client.once('ready', (bot) => {
        console.log(`✅ El bot ${bot.user.username} se inicio correctamente`)
    })
}catch(error){
    console.log(`⛔ El bot de discord no se inicio correctamente: ${error}`)
}