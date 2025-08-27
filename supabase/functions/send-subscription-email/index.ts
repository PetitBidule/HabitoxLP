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

    const RESEND_API_KEY = "re_dgaSCXti_4ZfjJ8iT9c4j6ADmwhVKcKfU";
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
        to: ['moyenbidule@gmail.com'],
        subject: "Bienvenue sur HabitoX",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Merci pour votre abonnement 👋</h2>
            <p>Bienvenue dans la communauté HabitoX !</p>
            <p>Vous recevrez bientôt des nouvelles sur l'avancement du projet, des aperçus et des accès anticipés.</p>
            <p>À très vite,<br/>L'équipe HabitoX</p>
          </div>
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


