import EventRulesPage from "../../components/EventRulesPage";

export default function LogicRelayPage() {
  return (
    <EventRulesPage
      eventName="LOGIC RELAY"
      tagline="Decode the Drama. Debug the Chaos."
      description="Logic Relay is a high-intensity technical event that blends logical reasoning with real-time debugging under pressure. Participants compete in two strategic rounds combining tech-based puzzle solving and collaborative coding challenges. Think fast, coordinate smartly, and debug efficiently to outperform your competition."
      rounds={[
        {
          title: "Round 1 – Logic Sprint",
          desc: "A relay-style puzzle and logic task round that tests analytical thinking, speed, and coordination."
        },
        {
          title: "Round 2 – Debug Dash",
          desc: "A live debugging challenge where teams fix real programs under timed laptop swaps."
        }
      ]}
      requirements={[
        "Team Size: 2 Members per team",
        "Laptop Mandatory"
      ]}
      prize={[
        { position: "1st Place", reward: "₹750" },
        { position: "2nd Place", reward: "₹500" },
        { position: "3rd Place", reward: "₹250" }
      ]}
      coordinator={[
        {  name: "GURU RAAKESH S", contact: process.env.LOGICRELAY_COORD_1_PHONE!}
      ]}
    />
  );
}
