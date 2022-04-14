const Rcon = require('rcon')
import { datacatalog } from "googleapis/build/src/apis/datacatalog";
import { getRandom } from "../functions/getRandomFromArray"
import { removeVN } from "../functions/removeVN"
import { randomEmotes } from "../jsons/lists"



module.exports = {
    name: 'mc player count',
    async execute(message) {
        var conn = new Rcon('mc-server.ldaq.org', 25575, process.env.RCON_PASS);
        conn.connect()
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess == 'jabba server') {
            message.channel.send(`${getRandom(randomEmotes)} jabba is retrieving server's data `)
            

            conn.on('auth', function () {
                // You must wait until this event is fired before sending any commands,
                // otherwise those commands will fail.
                console.log("Authenticated");
                console.log("Sending command: help")
                conn.send("/list");
            }).on('response', function (str) {
                console.log("Response: " + str);
                message.channel.send(` ${getRandom(randomEmotes)} The server is Online \n${str}`)
                conn.disconnect()
            }).on('error', function (err) {
                console.log("Error: " + err);
                message.channel.send(`${getRandom(randomEmotes)} The server seems to be Offline.`)
                conn.disconnect()
            }).on('end', function () {
                console.log("Connection closed");
            });

            
        }
    }
}
