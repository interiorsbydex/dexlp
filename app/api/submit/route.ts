import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL }) : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, budget, location, source } = body;

    // 1. Save to Neon database
    if (pool) {
      try {
        await pool.query(
          `INSERT INTO leads (name, email, phone, budget, location, source)
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [name || "", email || "", phone || "", budget || "", location || "", source || ""],
        );
      } catch (dbErr) {
        console.error("[submit] Neon insert failed:", dbErr);
      }
    }

    // 2. Send to Google Sheets via Apps Script
    const endpoint = process.env.WEBHOOK_URL;

    if (!endpoint) {
      console.error("[submit-lead] WEBHOOK_URL is not set");
      return { success: false, error: "Configuration error: webhook URL missing" };
    }

    try {
      const payload = {
        submitted_at: new Date().toISOString(),
        source: source,
        name: name,
        email: email ?? "",
        phone: phone,
        budget: budget,
        location: location,
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => "");
        console.error("[submit-lead] Webhook returned", response.status, text);
        return NextResponse.json({ success: false, error: `Webhook error ${response.status}` });
      }

      return NextResponse.json({ status: "ok" });
    } catch (err) {
      console.error("[submit-lead] Network error:", err instanceof Error ? err.message : err);
      return NextResponse.json({ success: false, error: "Network error" }, { status: 500 });
    }
  } catch (err) {
    console.error("[submit] Unexpected error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
