import * as core from '@actions/core';
import util from 'util';
import axios from 'axios';

async function run() {
  const inputMsg: string = core.getInput('message') || 'No message';
  const inputParseMode: string = core.getInput('parse_mode') || 'html';
  try {
    //get envs
    const telegram_token = process.env.TELEGRAM_TOKEN;
    const telegram_chat = process.env.TELE_CHAT_ID || process.env.TELEGRAM_CHAT;
    console.log('telegram_token = ', telegram_token)
    console.log('telegram_chat = ', telegram_chat)

    //check envs
    if (!telegram_token) {
      throw new Error('telegram_token argument not compiled');
    }

    if (!telegram_chat) {
      throw new Error('telegram_chat argument not compiled');
    }

    //send message via telegram
    await axios.post(
      `https://api.telegram.org/bot${telegram_token}/sendMessage`,
      {
        chat_id: telegram_chat,
        text: inputMsg,
        parse_mode: inputParseMode,
        disable_web_page_preview: true
      }
    );
  } catch (error: any) {
    return core.setFailed(error.message);
  }
}

run();
