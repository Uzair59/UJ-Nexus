import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, budget, details } = body

    if (!name || !email || !company || !budget || !details) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('RESEND_API_KEY environment variable is missing. Simulating successful send in local debug mode.')
      console.log('Submitted Inquiry Data:', body)
      return NextResponse.json({ success: true, simulated: true })
    }

    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
      from: 'UJ Nexus Inquiries <onboarding@resend.dev>',
      to: ['uzairrajpoot602@gmail.com'],
      subject: 'New Project Inquiry - UJ Nexus',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Project Inquiry</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; color: #1f2937; margin: 0; padding: 40px; }
            .container { max-width: 600px; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); padding: 40px; margin: 0 auto; border: 1px solid #e5e7eb; }
            .header { border-bottom: 2px solid #f3f4f6; padding-bottom: 20px; margin-bottom: 30px; }
            .logo { font-size: 24px; font-weight: 800; color: #4F46E5; }
            .logo span { color: #7C3AED; }
            .title { font-size: 20px; font-weight: 700; margin-top: 10px; color: #111827; }
            .grid { display: grid; gap: 20px; }
            .item { border-bottom: 1px solid #f3f4f6; padding-bottom: 15px; }
            .label { font-size: 11px; font-weight: 700; text-transform: uppercase; color: #9ca3af; letter-spacing: 0.05em; margin-bottom: 5px; }
            .value { font-size: 15px; color: #374151; font-weight: 500; }
            .details-box { background-color: #f9fafb; border-radius: 8px; padding: 15px; border: 1px solid #f3f4f6; font-size: 14px; line-height: 1.6; color: #4b5563; }
            .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">UJ <span>Nexus</span></div>
              <div class="title">New Project Inquiry Received</div>
            </div>
            
            <div style="margin-top: 24px; display: table; width: 100%;">
              <div style="display: table-row;">
                <div style="display: table-cell; padding-bottom: 15px; width: 50%;">
                  <div class="label">Full Name</div>
                  <div class="value">${name}</div>
                </div>
                <div style="display: table-cell; padding-bottom: 15px; width: 50%;">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${email}" style="color: #4F46E5; text-decoration: none;">${email}</a></div>
                </div>
              </div>
              <div style="display: table-row;">
                <div style="display: table-cell; padding-bottom: 15px;">
                  <div class="label">Company Name</div>
                  <div class="value">${company}</div>
                </div>
                <div style="display: table-cell; padding-bottom: 15px;">
                  <div class="label">Estimated Budget</div>
                  <div class="value" style="color: #059669; font-weight: 700;">${budget}</div>
                </div>
              </div>
            </div>

            <div style="margin-top: 20px; border-top: 1px solid #f3f4f6; padding-top: 20px;">
              <div class="label" style="margin-bottom: 10px;">Project Details</div>
              <div class="details-box">${details.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <p>This inquiry was submitted via the contact form on ujnexus.com.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend email error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error('Inquiry API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
