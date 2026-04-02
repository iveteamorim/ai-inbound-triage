import { leads } from "@/data/leads";
import { triageLead } from "@/lib/triage";

function priorityClass(priority: string) {
  switch (priority) {
    case "high":
      return "badge badge-high";
    case "medium":
      return "badge badge-medium";
    default:
      return "badge badge-low";
  }
}

export function Inbox() {
  const items = leads.map((lead) => ({
    ...lead,
    triage: triageLead(lead),
  }));

  return (
    <div className="stack">
      {items.map((lead) => (
        <article key={lead.id} className="lead-card">
          <div className="lead-header">
            <div>
              <h2 className="lead-name">{lead.name}</h2>
              <p className="lead-message">{lead.message}</p>
            </div>
            <span className={priorityClass(lead.triage.priority)}>{lead.triage.priority}</span>
          </div>

          <div className="metrics">
            <div className="metric">
              <p className="metric-label">Intent</p>
              <p className="metric-value">{lead.triage.intent}</p>
            </div>

            <div className="metric">
              <p className="metric-label">Estimated value</p>
              <p className="metric-value metric-value-accent">€{lead.triage.estimatedValue}</p>
            </div>

            <div className="metric">
              <p className="metric-label">Time without reply</p>
              <p className="metric-value">{lead.hoursSinceReply}h</p>
            </div>

            <div className="metric">
              <p className="metric-label">At risk score</p>
              <p className="metric-value">{lead.triage.atRiskScore}</p>
            </div>
          </div>

          <div className="next-action">
            <p className="next-action-label">Next action</p>
            <p className="next-action-copy">{lead.triage.nextAction}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
