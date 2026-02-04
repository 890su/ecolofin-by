export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async () => {
  return new Response(
    JSON.stringify({ status: "ok", message: "API is working" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};
const POST = async ({ request }) => {
  const BOT_TOKEN = "8503860004:AAHjB6l5VJ2D9NP8oGd8gGuczSNmH5QP9u8";
  const CHAT_ID = "-5240163266";
  try {
    const body = await request.json();
    const { name, phone, email, message, source } = body;
    if (!name || !phone) {
      return new Response(
        JSON.stringify({ success: false, error: "Имя и телефон обязательны" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    let text = `🔔 Новая заявка с ecolofin.by

`;
    text += `Имя: ${name}
`;
    text += `Телефон: ${phone}
`;
    if (email) text += `Email: ${email}
`;
    if (message) text += `Сообщение: ${message}
`;
    if (source) text += `
Источник: ${source}`;
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text
        })
      }
    );
    if (!response.ok) {
      const err = await response.text();
      return new Response(
        JSON.stringify({ success: false, error: "Telegram error", details: err }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ success: false, error: e?.message || "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
