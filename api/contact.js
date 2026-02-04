export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({ status: 'ok', message: 'API работает' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const BOT_TOKEN = '8503860004:AAHjB6l5VJ2D9NP8oGd8gGuczSNmH5QP9u8';
  const CHAT_ID = '-5240163266';

  try {
    const { name, phone, email, message, source } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ success: false, error: 'Имя и телефон обязательны' });
    }

    let text = `🔔 Заявка с ecolofin.by\n\nИмя: ${name}\nТелефон: ${phone}`;
    if (email) text += `\nEmail: ${email}`;
    if (message) text += `\nСообщение: ${message}`;
    if (source) text += `\n\nИсточник: ${source}`;

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.error('Telegram error:', err);
      return res.status(500).json({ success: false, error: 'Telegram error' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
