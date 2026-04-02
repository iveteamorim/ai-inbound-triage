import { Inbox } from "@/components/inbox";

export default function Home() {
  return (
    <main className="shell">
      <div className="container">
        <section className="hero">
          <p className="eyebrow">AI Inbound Triage</p>
          <h1 className="hero-title">From inbound messages to operational decisions</h1>
          <p className="hero-copy">
            A simple example of value-based lead triage using estimated value, response delay,
            at-risk scoring and next-action recommendations.
          </p>
        </section>

        <Inbox />
      </div>
    </main>
  );
}
