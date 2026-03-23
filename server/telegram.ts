import axios from 'axios';
import { ENV } from './_core/env';

const TELEGRAM_API_URL = 'https://api.telegram.org';

interface PartnerFormData {
  name: string;
  phone: string;
  telegram: string;
  message: string;
}

/**
 * Send partner form submission to Telegram bot
 * The bot will forward the message to the configured chat/channel
 */
export async function sendPartnerFormToTelegram(formData: PartnerFormData): Promise<boolean> {
  try {
    if (!ENV.telegramBotToken) {
      console.warn('[Telegram] Bot token not configured');
      return false;
    }

    // Format the message
    const messageText = `
🤝 <b>Новая заявка от партнёра</b>

<b>Имя:</b> ${escapeHtml(formData.name)}
<b>Телефон:</b> ${escapeHtml(formData.phone)}
<b>Telegram:</b> @${escapeHtml(formData.telegram)}

<b>Сообщение:</b>
${escapeHtml(formData.message)}
    `.trim();

    // Get bot info to find the owner's chat ID
    // For now, we'll use a fallback approach: send to the bot's owner
    // You'll need to configure TELEGRAM_CHAT_ID in your environment
    const chatId = process.env.TELEGRAM_CHAT_ID || process.env.OWNER_OPEN_ID;

    if (!chatId) {
      console.warn('[Telegram] Chat ID not configured');
      return false;
    }

    // Send message via Telegram Bot API
    const response = await axios.post(
      `${TELEGRAM_API_URL}/bot${ENV.telegramBotToken}/sendMessage`,
      {
        chat_id: chatId,
        text: messageText,
        parse_mode: 'HTML',
      },
      {
        timeout: 10000,
      }
    );

    if (response.status === 200) {
      console.log('[Telegram] Message sent successfully');
      return true;
    }

    return false;
  } catch (error) {
    console.error('[Telegram] Failed to send message:', error);
    return false;
  }
}

/**
 * Escape HTML special characters for Telegram HTML parse mode
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char] || char);
}

/**
 * Validate Telegram username format
 */
export function isValidTelegramUsername(username: string): boolean {
  // Remove @ if present
  const clean = username.replace(/^@/, '');
  // Telegram usernames are 5-32 characters, alphanumeric and underscore
  return /^[a-zA-Z0-9_]{5,32}$/.test(clean);
}
