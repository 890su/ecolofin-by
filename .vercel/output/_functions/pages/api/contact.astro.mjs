export { renderers } from '../../renderers.mjs';

async function sendToTelegram(data) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || "8503860004:AAHjB6l5VJ2D9NP8oGd8gGuczSNmH5QP9u8";
  const chatId = process.env.TELEGRAM_CHAT_ID || "-5240163266";
  console.log("Telegram config check:", {
    hasToken: true,
    hasChatId: true,
    chatIdValue: chatId
  });
  const message = formatMessage(data);
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML"
      })
    });
    if (!response.ok) {
      const error = await response.json();
      console.error("Telegram API error:", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error sending to Telegram:", error);
    return false;
  }
}
function formatMessage(data) {
  const lines = [
    "<b>Новая заявка с сайта ecolofin.by</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(data.name)}`
  ];
  if (data.email) {
    lines.push(`<b>Email:</b> ${escapeHtml(data.email)}`);
  }
  lines.push(`<b>Телефон:</b> ${escapeHtml(data.phone)}`);
  if (data.message) {
    lines.push("");
    lines.push(`<b>Сообщение:</b>`);
    lines.push(escapeHtml(data.message));
  }
  if (data.source) {
    lines.push("");
    lines.push(`<b>Источник:</b> ${escapeHtml(data.source)}`);
  }
  return lines.join("\n");
}
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

const prerender = false;
const POST = async ({ request }) => {
  console.log("=== Contact API called ===");
  try {
    const data = await request.json();
    console.log("Received data:", JSON.stringify(data));
    const { name, email, phone, message, source } = data;
    if (!name || !phone) {
      console.log("Validation failed: missing name or phone");
      return new Response(
        JSON.stringify({ success: false, error: "Имя и телефон обязательны" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    console.log("Sending to Telegram...");
    const success = await sendToTelegram({
      name: name.trim(),
      email: email?.trim(),
      phone: phone.trim(),
      message: message?.trim(),
      source: source || "Форма обратной связи"
    });
    console.log("Telegram result:", success);
    if (!success) {
      return new Response(
        JSON.stringify({ success: false, error: "Ошибка при отправке сообщения" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ success: true, message: "Сообщение успешно отправлено" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("API error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Внутренняя ошибка сервера" }),
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
