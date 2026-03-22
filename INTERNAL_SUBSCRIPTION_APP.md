## Internal Subscription Management App

This is an internal web/app used only by the owner/admin to manage water delivery subscriptions, branches, and riders. It is **not** for customers.

### Main Goals

- **Centralize subscription management** (Starter / Standard / Premium)
- **Track payments** (GCash / cash)
- **Generate simple invoices/receipts**
- **Control access limits** (how many stores and riders each owner can use)
- **Have an audit trail** of changes (who paid, when, how much, for which plan)

---

## Core Concepts

- **Owner**: Business owner who subscribes (has 1–3 branches).
- **Plan**: Starter / Standard / Premium.
- **Subscription**: An active plan with start date and expiry date.
- **Store (Branch)**: A physical water refilling store.
- **Rider**: Delivery staff account under a store.

---

## Key Features

### 1. Owner & Account Management

- **Owner list**
  - View all owners with: name, phone, email, current plan, expiry date, status.
- **Create / edit owner**
  - Add new owner with contact details.
  - Reset password / send login information (if needed for the main app).
- **Owner detail view**
  - See all stores, riders, and subscription history for that owner.

---

### 2. Plan & Subscription Management

- **Assign / change plan**
  - Choose Starter / Standard / Premium for each owner.
  - Set subscription **start date** and **expiry date** (e.g. +30 days, +90 days).
- **Renew subscription**
  - Fast action to extend expiry by 1, 3, or 12 months after payment.
- **Upgrade / downgrade**
  - Change plan (Starter → Standard → Premium, etc.).
  - Optionally pro‑rate or just change on next billing date (simple at first).
- **Enforce limits**
  - Automatically limit:
    - Max number of stores for the current plan.
    - Max number of riders across those stores.
  - Show warning in UI if owner hits the limit.

---

### 3. Payment & Invoice Handling

- **Record payments**
  - Add a payment record with:
    - Owner
    - Date of payment
    - Amount (₱)
    - Payment method (GCash, cash, bank transfer)
    - Notes (e.g. GCash ref number)
- **Automatic subscription update**
  - When you save a payment:
    - Choose what it is for (1 month Starter, 1 month Standard, etc.).
    - Automatically extend the subscription expiry based on the plan.
- **Invoices / receipts**
  - Generate a simple invoice/receipt with:
    - Owner name and details
    - Plan and billing period (e.g. Starter, April 1–30, 2026)
    - Amount paid and payment method
  - Option to:
    - Download as PDF or image.
    - Copy invoice text to send via Messenger/Viber.
- **Payment history**
  - For each owner, see a list of all payments and related invoices.

---

### 4. Store & Rider Management

- **Store management**
  - Add/edit stores (branches) under an owner.
  - See how many active stores vs. the plan limit.
  - Disable/enable a store if needed.
- **Rider management**
  - Add/edit riders and assign them to stores.
  - See rider count vs. plan limit.
  - Disable/enable rider accounts if a rider leaves.

---

### 5. Monitoring & Reports

- **Dashboard**
  - Total number of active owners, by plan.
  - How many subscriptions will expire in the next 7/30 days.
  - Monthly recurring revenue estimate (based on active plans).
- **Subscription status report**
  - Filter owners by:
    - Active / expired / expiring soon.
    - Plan type.
- **Payment report**
  - List of payments within a date range.
  - Totals by payment method (GCash vs. cash).

---

### 6. Security & Audit Trail

- **Admin users**
  - Separate logins for people who can access this internal app.
- **Roles**
  - At least:
    - `owner_admin` – full access.
    - `staff_admin` – can record payments and renewals, but cannot delete owners.
- **Audit log**
  - Track important actions:
    - Created/updated subscription.
    - Changed plan.
    - Recorded payment.
    - Extended expiry date manually.

---

## Nice-to-Have (Future)

- **Automatic email or SMS reminder**
  - Notify owners when their subscription will expire soon.
- **Export to CSV**
  - Export owners, subscriptions, and payment history.
- **Integration with main app**
  - Real-time sync so when you renew in this internal app, the owner’s app immediately unlocks or extends access.