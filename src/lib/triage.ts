import type { Lead } from "@/data/leads";

export type Intent = "booking" | "pricing" | "info" | "other";
export type Priority = "high" | "medium" | "low";

export type TriageResult = {
  intent: Intent;
  estimatedValue: number;
  atRiskScore: number;
  priority: Priority;
  nextAction: string;
};

function detectIntent(message: string): Intent {
  const text = message.toLowerCase();

  if (
    text.includes("book") ||
    text.includes("appointment") ||
    text.includes("availability") ||
    text.includes("confirm")
  ) {
    return "booking";
  }

  if (
    text.includes("pricing") ||
    text.includes("price") ||
    text.includes("package") ||
    text.includes("cost")
  ) {
    return "pricing";
  }

  if (
    text.includes("information") ||
    text.includes("services") ||
    text.includes("info")
  ) {
    return "info";
  }

  return "other";
}

function estimatedValueByIntent(intent: Intent): number {
  switch (intent) {
    case "booking":
      return 120;
    case "pricing":
      return 180;
    case "info":
      return 60;
    default:
      return 0;
  }
}

function getPriority(atRiskScore: number): Priority {
  if (atRiskScore >= 1000) return "high";
  if (atRiskScore >= 300) return "medium";
  return "low";
}

function getNextAction(intent: Intent, priority: Priority): string {
  if (priority === "high" && intent === "pricing") {
    return "Reply now with pricing details and a clear conversion CTA.";
  }

  if (priority === "high" && intent === "booking") {
    return "Reply now and offer the nearest available slot.";
  }

  if (intent === "booking") {
    return "Send available times and prompt for confirmation.";
  }

  if (intent === "pricing") {
    return "Share package options and invite the lead to choose one.";
  }

  if (intent === "info") {
    return "Send a concise overview and ask a qualifying follow-up question.";
  }

  return "Review manually.";
}

export function triageLead(lead: Lead): TriageResult {
  const intent = detectIntent(lead.message);
  const estimatedValue = estimatedValueByIntent(intent);
  const atRiskScore = estimatedValue * lead.hoursSinceReply;
  const priority = getPriority(atRiskScore);
  const nextAction = getNextAction(intent, priority);

  return {
    intent,
    estimatedValue,
    atRiskScore,
    priority,
    nextAction,
  };
}
