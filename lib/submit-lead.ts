'use server'

export type LeadData = {
  name: string
  email?: string
  phone: string
  budget: string
  location: string
  source: string // e.g. "lp1-hero", "lp2-bottom", "lp3-hero"
}

export async function submitLead(data: LeadData): Promise<{ success: boolean; error?: string }> {
  const endpoint = process.env.TINYCOMMAND_WEBHOOK_URL

  if (!endpoint) {
    console.error('[submit-lead] TINYCOMMAND_WEBHOOK_URL is not set')
    return { success: false, error: 'Configuration error: webhook URL missing' }
  }

  try {
    const payload = {
      submitted_at: new Date().toISOString(),
      source: data.source,
      name: data.name,
      email: data.email ?? '',
      phone: data.phone,
      budget: data.budget,
      location: data.location,
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const text = await response.text().catch(() => '')
      console.error('[submit-lead] Webhook returned', response.status, text)
      return { success: false, error: `Webhook error ${response.status}` }
    }

    return { success: true }
  } catch (err) {
    console.error('[submit-lead] Network error:', err instanceof Error ? err.message : err)
    return { success: false, error: 'Network error' }
  }
}
