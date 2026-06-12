import { NextRequest, NextResponse } from "next/server"

export const runtime = "edge"

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
      source,
    } = data

    const fullName = [firstName, lastName].filter(Boolean).join(" ").trim() || "Not provided"

    const message = `
NEW SAFARI ENQUIRY: Jumbo Safaris Website
==========================================
Sent from:  ${source || "Website"}

CONTACT DETAILS
---------------
Name:      ${fullName}
Email:     ${email || "Not provided"}
WhatsApp:  ${whatsapp || "Not provided"}
Country:   ${country || "Not provided"}

TRIP INFORMATION
----------------
What they want to do:    ${tripTypes || "Not specified"}
Travelling with:         ${travelWith || "Not specified"}
Travel date:             ${date || "Not specified"}
Number of days:          ${days || "Not specified"}
Budget per person:       ${budget || "Not specified"}

TRAVELLERS
----------
Adults:   ${adults ?? "Not specified"}
Children: ${children ?? "Not specified"}

SPECIAL REQUESTS / NOTES
-------------------------
${notes || "None"}
    `.trim()

    const subjectParts = [
      fullName,
      adults ? `${adults} adults` : null,
      date || null,
    ].filter(Boolean)

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `Safari Enquiry: ${subjectParts.join(" | ")}`,
        from_name: "Jumbo Safaris Website",
        email: "hello@jumbosafaris.com",
        message,
        replyto: email || undefined,
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
