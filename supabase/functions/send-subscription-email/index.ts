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
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Invalid email" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    console.log("RESEND_API_KEY", RESEND_API_KEY);
    
    if (!RESEND_API_KEY) {
      console.log("missing RESEND_API_KEY");
      return new Response(
        JSON.stringify({ error: "Missing RESEND_API_KEY" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }
    console.log("test");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "HabitoX <no-reply@habitox.app>",
        to: [email],
        subject: "Welcome to HabitoX",
        html: `
          <!DOCTYPE html>
          <html lang="fr">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to HabitoX</title>
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
                            <img src="https://habitox.app/logo_launcher_habitox_android.png" alt="HabitoX logo" style="width: 100%; height: 100%; object-fit: cover;">
                          </div>
                        </div>
                        <h1 style="color: #ffffff; font-size: 28px; font-weight: 600; margin: 0; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">HabitoX</h1>
                        <p style="color: #e0f2fe; font-size: 16px; margin: 8px 0 0 0; opacity: 0.9;">New subscription</p>
                      </td>
                    </tr>
                    
                    <!-- Contenu principal -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <div style="text-align: center; margin-bottom: 30px;">
                          <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); border-radius: 50%; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; font-size: 30px;">
                            🎉
                          </div>
                          <h2 style="color: #1f2937; font-size: 24px; font-weight: 600; margin: 0 0 20px 0;">Thank you for your subscription!</h2>
                          <p style="color: #6b7280; font-size: 16px; margin: 0; line-height: 1.6;">We are happy to welcome you into the HabitoX community!</p>
                        </div>
                        
                        <div style="background-color: #f0fdf4; border-radius: 8px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #10b981;">
                          <h3 style="color: #166534; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">🚀 What you can expect:</h3>
                          <ul style="color: #166534; font-size: 16px; line-height: 1.6; margin: 0; padding-left: 20px;">
                            <li style="margin-bottom: 8px;">Exclusive news on the progress of the project</li>
                            <li style="margin-bottom: 8px;">Early previews of new features</li>
                            <li style="margin-bottom: 8px;">Early access to beta versions</li>
                          </ul>
                        </div>
                        
                        <div style="background-color: #eff6ff; border-radius: 8px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #3b82f6;">
                          <h3 style="color: #1e40af; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">💡 Next step:</h3>
                          <p style="color: #1e40af; font-size: 16px; line-height: 1.6; margin: 0;">Stay connected! We will soon send you your first email with exclusive information about HabitoX.</p>
                        </div>
                        
                        <div style="text-align: center; padding: 20px; background-color: #fef3c7; border-radius: 8px; border: 1px solid #fde68a;">
                          <p style="color: #92400e; font-size: 14px; margin: 0; font-weight: 500;">
                            💬 <strong>Need help?</strong> Feel free to contact us if you have any questions!
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
                            <img src="https://habitox.app/logo_launcher_habitox_android.png" alt="HabitoX logo" style="width: 100%; height: 100%; object-fit: cover;">
                          </span>
                        </div>
                        <p style="color: #9ca3af; font-size: 12px; margin: 0;">© 2025 HabitoX. All rights reserved.</p>
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
      console.log("errText", errText);
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
    console.log("error", error);
    return new Response(
      JSON.stringify({ error: "Unexpected error test", details: String(error) }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
});


