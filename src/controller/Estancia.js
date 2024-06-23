const { ChannelType } = require('discord.js');

class Estancia {
    static async CrearCanalTiket(guild){
        try{
            const categoria = await guild.channels.create({
                name: '📄 Tikets',
                type: ChannelType.GuildCategory
            })

            const canal = await guild.channels.create({
                name: '👌 abrir-ticket',
                type: ChannelType.GuildText,
                parent: categoria.id
            })

            console.log(`🟢 Se creo correctamente el canal de ${guild.name}`)
        }catch(error){
            console.error(`🔴 Hubo un error al crear el canal en el servidor: ${guild.name}`, error)
        }
    }
}

module.exports = Estancia;