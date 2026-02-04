export { renderers } from '../../renderers.mjs';

const prerender = false;
async function GET() {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
async function POST({ request }) {
  try {
    const data = await request.json();
    const text = `🔔 Заявка ecolofin.by
Имя: ${data.name || "-"}
Тел: ${data.phone || "-"}
Email: ${data.email || "-"}
Источник: ${data.source || "-"}`;
    const tgRes = await fetch("https://api.telegram.org/bot8503860004:AAHjB6l5VJ2D9NP8oGd8gGuczSNmH5QP9u8/sendMessage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "-5240163266",
        text
      })
    });
    if (!tgRes.ok) {
      return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ success: false, error: String(e) }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
