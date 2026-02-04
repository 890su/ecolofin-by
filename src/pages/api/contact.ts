import type { APIRoute } from 'astro';

export const prerender = false;

// GET для проверки что API работает
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ status: 'ok', message: 'API is working' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};

// POST для отправки формы
export const POST: APIRoute = async ({ request }) => {
  const BOT_TOKEN = '8503860004:AAHjB6l5VJ2D9NP8oGd8gGuczSNmH5QP9u8';
  const CHAT_ID = '-5240163266';

  try {
    const body = await request.json();
    const { name, phone, email, message, source } = body;

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ success: false, error: 'Имя и телефон обязательны' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Формируем текст
    let text = `🔔 Новая заявка с ecolofin.by\n\n`;
    text += `Имя: ${name}\n`;
    text += `Телефон: ${phone}\n`;
    if (email) text += `Email: ${email}\n`;
    if (message) text += `Сообщение: ${message}\n`;
    if (source) text += `\nИсточник: ${source}`;

    // Отправляем в Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      return new Response(
        JSON.stringify({ success: false, error: 'Telegram error', details: err }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (e: any) {
    return new Response(
      JSON.stringify({ success: false, error: e?.message || 'Unknown error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
