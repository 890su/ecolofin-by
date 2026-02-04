import type { APIRoute } from 'astro';
import { sendToTelegram } from '../../utils/telegram';

export const prerender = false; // Ensure this runs as serverless function

export const POST: APIRoute = async ({ request }) => {
  console.log('=== Contact API called ===');
  
  try {
    const data = await request.json();
    console.log('Received data:', JSON.stringify(data));
    
    const { name, email, phone, message, source } = data;

    // Валидация
    if (!name || !phone) {
      console.log('Validation failed: missing name or phone');
      return new Response(
        JSON.stringify({ success: false, error: 'Имя и телефон обязательны' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Отправка в Telegram
    console.log('Sending to Telegram...');
    const success = await sendToTelegram({
      name: name.trim(),
      email: email?.trim(),
      phone: phone.trim(),
      message: message?.trim(),
      source: source || 'Форма обратной связи',
    });

    console.log('Telegram result:', success);

    if (!success) {
      return new Response(
        JSON.stringify({ success: false, error: 'Ошибка при отправке сообщения' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Сообщение успешно отправлено' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('API error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Внутренняя ошибка сервера' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
