exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

╔════════════════════
║ *FITUR BOT ${BotName}*
╠════════════════════
║╭──❉ *STICKER MAKER* ❉──
║│1. *.sticker*
║╰───────────
╠════════════════════
║╭──❉ *MEDIA* ❉──
║│1. *.ytmp3* <linkyoutube>
║│2. *.ytmp4* <linkyoutube>
║│3. *.tiktok* <linktiktok>
║│4. *.ig* <linkIg>
║│5. *.fb* <linkFb>
║│6. *.twt* <linkTweet>
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *.wiki* <query>Wikipedia.
║│2. *.nulis* <teks>
║│3. *.quran*
║│4. *.pantun*
║│5. *.nama* <nama lu>
║│6. *.pasangan* <Aris & Cahya>
║│7. *.lirik* <nama lagu>
║│8. *.chord* <nama lagu>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *.sholat* <daerah>
║│2. *.covid*
║│3. *.infogempa*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *CONTACT* ❉──
║│1. *.creator*
║│2. *.owner*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *.tts* <teks>
║│2. *.quotes*
║│3. *#donasi*
║│4. *.foto cewek*
║│5. *.foto cowok*
║│6. *.pokemon*
║│7. *.fotoanime*
║│8. *.namaninja* <nama lu>
║│9. *.alay*  <teks>
║│10. *.say*  <teks>
║│11. *.infoig* <@nanas_ns>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Instagram*
║│ _${instagramlu}_
║│2. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *Nanas*
╚════════════════════`
}
