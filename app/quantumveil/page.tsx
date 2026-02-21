import EventRulesPage from "../../components/EventRulesPage";

export default function QuantumVeilPage() {
  return (
    <EventRulesPage
      eventName="QUANTUM VEIL"
      tagline="Where Every Layer Hides the Truth"
      description="A high-intensity technical challenge featuring rounds on logical reasoning, encrypted clues, and code reconstruction. Participants decode hidden patterns, analyze system signals, and restore corrupted logic through precise coding. Teams are evaluated based on accuracy, analytical thinking, and execution under pressure."
      rounds={[
        { title: "Round 1: Clue Nexus", desc: "Signal Decoding & Pattern Analysis" },
        { title: "Round 2: Shadow Code", desc: "Logic Reconstruction & Code Execution" }
      ]}
      requirements={[
        "Team Size: 1–2 Operatives",
        "Requirement: Laptop"
      ]}
      duration="60 Minutes"
      evaluationMetrics={["Accuracy", "Logical Thinking", "Analytical Ability"]}
      prize={[
        { position: "1st Place", reward: "₹750" },
        { position: "2nd Place", reward: "₹500" },
        { position: "3rd Place", reward: "₹250" }
      ]}
      coordinator={[{ name: "Arun Kumar", contact: process.env.QUANTUMVEIL_COORD_1_PHONE! }]}
    />
  );
}
