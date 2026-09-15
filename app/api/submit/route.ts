import { NextRequest, NextResponse } from 'next/server'
import { Pool } from 'pg'

const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL }) : null

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, budget, location, source } = body

    // 1. Save to Neon database
    if (pool) {
      try {
        await pool.query(
          `INSERT INTO leads (name, email, phone, budget, location, source)
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [name || '', email || '', phone || '', budget || '', location || '', source || '']
        )
      } catch (dbErr) {
        console.error('[submit] Neon insert failed:', dbErr)
      }
    }

    // 2. Send to Google Sheets via Apps Script
    const webhookUrl = process.env.WEBHOOK_URL
    if (webhookUrl) {
      const url = new URL(webhookUrl)
      // Prefix phone with a space so Google Sheets stores it as plain text,
      // not a formula — prevents #ERROR! on numbers starting with +
      const safePhone = phone ? ` ${phone}` : ''

      url.searchParams.set('name',     name     || '')
      url.searchParams.set('email',    email    || '')
      url.searchParams.set('phone',    safePhone)
      url.searchParams.set('budget',   budget   || '')
      url.searchParams.set('location', location || '')
      url.searchParams.set('source',   source   || '')

      const response = await fetch(url.toString(), { method: 'GET' })
      if (!response.ok) {
        console.error('[submit] Apps Script error:', response.status)
      }
    } else {
      console.error('[submit] WEBHOOK_URL not set — skipping Google Sheets')
    }

    return NextResponse.json({ status: 'ok' })
  } catch (err) {
    console.error('[submit] Unexpected error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
