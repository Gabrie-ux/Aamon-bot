import axios from 'axios';
import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
import { sticker } from '../lib/sticker.js';

let handler = m => m;

handler.all = async function (m, {conn}) {
m.isBot = m.id.startsWith('BAE5') && m.id.length === 16 || m.id.startsWith('3EB0') && m.id.length === 12 || m.id.startsWith('3EB0') && (m.id.length === 20 || m.id.length === 22) || m.id.startsWith('B24E') && m.id.length === 20;
if (m.isBot) return
if (m.id.startsWith('NJX-')) return;

let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat];
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

//if (prefixRegex.test(m.text)) return true;
if (m.mentionedJid.includes(this.user.jid)) {
//if (m.mentionedJid.includes(this.user.jid) || (m.quoted && m.quoted.sender === this.user.jid)) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio') || m.text.includes('Bot') || m.text.includes('bot') || m.text.includes('Exp') || m.text.includes('diamante') || m.text.includes('lolicoins') || m.text.includes('Diamante') || m.text.includes('Lolicoins')) return !0
if (m.chat === "120363297379773397@newsletter") return; 
if (m.chat === "120363355261011910@newsletter") return;
await this.sendPresenceUpdate('composing', m.chat);

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

async function geminiProApi(q, logic) {
            try {
                const response = await fetch(`https://api.ryzendesu.vip/api/ai/gemini-pro?text=${encodeURIComponent(q)}&prompt=${encodeURIComponent(logic)}`);
                if (!response.ok) throw new Error(`Error en la solicitud: ${response.statusText}`);
                const result = await response.json();
                return result.answer;
            } catch (error) {
                console.error('Error en Gemini Pro:', error);
                return null;
            }
        }

let query = m.text;
let username = `${m.pushName}`;
let txtDefault = await fetch('https://raw.githubusercontent.com/elrebelde21/LoliBot-MD/main/src/text-chatgpt.txt').then(v => v.text());
let syms1 = chat.sAutorespond ? chat.sAutorespond : txtDefault

if (!chat.autorespond) return 
if (m.fromMe) return
let result
if (result && result.trim().length > 0) {
result = await geminiProApi(query, syms1);
}
        
if (!result || result.trim().length === 0) {
result = await luminsesi(query, username, syms1);
result = result.replace(/Maaf, terjadi kesalahan saat memproses permintaan Anda/g, '').trim();
result = result.replace(/Generated by BLACKBOX\.AI.*?https:\/\/www\.blackbox\.ai/g, '').trim();
result = result.replace(/and for API requests replace https:\/\/www\.blackbox\.ai with https:\/\/api\.blackbox\.ai/g, '').trim();
}

if (result && result.trim().length > 0) {
await this.reply(m.chat, result, m);
await this.readMessages([m.key])
} else {
}}
return true;
}

export default handler;
