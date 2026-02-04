export interface TelegramMessage {
  name: string;
  email?: string;
  phone: string;
  message?: string;
  source?: string;
}

export async function sendToTelegram(data: TelegramMessage): Promise<boolean> {
  // Hardcoded for now - will fix with env vars later
  const botToken = '8503860004:AAHjB6l5VJ2D9NP8oGd8gGuczSNmH5QP9u8';
  const chatId = '-5240163266';

  const message = formatMessage(data);
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  console.log('Sending to Telegram...', { url: url.substring(0, 50) + '...' });

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

    const result = await response.json();
    console.log('Telegram response:', JSON.stringify(result));

    if (!response.ok) {
      console.error('Telegram API error:', result);
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
    '<b>🔔 Новая заявка с сайта ecolofin.by</b>',
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
    lines.push(`<i>Источник: ${escapeHtml(data.source)}</i>`);
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
