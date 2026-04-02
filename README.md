# AI Inbound Triage

AI-powered inbound triage system focused on value, risk and next actions.

## Overview

This project demonstrates how inbound messages can be turned into operational decisions.

Instead of only classifying conversations, the system focuses on:

- estimating potential value
- identifying leads "at risk"
- prioritizing based on value × delay
- recommending next actions

The goal is to move from AI outputs to real business outcomes.

---

## What it does

Given inbound messages, the system:

- classifies intent
- estimates lead value
- calculates an at-risk score based on value and time without response
- prioritizes conversations based on risk
- recommends the next action

---

## Why this matters

In real-world operations, slow response times lead to lost revenue.

This system prioritizes conversations based on economic impact, not just urgency.

---

## Demo logic

- booking → estimated value €120  
- pricing → estimated value €180  
- info → estimated value €60  

At-risk score:
