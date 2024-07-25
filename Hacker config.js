const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923169538309";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "92xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_40_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTksXG4gICAgICAgIDUsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgNjYsXG4gICAgICAgIDk5LFxuICAgICAgICA5MixcbiAgICAgICAgMTI1LFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjksXG4gICAgICAgIDU1LFxuICAgICAgICAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAzOSxcbiAgICAgICAgMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJaOGVYek1LUTAyZWlvbnlBY0kyZCtybk9kYXZBUGdMeUZWeTRVYjZjZ0VBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyMTc3MDYxNjQzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDAzOEU1NDYwMjY2OUU2Rjc2RkFFMkRDOUVGQUQ3RDhcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxODg5NjQ0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIxNzcwNjE2NDMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMEM5Njk3MDZDRkMyM0U3OEM0QUExRjJEQjhCQjYxN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4ODk2NDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMnNGRWo4Y1pReldBSk5EVDFXUnQ1Z1wiLFxuICBcInBob25lSWRcIjogXCIyYzAxNTdjMi04YzQ3LTRjMmEtYjA1YS1hYjBjNWY4YjExMjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk1LFxuICAgICAgNDAsXG4gICAgICAxNzAsXG4gICAgICAxMjMsXG4gICAgICAyMTUsXG4gICAgICAyNTUsXG4gICAgICAzMixcbiAgICAgIDU5LFxuICAgICAgMTAsXG4gICAgICA4NSxcbiAgICAgIDE0OCxcbiAgICAgIDQyLFxuICAgICAgNDMsXG4gICAgICAxMDIsXG4gICAgICAzMSxcbiAgICAgIDE5MyxcbiAgICAgIDIzNixcbiAgICAgIDcsXG4gICAgICAxODQsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg1LFxuICAgICAgNTEsXG4gICAgICA4LFxuICAgICAgMjI0LFxuICAgICAgMjEsXG4gICAgICAxOSxcbiAgICAgIDE0MSxcbiAgICAgIDE0NyxcbiAgICAgIDE3MCxcbiAgICAgIDE5OCxcbiAgICAgIDE3MyxcbiAgICAgIDM5LFxuICAgICAgMTI1LFxuICAgICAgMTQzLFxuICAgICAgMTc4LFxuICAgICAgNTYsXG4gICAgICA4MyxcbiAgICAgIDExOCxcbiAgICAgIDEzOSxcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpGTEZKVEdSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjE3NzA2MTY0MzM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIzOTgzMzQxMDg4OTk3OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2FtYXNzYeKdpOKAjfCfqblHYXll8J+Wh++4j1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012RW5ic0dFT1htaDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVWcyZFk2RjJKUnQ0c2tQNU1PRllINTVJb0FlTTFnc0t2blR1Wm1yUUhDTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzQW9iNWhCYlR3RmJoVmMxYllSdkNZMGxZUTFXYVVjVXdWWnNaNHVXZ1dWTytuVCtvU3pIRk5zeEhrUjdwdkJIa3poZHdxM0F2dWNyUkEvRXJidUhDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjYmFVS21SS0g2OWpMMjlCZW5NUFh0YkMxY080ZjlUREZhM3BuYVZReHhlWldmc2RJQ3dXMTFkS1FQT3BhVEc2QXMreUt6a2paYWZzbWcvZTNFUjdqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjE3NzA2MTY0MzM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODg5NjQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGxxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEbHEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIWnFUR1I0eUZjM3lJK3lHSVpJcE9PdDlZaXZHWldMTStDdU1kcDZjVFhVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MzQ4Mjg2MTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTg4OTY0MDMyN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "GAYEleBOSS",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Samassa Gaye",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Samassa Gaye"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
