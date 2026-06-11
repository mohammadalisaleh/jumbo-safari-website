# Jumbo Safaris — Claude Operating Brief

Mohammadali runs Jumbo Safaris (jumbosafaris.com), a private guided Tanzania safari company based in Arusha. One-man operation. Goal: dominate Tanzania safari SEO, get real bookings, output like a 10-person company.

## Website
- Next.js (App Router), Tailwind CSS, TypeScript
- Deployed: Cloudflare Pages via GitHub auto-deploy
- Repo: mohammadalisaleh/jumbo-safari-website

## Brain Structure
~/jumbo-brain/
- founder/      — who Mohammadali is, story, philosophy
- strategy/     — business strategy, SEO playbook, social media plan
- brand/        — brand spec, voice, anti-AI writing rules
- operations/   — hotel rates, supplier contacts, vehicle info, pricing
- content/      — drafts, published posts, content calendar
- research/     — competitor analysis, market data, SEO insights
- sops/         — repeatable workflows
- sessions/     — HANDOFF files, one per session
- inbox/        — raw captures only, never auto-read

## Session Start (mandatory, every session, regardless of what the first message is)

Do this before responding to anything. Even if the first message is a question or task, run the pre-flight first.

1. Read ~/jumbo-brain/MEMORY.md
2. Read the most recent HANDOFF file in ~/jumbo-brain/sessions/
3. Output Pre-Flight Check (4 lines max, no prose):
```
⚠ [something pending or at risk]
✓ [something clear or done]
```
4. Load relevant files for the task:
   - SEO → strategy/seo-playbook.md
   - Content/writing → brand/anti-ai-writing-rules.md + founder/founder-story.md
   - Strategy → strategy/business-strategy.md + founder/founder-story.md
   - Brand/design → brand/brand-spec.md
   - Operations/pricing → operations/hotel-rates/
5. Ask what Mohammadali wants to work on today

## Session End (mandatory, every session)

1. Write HANDOFF file to ~/jumbo-brain/sessions/HANDOFF-YYYY-MM-DD-HHhMM.md:
```
# Handoff — YYYY-MM-DD HH:MM
## What We Were Working On
## What Was Decided
## What Did NOT Work (mandatory even if everything went fine)
## Next Steps
## Blockers
```
Max 1,500 tokens. No tool call history. Specific and factual.

2. Update ~/jumbo-brain/MEMORY.md — keep under 200 lines. Every decision made must be written down.

## Brand
- Forest Green #033417, Sunset Orange #FD6802, Savanna Cream #FFF7EC
- Fonts: Montserrat + Inter
- No drop shadows, no gradients, 0px border radius on cards
- Voice: expert, warm, direct — trusted guide not a salesperson
- All external content must pass brand/anti-ai-writing-rules.md before publishing

## Inbox Rule
~/jumbo-brain/inbox/ is raw captures only. Never auto-read. Process only when explicitly asked.

## Behaviour
- Never give vague suggestions — always complete, ready-to-use output
- Write full files not snippets
- Build pages to brand spec without asking
- Push toward shipping, not perfecting
- Never show bash output — report results only
- Write every decision to disk immediately
- Prices and figures must be identical everywhere they appear on the site. One itinerary = one price. Prices live in lib/data/itineraries.ts and get imported; never hardcode a price in a page file. Before shipping any page mentioning a price, grep for other mentions and reconcile.
