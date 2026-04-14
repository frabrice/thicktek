const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function sendEmail(payload: EmailPayload): Promise<void> {
  const response = await fetch(
    `${supabaseUrl}/functions/v1/send-email`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send email: ${error}`);
  }
}

export interface ConsultationData {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  preferred_date: string;
  preferred_time: string;
  service: string;
  description: string;
}

export interface ContactData {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  message: string;
}

export interface AuditData {
  name: string;
  email: string;
  company: string;
  website_url: string;
  challenge: string;
}

type EmailPayload =
  | { type: 'consultation'; data: ConsultationData }
  | { type: 'contact'; data: ContactData }
  | { type: 'audit'; data: AuditData };
