export const prerender = false;

export async function GET(): Promise<Response> {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST({ request }: { request: Request }): Promise<Response> {
  try {
    const data = await request.json();
    
    const text = `🔔 Заявка ecolofin.by
Имя: ${data.name || '-'}
Тел: ${data.phone || '-'}
Email: ${data.email || '-'}
Источник: ${data.source || '-'}`;

    const tgRes = await fetch('https://api.telegram.org/bot8503860004:AAHjB6l5VJ2D9NP8oGd8gGuczSNmH5QP9u8/sendMessage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: '-5240163266',
        text: text
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
