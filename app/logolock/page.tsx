import EventRulesPage from "../../components/EventRulesPage";

export default function LogoLockPage() {
  return (
    <EventRulesPage
      eventName="LOGOLOCK"
      tagline="Test Your Reflexes, Coordination, and Brand Intelligence"
      description="A fast-paced quiz challenge designed to test reflexes, coordination, and brand intelligence. The event consists of multiple rounds involving logo identification through a unique call-based response system and competitive one-on-one face-offs. Participants must quickly analyze, react, and answer under pressure while competing for higher scores. Teams are judged based on speed, accuracy, and strategic decision-making."
      rounds={[
        { title: "Round 1: Logo Reflex Challenge", desc: "A call-based answering round where teams identify logos rapidly. Quick thinking and brand recall are essential." },
        { title: "Round 2: Head-to-Head Knowledge Battle", desc: "Competitive one-on-one face-offs testing deep brand knowledge and design intuition." }
      ]}
      requirements={[
        "Team Size: 2 members",
        "Requirement: Mobile phone (1 per team)"
      ]}
      coordinator={[{ name: "M Badrinath", contact: process.env.LOGOLOCK_COORD_1_PHONE! }]}
    />
  );
}
