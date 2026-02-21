import EventRulesPage from "../../components/EventRulesPage";

export default function NovaNatakaPage() {
  return (
    <EventRulesPage
      eventName="NOVA NATAKA"
      tagline="A Stage Born Among the Stars"
      description="A creative stage challenge consisting of two rounds focused on non-verbal communication, expression, and storytelling. Participants convey words, ideas, and morals through actions, lip movements, and performances. Teams are judged on communication skills, creativity, and overall stage presence."
      rounds={[
        { title: "Round 1 – Guess the Unsaid", desc: "One participant wears headphones while another conveys a word or phrase using only actions or lip movements. The teammate guesses within the given time." },
        { title: "Round 2 – Stage Storm", desc: "Teams perform a short moral story or skit based on characters or themes provided, showcasing creativity and stage presence." }
      ]}
      requirements={[
        "Team Size: 3 members",
        "Preparation time: 10 minutes",
        "Performance time: 5 minutes"
      ]}
      metrics={["Communication", "Creativity", "Coordination", "Accuracy"]}
      coordinator={[{ name: "HARRIS RAJ.B", contact: process.env.NOVANATAKA_COORD_1_PHONE! }]}
    />
  );
}
