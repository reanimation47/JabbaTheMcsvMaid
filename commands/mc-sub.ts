import { getRandom } from "../functions/getRandomFromArray"
import { removeVN } from "../functions/removeVN"
import { randomEmotes } from "../jsons/lists"
import { getSpreadsheet } from "../databases/GoogleSheets"

module.exports = {
    name: 'jabba check sub',
    description: 'jabba check subs',
    async execute(message){
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        let i= 0
        if (message.author.id === "939491082717249558") return;
        if (mess == 'jabba my sub') {
            await getSpreadsheet('sub-info').then(data => {
                const len = data.data.values.length
                let fact1 = false
                while ( i < len ) {
                    if ( data.data.values[i][1] == message.author.id){
                        const dueDate = new Date(data.data.values[i][2]).getTime();
                        let now = new Date().getTime();
                        let dis = dueDate - now
                        let day = Math.floor(dis / (1000 * 60 * 60 * 24))
                        message.channel.send(`${getRandom(randomEmotes)} Your mc server subscription has ${day} days left. \nDue date: ${data.data.values[i][2]}`)
                        fact1 = true
    
                    }
                    i++
                }
                if (fact1 == false) {
                    message.channel.send('No subscription found.')
                }
        
            } ).catch(err => {
                console.log(err)
                message.channel.send('Something went wrong.')
            })
        }
    }
}