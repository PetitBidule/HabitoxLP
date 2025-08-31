import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    // garder cette adresse pour le moment
    const CONTACT_TO = "habitoxts@gmail.com";
    const FROM = "HabitoX <no-reply@habitoxts.com>";

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing RESEND_API_KEY" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "HabitoX <no-reply@habitox.app>",
        to: ["habitoxts@gmail.com"],
        reply_to: email,
        subject: `New contact message from ${name}`,
        html: `
          <!DOCTYPE html>
          <html lang="fr">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nouveau message de contact - HabitoX</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8fafc;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                    
                    <!-- Header avec logo -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 40px 30px; text-align: center;">
                        <div style="margin-bottom: 20px;">
                          <div style="display: inline-block; width: 80px; height: 80px; border-radius: 25%; position: relative; overflow: hidden;">
                            <img src="https://habitox.app/logo_habitox-removebg-preview.png" alt="HabitoX logo" style="width: 100%; height: 100%; object-fit: cover;">
                          </div>
                        </div>
                        <h1 style="color: #ffffff; font-size: 28px; font-weight: 600; margin: 0; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">HabitoX</h1>
                        <p style="color: #e0f2fe; font-size: 16px; margin: 8px 0 0 0; opacity: 0.9;">Nouveau message de contact</p>
                      </td>
                    </tr>
                    
                    <!-- Contenu principal -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                          <h2 style="color: #1f2937; font-size: 24px; font-weight: 600; margin: 0 0 20px 0;">📧 Nouveau message reçu</h2>
                          <p style="color: #6b7280; font-size: 16px; margin: 0; line-height: 1.6;">Vous avez reçu un nouveau message de contact via votre site web HabitoX.</p>
                        </div>
                        
                        <div style="background-color: #f9fafb; border-radius: 8px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #10b981;">
                          <div style="margin-bottom: 20px;">
                            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">👤 Informations du contact</h3>
                            <div style="display: flex; align-items: center; margin-bottom: 12px;">
                              <span style="background-color: #10b981; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-right: 12px; min-width: 60px; text-align: center;">Nom</span>
                              <span style="color: #374151; font-weight: 500;">${name}</span>
                            </div>
                            <div style="display: flex; align-items: center; margin-bottom: 12px;">
                              <span style="background-color: #3b82f6; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-right: 12px; min-width: 60px; text-align: center;">Email</span>
                              <span style="color: #374151; font-weight: 500;">${email}</span>
                            </div>
                          </div>
                          
                          <div>
                            <h3 style="color: #1f2937; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">💬 Message</h3>
                            <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 20px; color: #374151; line-height: 1.6; text-align: left;">
                              ${message.replace(/\n/g, '<br/>')}
                            </div>
                          </div>
                        </div>
                        
                        <div style="text-align: center; padding: 20px; background-color: #f0fdf4; border-radius: 8px; border: 1px solid #bbf7d0;">
                          <p style="color: #166534; font-size: 14px; margin: 0; font-weight: 500;">
                            💡 <strong>Conseil :</strong> Répondez rapidement à ce message pour maintenir une excellente relation client !
                          </p>
                        </div>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                        <p style="color: #6b7280; font-size: 14px; margin: 0 0 15px 0;">Envoyé automatiquement depuis votre site web HabitoX</p>
                        <div style="margin-bottom: 20px;">
                          <span style="display: inline-block; width: 60px; height: 60px; border-radius: 50%; position: relative; overflow: hidden;">
                            <img src="https://habitox.app/logo_habitox-removebg-preview.png" alt="HabitoX logo" style="width: 100%; height: 100%; object-fit: cover;">
                          </span>
                        </div>
                        <p style="color: #9ca3af; font-size: 12px; margin: 0;">© 2025 HabitoX. Tous droits réservés.</p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: errText }),
        { status: 502, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Unexpected error", details: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
});


