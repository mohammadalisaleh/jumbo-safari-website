import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()

    const {
      firstName,
      lastName,
      email,
      whatsapp,
      country,
      tripTypes,
      days,
      travelWith,
      date,
      budget,
      adults,
      children,
      notes,
    } = data

    const message = `
NEW SAFARI ENQUIRY — Jumbo Safaris Website
==========================================

CONTACT DETAILS
---------------
Name:      ${firstName} ${lastName}
Email:     ${email}
WhatsApp:  ${whatsapp || "Not provided"}
Country:   ${country || "Not provided"}

TRIP INFORMATION
----------------
What they want to do:    ${tripTypes || "Not specified"}
Travelling with:         ${travelWith}
Travel date:             ${date}
Number of days:          ${days || "Not specified"}
Budget per person:       ${budget}

TRAVELLERS
----------
Adults:   ${adults}
Children: ${children}

SPECIAL REQUESTS / NOTES
-------------------------
${notes || "None"}
    `.trim()

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `Safari Enquiry — ${firstName} ${lastName} | ${adults} adults | ${date}`,
        from_name: "Jumbo Safaris Website",
        email: "hello@jumbosafaris.com",
        message,
        replyto: email,
      }),
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({ success: true })
    } else {
      console.error("Web3Forms error:", result)
      return NextResponse.json({ success: false }, { status: 500 })
    }
  } catch (err) {
    console.error("API route error:", err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
