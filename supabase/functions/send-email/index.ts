import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ConsultationPayload {
  type: "consultation";
  data: {
    name: string;
    email: string;
    phone: string;
    company: string;
    position: string;
    preferred_date: string;
    preferred_time: string;
    service: string;
    description: string;
  };
}

interface ContactPayload {
  type: "contact";
  data: {
    first_name: string;
    last_name: string;
    email: string;
    company: string;
    message: string;
  };
}

interface AuditPayload {
  type: "audit";
  data: {
    name: string;
    email: string;
    company: string;
    website_url: string;
    challenge: string;
  };
}

type EmailPayload = ConsultationPayload | ContactPayload | AuditPayload;

async function sendResendEmail(
  resendKey: string,
  to: string | string[],
  subject: string,
  html: string,
  replyTo?: string
) {
  const toArray = Array.isArray(to) ? to : [to];
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "ThickTek <hello@thicktek.com>",
      to: toArray,
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend error: ${error}`);
  }

  return response.json();
}

function consultationConfirmationHtml(data: ConsultationPayload["data"]) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consultation Confirmed — ThickTek</title>
</head>
<body style="margin:0;padding:0;background-color:#09090b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#09090b;padding:48px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Logo bar -->
          <tr>
            <td style="padding-bottom:32px;text-align:center;">
              <span style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Thick<span style="color:#3b82f6;">Tek</span></span>
            </td>
          </tr>

          <!-- Main card -->
          <tr>
            <td style="background:#111113;border:1px solid #1f1f23;border-radius:16px;overflow:hidden;">

              <!-- Header band -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(135deg,#0f2544 0%,#0c1a30 60%,#0a1628 100%);padding:48px 40px 40px;">
                    <p style="margin:0 0 12px;font-size:12px;font-weight:600;color:#60a5fa;text-transform:uppercase;letter-spacing:2px;">Consultation Request</p>
                    <h1 style="margin:0 0 12px;font-size:32px;font-weight:700;color:#ffffff;line-height:1.2;letter-spacing:-0.5px;">We have your request,<br>${data.name.split(" ")[0]}.</h1>
                    <p style="margin:0;font-size:16px;color:#94a3b8;line-height:1.6;">Our team will confirm your slot and reach out within <strong style="color:#e2e8f0;">24 hours</strong>.</p>
                  </td>
                </tr>
              </table>

              <!-- Booking summary -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:40px 40px 0;">
                    <p style="margin:0 0 20px;font-size:11px;font-weight:600;color:#475569;text-transform:uppercase;letter-spacing:2px;">Booking Summary</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#18181b;border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:20px 24px;border-bottom:1px solid #27272a;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="50%" style="padding-right:16px;">
                                <p style="margin:0 0 4px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">Date</p>
                                <p style="margin:0;font-size:15px;font-weight:600;color:#f4f4f5;">${data.preferred_date}</p>
                              </td>
                              <td width="50%">
                                <p style="margin:0 0 4px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">Time</p>
                                <p style="margin:0;font-size:15px;font-weight:600;color:#f4f4f5;">${data.preferred_time}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:20px 24px;border-bottom:1px solid #27272a;">
                          <p style="margin:0 0 4px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">Service</p>
                          <p style="margin:0;font-size:15px;font-weight:600;color:#f4f4f5;">${data.service}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:20px 24px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="50%" style="padding-right:16px;">
                                <p style="margin:0 0 4px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">Company</p>
                                <p style="margin:0;font-size:15px;font-weight:600;color:#f4f4f5;">${data.company || "Not provided"}</p>
                              </td>
                              <td width="50%">
                                <p style="margin:0 0 4px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">Phone</p>
                                <p style="margin:0;font-size:15px;font-weight:600;color:#f4f4f5;">${data.phone || "Not provided"}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- What happens next -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:32px 40px 0;">
                    <p style="margin:0 0 20px;font-size:11px;font-weight:600;color:#475569;text-transform:uppercase;letter-spacing:2px;">What happens next</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:0 0 16px;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="32" valign="top" style="padding-top:2px;">
                                <div style="width:24px;height:24px;background:#1e3a5f;border-radius:50%;text-align:center;line-height:24px;font-size:11px;font-weight:700;color:#60a5fa;">1</div>
                              </td>
                              <td style="padding-left:12px;">
                                <p style="margin:0;font-size:14px;font-weight:600;color:#e4e4e7;">Confirmation call or email</p>
                                <p style="margin:4px 0 0;font-size:13px;color:#71717a;line-height:1.5;">We will reach out to confirm the exact time and send a calendar invite.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:0 0 16px;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="32" valign="top" style="padding-top:2px;">
                                <div style="width:24px;height:24px;background:#1e3a5f;border-radius:50%;text-align:center;line-height:24px;font-size:11px;font-weight:700;color:#60a5fa;">2</div>
                              </td>
                              <td style="padding-left:12px;">
                                <p style="margin:0;font-size:14px;font-weight:600;color:#e4e4e7;">Preparation brief</p>
                                <p style="margin:4px 0 0;font-size:13px;color:#71717a;line-height:1.5;">We will review your submission so our conversation is focused and useful from minute one.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td width="32" valign="top" style="padding-top:2px;">
                                <div style="width:24px;height:24px;background:#1e3a5f;border-radius:50%;text-align:center;line-height:24px;font-size:11px;font-weight:700;color:#60a5fa;">3</div>
                              </td>
                              <td style="padding-left:12px;">
                                <p style="margin:0;font-size:14px;font-weight:600;color:#e4e4e7;">The consultation</p>
                                <p style="margin:4px 0 0;font-size:13px;color:#71717a;line-height:1.5;">A focused 45-minute session built around your specific goals and challenges.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:40px;text-align:center;">
                    <p style="margin:0 0 24px;font-size:14px;color:#71717a;line-height:1.6;">Questions or need to reschedule? Reply to this email or contact us directly at <a href="mailto:admin@thicktek.com" style="color:#3b82f6;text-decoration:none;">admin@thicktek.com</a></p>
                    <a href="https://thicktek.com/case-studies" style="display:inline-block;background:#2563eb;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:0.2px;">View Our Work</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:32px 0 0;text-align:center;">
              <p style="margin:0 0 8px;font-size:12px;color:#3f3f46;">ThickTek &mdash; Kigali Innovation City, Rwanda</p>
              <p style="margin:0;font-size:12px;color:#3f3f46;"><a href="mailto:admin@thicktek.com" style="color:#52525b;text-decoration:none;">admin@thicktek.com</a> &bull; <a href="https://thicktek.com" style="color:#52525b;text-decoration:none;">thicktek.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function consultationNotificationHtml(data: ConsultationPayload["data"]) {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Company", data.company || "—"],
    ["Position", data.position || "—"],
    ["Requested Date", data.preferred_date],
    ["Requested Time", data.preferred_time],
    ["Service", data.service],
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#09090b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:40px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#111113;border:1px solid #1f1f23;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a5f 0%,#172d4a 100%);padding:32px 40px;">
            <p style="margin:0 0 6px;font-size:11px;font-weight:600;color:#93c5fd;text-transform:uppercase;letter-spacing:2px;">New Submission</p>
            <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">New Consultation Request</h1>
            <p style="margin:8px 0 0;font-size:13px;color:#94a3b8;">via thicktek.com/schedule</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${rows.map(([label, value]) => `
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #1f1f23;">
                  <p style="margin:0 0 3px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">${label}</p>
                  <p style="margin:0;font-size:15px;color:#e4e4e7;font-weight:500;">${value}</p>
                </td>
              </tr>`).join("")}
              <tr>
                <td style="padding:16px 0 0;">
                  <p style="margin:0 0 6px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">Project Description</p>
                  <p style="margin:0;font-size:14px;color:#a1a1aa;line-height:1.7;">${data.description || "None provided"}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 32px;">
            <a href="mailto:${data.email}" style="display:inline-block;background:#2563eb;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:600;">Reply to ${data.name.split(" ")[0]}</a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function auditConfirmationHtml(data: AuditPayload["data"]) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Audit Request Received — ThickTek</title>
</head>
<body style="margin:0;padding:0;background-color:#09090b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#09090b;padding:48px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Logo -->
          <tr>
            <td style="padding-bottom:32px;text-align:center;">
              <span style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Thick<span style="color:#3b82f6;">Tek</span></span>
            </td>
          </tr>

          <!-- Main card -->
          <tr>
            <td style="background:#111113;border:1px solid #1f1f23;border-radius:16px;overflow:hidden;">

              <!-- Header -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(135deg,#052e16 0%,#071f11 60%,#050f09 100%);padding:48px 40px 40px;">
                    <p style="margin:0 0 12px;font-size:12px;font-weight:600;color:#4ade80;text-transform:uppercase;letter-spacing:2px;">Website Audit</p>
                    <h1 style="margin:0 0 12px;font-size:32px;font-weight:700;color:#ffffff;line-height:1.2;letter-spacing:-0.5px;">Your audit request<br>is in the queue.</h1>
                    <p style="margin:0;font-size:16px;color:#86efac;line-height:1.6;">Expect a full analysis of <strong style="color:#d1fae5;">${data.website_url}</strong> within <strong style="color:#d1fae5;">48 hours</strong>.</p>
                  </td>
                </tr>
              </table>

              <!-- What we audit -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:40px 40px 0;">
                    <p style="margin:0 0 20px;font-size:11px;font-weight:600;color:#475569;text-transform:uppercase;letter-spacing:2px;">What your audit covers</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#18181b;border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:24px;">
                          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding:0 0 16px;">
                                <table role="presentation" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="32" valign="top">
                                      <div style="width:8px;height:8px;background:#22c55e;border-radius:50%;margin-top:5px;"></div>
                                    </td>
                                    <td>
                                      <p style="margin:0;font-size:14px;font-weight:600;color:#e4e4e7;">Conversion Rate Analysis</p>
                                      <p style="margin:3px 0 0;font-size:13px;color:#71717a;">Where visitors drop off and why they are not converting.</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:0 0 16px;">
                                <table role="presentation" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="32" valign="top">
                                      <div style="width:8px;height:8px;background:#22c55e;border-radius:50%;margin-top:5px;"></div>
                                    </td>
                                    <td>
                                      <p style="margin:0;font-size:14px;font-weight:600;color:#e4e4e7;">User Experience Review</p>
                                      <p style="margin:3px 0 0;font-size:13px;color:#71717a;">How navigation, layout, and messaging affect the visitor experience.</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding:0 0 16px;">
                                <table role="presentation" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="32" valign="top">
                                      <div style="width:8px;height:8px;background:#22c55e;border-radius:50%;margin-top:5px;"></div>
                                    </td>
                                    <td>
                                      <p style="margin:0;font-size:14px;font-weight:600;color:#e4e4e7;">Performance Assessment</p>
                                      <p style="margin:3px 0 0;font-size:13px;color:#71717a;">Load speed, technical health, and SEO impact.</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table role="presentation" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td width="32" valign="top">
                                      <div style="width:8px;height:8px;background:#22c55e;border-radius:50%;margin-top:5px;"></div>
                                    </td>
                                    <td>
                                      <p style="margin:0;font-size:14px;font-weight:600;color:#e4e4e7;">Specific Recommendations</p>
                                      <p style="margin:3px 0 0;font-size:13px;color:#71717a;">A prioritized list of what to fix, change, or add — not vague feedback.</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Submission summary -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:32px 40px 0;">
                    <p style="margin:0 0 20px;font-size:11px;font-weight:600;color:#475569;text-transform:uppercase;letter-spacing:2px;">Your Submission</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#18181b;border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:20px 24px;border-bottom:1px solid #27272a;">
                          <p style="margin:0 0 4px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">Website</p>
                          <p style="margin:0;font-size:15px;font-weight:600;color:#4ade80;">${data.website_url}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:20px 24px;border-bottom:1px solid #27272a;">
                          <p style="margin:0 0 4px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">Name</p>
                          <p style="margin:0;font-size:15px;font-weight:600;color:#f4f4f5;">${data.name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:20px 24px;">
                          <p style="margin:0 0 4px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">Company</p>
                          <p style="margin:0;font-size:15px;font-weight:600;color:#f4f4f5;">${data.company || "Not provided"}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:40px;text-align:center;">
                    <p style="margin:0 0 8px;font-size:15px;font-weight:600;color:#e4e4e7;">Want to talk before the audit?</p>
                    <p style="margin:0 0 24px;font-size:14px;color:#71717a;">Book a quick strategy call while you wait.</p>
                    <a href="https://thicktek.com/schedule" style="display:inline-block;background:#16a34a;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:0.2px;">Book a Strategy Call</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:32px 0 0;text-align:center;">
              <p style="margin:0 0 8px;font-size:12px;color:#3f3f46;">ThickTek &mdash; Kigali Innovation City, Rwanda</p>
              <p style="margin:0;font-size:12px;color:#3f3f46;"><a href="mailto:admin@thicktek.com" style="color:#52525b;text-decoration:none;">admin@thicktek.com</a> &bull; <a href="https://thicktek.com" style="color:#52525b;text-decoration:none;">thicktek.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function auditNotificationHtml(data: AuditPayload["data"]) {
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company || "—"],
    ["Website URL", data.website_url],
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#09090b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:40px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#111113;border:1px solid #1f1f23;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#052e16 0%,#071f11 100%);padding:32px 40px;">
            <p style="margin:0 0 6px;font-size:11px;font-weight:600;color:#4ade80;text-transform:uppercase;letter-spacing:2px;">New Submission</p>
            <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">New Website Audit Request</h1>
            <p style="margin:8px 0 0;font-size:13px;color:#86efac;">via thicktek.com/audit</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${rows.map(([label, value]) => `
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #1f1f23;">
                  <p style="margin:0 0 3px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">${label}</p>
                  <p style="margin:0;font-size:15px;color:#e4e4e7;font-weight:500;">${value}</p>
                </td>
              </tr>`).join("")}
              <tr>
                <td style="padding:16px 0 0;">
                  <p style="margin:0 0 6px;font-size:11px;color:#52525b;text-transform:uppercase;letter-spacing:1.5px;">Current Challenge</p>
                  <p style="margin:0;font-size:14px;color:#a1a1aa;line-height:1.7;">${data.challenge || "None provided"}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 32px;">
            <a href="mailto:${data.email}" style="display:inline-block;background:#16a34a;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:600;">Reply to ${data.name.split(" ")[0]}</a>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function contactConfirmationHtml(data: ContactPayload["data"]) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#09090b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#09090b;padding:48px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
        <tr>
          <td style="padding-bottom:32px;text-align:center;">
            <span style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">Thick<span style="color:#3b82f6;">Tek</span></span>
          </td>
        </tr>
        <tr>
          <td style="background:#111113;border:1px solid #1f1f23;border-radius:16px;overflow:hidden;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:linear-gradient(135deg,#0f2544 0%,#0c1a30 100%);padding:48px 40px 40px;">
                  <p style="margin:0 0 12px;font-size:12px;font-weight:600;color:#60a5fa;text-transform:uppercase;letter-spacing:2px;">Message Received</p>
                  <h1 style="margin:0 0 12px;font-size:32px;font-weight:700;color:#ffffff;line-height:1.2;">Thanks for reaching out, ${data.first_name}.</h1>
                  <p style="margin:0;font-size:16px;color:#94a3b8;line-height:1.6;">We will get back to you within <strong style="color:#e2e8f0;">24 hours</strong>.</p>
                </td>
              </tr>
            </table>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:40px;text-align:center;">
                  <p style="margin:0 0 24px;font-size:14px;color:#71717a;line-height:1.7;">In the meantime, explore our work or book a consultation directly at <a href="https://thicktek.com/schedule" style="color:#3b82f6;text-decoration:none;">thicktek.com/schedule</a>.</p>
                  <a href="https://thicktek.com/case-studies" style="display:inline-block;background:#2563eb;color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">View Our Work</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 0 0;text-align:center;">
            <p style="margin:0;font-size:12px;color:#3f3f46;"><a href="mailto:admin@thicktek.com" style="color:#52525b;text-decoration:none;">admin@thicktek.com</a> &bull; <a href="https://thicktek.com" style="color:#52525b;text-decoration:none;">thicktek.com</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const resendKey = Deno.env.get("RESEND_API_KEY");
    const adminEmails = ["admin@thicktek.com", "thicktek250@gmail.com", "niyigenafabrice@yahoo.com"];

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const payload: EmailPayload = await req.json();

    if (payload.type === "consultation") {
      const { data } = payload;

      await supabase.from("consultations").insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company,
        position: data.position,
        preferred_date: data.preferred_date,
        preferred_time: data.preferred_time,
        service: data.service,
        description: data.description,
      });

      if (resendKey) {
        await Promise.all([
          sendResendEmail(
            resendKey,
            data.email,
            "Your Consultation Request — ThickTek",
            consultationConfirmationHtml(data),
            adminEmails[0]
          ),
          sendResendEmail(
            resendKey,
            adminEmails,
            `New Consultation: ${data.name} — ${data.service}`,
            consultationNotificationHtml(data),
            data.email
          ),
        ]);
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (payload.type === "contact") {
      const { data } = payload;

      await supabase.from("contact_submissions").insert({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        company: data.company,
        message: data.message,
      });

      if (resendKey) {
        await Promise.all([
          sendResendEmail(
            resendKey,
            data.email,
            "We received your message — ThickTek",
            contactConfirmationHtml(data),
            adminEmails[0]
          ),
          sendResendEmail(
            resendKey,
            adminEmails,
            `New Contact: ${data.first_name} ${data.last_name}`,
            `<p>Name: ${data.first_name} ${data.last_name}</p><p>Email: ${data.email}</p><p>Company: ${data.company}</p><p>Message: ${data.message}</p>`,
            data.email
          ),
        ]);
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (payload.type === "audit") {
      const { data } = payload;

      await supabase.from("audit_requests").insert({
        name: data.name,
        email: data.email,
        company: data.company,
        website_url: data.website_url,
        challenge: data.challenge,
      });

      if (resendKey) {
        await Promise.all([
          sendResendEmail(
            resendKey,
            data.email,
            "Your Website Audit Request — ThickTek",
            auditConfirmationHtml(data),
            adminEmails[0]
          ),
          sendResendEmail(
            resendKey,
            adminEmails,
            `New Audit Request: ${data.name} — ${data.website_url}`,
            auditNotificationHtml(data),
            data.email
          ),
        ]);
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Invalid payload type" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
