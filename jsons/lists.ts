export const randomEmotes_old = ['ð','ð','ð','ð§','ð','ðķ','ð','ð','ðŽ','ðĪĒ','ðĪ§','ð°','ðĪŪ','ð­','ð','ðĪĄ','ðĪ­','ð','ðĨģ','ðĪ','ðĨ°','ð','ðĪŠ','ð·']
export const drawEmotes = ['ð','ð','ð','ð§']
export const winEmotes = ['ð','ðķ','ð','ð','ðŽ','ðĪĒ','ðĪ§','ð°','ðĪŪ','ð­','ð']
export const loseEmotes = ['ðĪĄ','ðĪ­','ð']
export const laugh = ["https://tenor.com/view/jabba-the-hutt-star-wars-gif-12663815", "https://tenor.com/view/jabba-laugh-star-wars-haha-mood-gif-11764102", "https://tenor.com/view/woahaha-jabba-starwars-gif-19246551", "https://tenor.com/view/jabba-the-hutt-laugh-monster-gif-13644611", "https://tenor.com/view/jabba-chumbolo-laugh-botek-solo-gif-24199365"];
export const sexi = ["https://tenor.com/view/leia-jabba-gif-8984830", "https://tenor.com/view/leia-organa-slave-leia-leia-bikini-leia-metal-bikini-star-wars-gif-17965323", "https://tenor.com/view/jabba-leia-jabba-leia-jabba-lick-gif-18933413", "https://tenor.com/view/slave-leia-jabba-jabba-leia-jabba-lick-bricosplay-gif-23134280"]
//All face emotes
const faceEmotes = require('../jsons/emojiList.json')
let randomEmotes = [];
console.time('okay')
faceEmotes.some(function(obj){
    if(obj.category == 'Smileys & Emotion'){
        randomEmotes.push(obj.emoji);
    }
    if (obj.emoji == 'ðĪĄ'){
        return true
    }
    
})
export {randomEmotes}