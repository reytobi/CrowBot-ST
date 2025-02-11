import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
// Staff De CrowBot
global.owner = [
   ['50557865603', 'Creador WillZek💛', true],
   ['5212731595017', 'CrowBot Soporte', true],
   ['584148256527', 'Dev Diomar', true],
   ['584120346669', 'Dev ⁱᵃᵐ|𝔇ĕ𝐬†𝓻⊙γ𒆜', true],
   ['51971867199', 'Dev Senna', true],
   ['584241836217', 'Dev Prak', true],
   ['51968382008', 'Dev Darkcore', true],
   ['573215751237', 'CrowBot OFC1', true],
]

global.creadorbot = [
   ['50557865603', 'WillZek', true],
]
  

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = ['50368471855', '51920227615', '5219831715910', '573007796996', '50488198573', '51991055096', '5212731590195']

global.prems = ['573215751237']

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '【✧】𝐂𝐫𝐨𝐰𝐁𝐨𝐭࿐'
global.botname = '(✦◠‿◠)𝑪𝒓𝒐𝒘𝑩𝒐𝒕-𝑺𝑻'
global.wm = '⏤͟͟͞͞⋆⬪࣪ꥈ🍨★ ׄ ꒱ 𝑪𝒓𝒐𝒘𝑩𝒐𝒕 - 𝑺.𝑪.𝑨 ୭'
global.author = '꒷꒦𖥻𝐁𝐲 𝐖𝐢𝐥𝐥𝐙𝐞𝐤𓆪'
global.dev = '© ⍴᥆ᥕᥱrᥱძ ᑲᥡ s𝗍ᥲrᥴ᥆rᥱ-𝗍ᥱᥲm'
global.errorm = '𝐄𝐫𝐫𝐨𝐫: ${error.message}'
global.errorm2 = '✰ 𝐀 𝐎𝐜𝐮𝐫𝐫𝐢𝐝𝐨 𝐔𝐧 𝐄𝐫𝐫𝐨𝐫, 𝐕𝐮𝐞𝐥𝐯𝐞 𝐌𝐚𝐬 𝐓𝐚𝐫𝐝𝐞 (৹˃̵﹏˂̵৹)'
global.resp = '𝐀𝐪𝐮𝐢 𝐓𝐢𝐞𝐧𝐞 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 〜(^∇^〜)'
global.espera = '✰ 𝐄𝐬𝐩𝐞𝐫𝐚 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐄𝐬𝐭𝐚𝐦𝐨𝐬 𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 (✿◠‿◠)'
global.nombrebot = 'CrowBot-ST'
global.textbot = `「 🔱𝐁𝐨𝐭 - 𝐒𝐓 🔱 」`
global.vs = '2.1.0'
global.publi = '✰𝐒𝐢𝐠𝐮𝐞 𝐄𝐥 𝐂𝐚𝐧𝐚𝐥👇'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./media/menus/Menu.jpg')
global.imagen2 = fs.readFileSync('./media/menus/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menus/Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./media/catalogo.jpg')
global.crowurl = fs.readFileSync('./media/crowurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.repobot = ''
global.grupo = ''
global.comu = ''
global.channel = ''
global.insta = ''
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '👑【✫𝚃𝙴𝙰𝙼  乂 𝚂𝚃𝙰𝚁𝙲𝙾𝚁𝙴✫】🎩', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
