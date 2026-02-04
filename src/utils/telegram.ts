export interface TelegramMessage {
  name: string;
  email?: string;
  phone: string;
  message?: string;
  source?: string;
}

// Получение переменных окружения безопасным способом
function getEnvVar(name: string): string | undefined {
  try {
    // Vercel serverless
    if (typeof process !== 'undefined' && process.env && process.env[name]) {
      return process.env[name];
    }
  } catch (e) {
    // ignore
  }
  
  try {
    // Astro dev mode
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[name]) {
      // @ts-ignore
      return import.meta.env[name];
    }
  } catch (e) {
    // ignore
  }
  
  return undefined;
}

export async function sendToTelegram(data: TelegramMessage): Promise<boolean> {
  const botToken = getEnvVar('TELEGRAM_BOT_TOKEN');
  const chatId = getEnvVar('TELEGRAM_CHAT_ID');

  console.log('Telegram config:', { hasToken: !!botToken, hasChatId: !!chatId });

  if (!botToken || !chatId) {
    console.error('Telegram Bot Token or Chat ID not configured');
    return false;
  }

  const message = formatMessage(data);
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Telegram API error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}

function formatMessage(data: TelegramMessage): string {
  const lines = [
    '<b>Новая заявка с сайта ecolofin.by</b>',
    '',
    `<b>Имя:</b> ${escapeHtml(data.name)}`,
  ];

  if (data.email) {
    lines.push(`<b>Email:</b> ${escapeHtml(data.email)}`);
  }

  lines.push(`<b>Телефон:</b> ${escapeHtml(data.phone)}`);

  if (data.message) {
    lines.push('');
    lines.push(`<b>Сообщение:</b>`);
    lines.push(escapeHtml(data.message));
  }

  if (data.source) {
    lines.push('');
    lines.push(`<b>Источник:</b> ${escapeHtml(data.source)}`);
  }

  return lines.join('\n');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
