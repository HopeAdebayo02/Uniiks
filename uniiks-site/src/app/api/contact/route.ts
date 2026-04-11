import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "admin@uniikscare.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "UNIIKS Website <onboarding@resend.dev>";

type FormType = "contact" | "referral" | "career";

function escape(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderFields(data: Record<string, unknown>): string {
  return Object.entries(data)
    .filter(([key]) => key !== "type")
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;vertical-align:top;white-space:nowrap">${escape(key)}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap">${escape(value)}</td></tr>`
    )
    .join("");
}

function subjectFor(type: FormType, data: Record<string, unknown>): string {
  if (type === "referral") return `New Referral — ${data.clientName ?? "Unnamed"}`;
  if (type === "career") return `Career Application — ${data.firstName ?? ""} ${data.lastName ?? ""}`;
  return `New Contact Message — ${data.name ?? data.subject ?? "Inquiry"}`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Email service is not configured. Please contact us directly at admin@uniikscare.com." },
      { status: 503 }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const type = (payload.type as FormType) || "contact";
  const replyTo = typeof payload.email === "string" ? payload.email : undefined;

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto">
      <h2 style="color:#0C4A6E">${escape(subjectFor(type, payload))}</h2>
      <p style="color:#555">Submitted via the UNIIKS website (${escape(type)} form).</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${renderFields(payload)}</table>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo,
      subject: subjectFor(type, payload),
      html,
    });
    if (error) {
      return Response.json({ error: error.message || "Failed to send email." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected error sending email.";
    return Response.json({ error: message }, { status: 500 });
  }
}
