exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ INFO BOT! :
   
⚜ *GITHUB*: https://github.com/nanasns/nanasbotwa
⚜ *AUTHOR*: Nanas
⚜ *DESIGNER*: Nanas


♻ INFO LAIN! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK #donate


✅ Follow akun instagram admin ${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️


  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
