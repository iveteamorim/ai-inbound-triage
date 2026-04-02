# AI Inbound Triage

AI-powered inbound triage system focused on value, risk and next actions.

## What it does

Given inbound messages, the system:

- classifies intent
- estimates lead value
- calculates an at-risk score based on value and time without response
- recommends the next action

## Why it matters

Most AI examples focus on classification.

This example focuses on operational decision-making: what should be handled first, where revenue is at risk, and what to do next.

## Demo logic

- booking -> estimated value €120
- pricing -> estimated value €180
- info -> estimated value €60

At-risk score:

estimated value x hours since last reply

## Stack

- Next.js
- TypeScript
- Tailwind CSS

## Run locally

```bash
npm install
npm run dev
```
