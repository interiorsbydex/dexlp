# Google Sheets Integration Setup

## Using TinyCommand

Your landing page is now ready to capture leads directly to Google Sheets using **TinyCommand** (free service).

### Quick Setup (5 minutes)

1. **Visit TinyCommand**: https://www.tinycommand.com/

2. **Create a Free Account** and set up your Google Sheets

3. **Get Your Endpoint URL** from TinyCommand (looks like: `https://api.tinycommand.com/webhooks/...`)

4. **Add to Your Project Environment Variables**:
   - Go to your Vercel Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_TINYCOMMAND_ENDPOINT=<your-endpoint-url>`

5. **That's it!** Your form submissions will now flow directly to Google Sheets

### What Gets Captured

Each form submission includes:
- Full Name
- Email Address  
- Phone Number
- Budget Range
- Location (Chennai)
- Timestamp

### The Data Flow

```
User Submits Form
        ↓
Lead Form Validates
        ↓
submitLead() Server Action
        ↓
TinyCommand API
        ↓
Google Sheet (Your Account)
```

### File Locations

- **Form Component**: `/components/lead-form.tsx`
- **Server Action**: `/lib/submit-lead.ts`
- **Environment Variable**: `NEXT_PUBLIC_TINYCOMMAND_ENDPOINT`

### Troubleshooting

- **Form not submitting?** Check browser console for errors
- **Endpoint not set?** Add the environment variable and redeploy
- **No data in sheet?** Verify TinyCommand URL is correct in settings

### Alternative: Other Services

Instead of TinyCommand, you can also use:
- **Zapier** (zapier.com) - More features, paid
- **Make** (make.com) - Automation platform
- **Custom API** - Build your own backend endpoint

Just update the `/lib/submit-lead.ts` file with your API endpoint and payload format.
