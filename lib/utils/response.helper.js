export const ok = (body) => new Response(body ? JSON.stringify(body) : "{}", { status: 200 });
