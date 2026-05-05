---
name: build-with-claude-code
description: Replace expensive SaaS tools (Calendly, Mailchimp, Shopify, Intercom) by building them yourself in an afternoon with Claude Code. Each tool costs $0 instead of $20–$50/month. Use this skill when the user wants to build a scheduling app, email marketing tool, e-commerce store, or live chat widget from scratch using Claude Code, Supabase, Stripe, Resend, and Vercel.
---

# /build-with-claude-code

You're paying $110/month for tools Claude Code can build in an afternoon — for $0.

## Usage

```
/build-with-claude-code              # Show all 4 tools as a quick-reference card
/build-with-claude-code calendly     # Full build prompt for scheduling app
/build-with-claude-code mailchimp    # Full build prompt for email marketing
/build-with-claude-code shopify      # Full build prompt for e-commerce store
/build-with-claude-code intercom     # Full build prompt for live chat widget
```

---

## The 4 Tools You Can Stop Paying For

### TOOL 01 — Calendly ($16/mo → $0)
**What you're paying for:** A booking page where people pick a time slot and it syncs to your calendar. That's it.

**What Claude Code builds — Full Scheduling App In One Prompt:**
- Custom booking page with your branding
- Google Calendar API integration
- Email confirmations via Resend
- Deploy to Vercel for free hosting

**Prompt to use:**
```
Build a full scheduling/booking app. Stack: Next.js, Tailwind, TypeScript, Vercel.
Features:
- Booking page with available time slots (configurable)
- Google Calendar API integration to check availability and create events
- Confirmation emails via Resend API
- Admin dashboard to set available hours and view bookings
- Bookings stored in Supabase
Deploy-ready for Vercel. Use environment variables for all API keys.
```

---

### TOOL 02 — Mailchimp ($20/mo → $0)
**What you're paying for:** An email list, a template editor, and a send button. That's 90% of what most people use.

**What Claude Code builds — Email Marketing App, No Limits:**
- Subscriber signup form + landing page
- Supabase stores your email list
- Send campaigns via Resend (free tier: 3k/mo)
- Open/click tracking built in

**Prompt to use:**
```
Build an email marketing app. Stack: Next.js, Tailwind, TypeScript, Supabase, Resend API.
Features:
- Public signup form with email + name, stored in Supabase
- Admin dashboard to compose and send campaigns to all subscribers
- Resend API for bulk sending (batch if needed)
- Open tracking via pixel, click tracking via redirect links
- Unsubscribe link in every email
- Campaign history with sent count and open rate
Deploy-ready for Vercel.
```

---

### TOOL 03 — Shopify ($39/mo → $0)
**What you're paying for:** A storefront, product pages, a cart, and checkout. Plus $39/mo before you sell a single thing.

**What Claude Code builds — Your Own Store, Zero Fees:**
- Product catalog with images and variants
- Shopping cart + Stripe checkout
- Order dashboard with email confirmations
- Deploy to Vercel, no monthly platform fee

**Prompt to use:**
```
Build a full e-commerce store. Stack: Next.js, Tailwind, TypeScript, Stripe, Supabase, Vercel.
Features:
- Product catalog with images, variants (size/color), and inventory
- Shopping cart (persisted in localStorage)
- Stripe Checkout for payments (webhooks for order confirmation)
- Order confirmation emails via Resend
- Admin dashboard: add/edit products, view orders
- Supabase for products and orders storage
Deploy-ready for Vercel. No platform fees.
```

---

### TOOL 04 — Intercom ($87/mo → $0)
**What you're paying for:** A chat bubble on your website that collects questions and sends you notifications. That's the core.

**What Claude Code builds — Live Chat Widget, AI-Powered:**
- Embeddable chat widget for any site
- AI auto-replies using Claude API + your FAQ
- Conversations saved to Supabase
- Slack notifications for new messages

**Prompt to use:**
```
Build an embeddable live chat widget. Stack: React (widget), Next.js (backend), Supabase, Claude API, Slack webhooks.
Features:
- Embeddable <script> tag chat bubble for any website
- Widget opens a chat UI, sends messages to backend
- Backend: Claude API auto-responds using a provided FAQ/knowledge base (stored in Supabase)
- All conversations stored in Supabase with timestamp and visitor ID
- Slack webhook notification for each new conversation thread
- Admin dashboard to view all conversations and override AI responses
Deploy backend to Vercel. Widget as a standalone JS bundle.
```

---

## Stack Reference

| Service | Purpose | Free Tier |
|---------|---------|-----------|
| **Next.js + Vercel** | Frontend + hosting | Generous free tier |
| **Supabase** | Database + auth | 500MB free |
| **Stripe** | Payments | No monthly fee |
| **Resend** | Email sending | 3,000/mo free |
| **Claude API** | AI responses | Pay-per-use |

**Source:** @liambuilds.ai
