export { renderers } from '../../renderers.mjs';

const prerender = false;
const BOT_TOKEN = "8503860004:AAHjB6l5VJ2D9NP8oGd8gGuczSNmH5QP9u8";
const CHAT_ID = "-5240163266";
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, phone, email, message, source } = body;
    if (!name || !phone) {
      return new Response(
        JSON.stringify({ success: false, error: "Имя и телефон обязательны" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    let text = `<b>🔔 Новая заявка с ecolofin.by</b>

`;
    text += `<b>Имя:</b> ${name}
`;
    text += `<b>Телефон:</b> ${phone}
`;
    if (email) text += `<b>Email:</b> ${email}
`;
    if (message) text += `<b>Сообщение:</b> ${message}
`;
    if (source) text += `
<i>Источник: ${source}</i>`;
    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML"
      })
    });
    const telegramResult = await telegramResponse.json();
    if (!telegramResponse.ok) {
      console.error("Telegram error:", telegramResult);
      return new Response(
        JSON.stringify({ success: false, error: "Ошибка Telegram" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("API Error:", error?.message || error);
    return new Response(
      JSON.stringify({ success: false, error: error?.message || "Ошибка сервера" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
