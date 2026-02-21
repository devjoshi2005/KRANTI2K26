import EventRulesPage from "../../components/EventRulesPage";

export default function QueryXPage() {
  return (
    <EventRulesPage
      eventName="QUERYX: DATABASE CHRONICLES"
      tagline="Where Logic Meets Investigation"
      description="A high-intensity technical challenge designed to test logical thinking, analytical ability, and SQL skills. Participants compete in two strategic rounds, combining technical puzzle-solving and real-time database investigation. Teams will be judged on accuracy, speed, logical reasoning, and problem-solving efficiency."
      rounds={[
        { title: "Round 1: Technical Crossword Challenge", desc: "Solve a crossword featuring database and SQL concepts. The fastest correct solvers qualify for Round 2." },
        { title: "Round 2: Database Investigation Challenge", desc: "Analyze a real-world scenario using structured databases. Retrieve evidence through SQL queries to identify the correct conclusion." }
      ]}
      requirements={[
        "Team Size: 1–2 Members"
      ]}
      duration="45–60 Minutes"
      evaluationMetrics={["Accuracy", "Speed", "Logical Approach", "Teamwork"]}
      prize={[
        { position: "1st Place", reward: "₹750" },
        { position: "2nd Place", reward: "₹500" },
        { position: "3rd Place", reward: "₹250" }
      ]}
      coordinator={[
        { name: "Logeswaran A", contact: process.env.QUERYX_COORD_1_PHONE! },
        { name: "Sivaramakrishnan ", contact: process.env.QUERYX_COORD_2_PHONE! }
      ]}
    />
  );
}
