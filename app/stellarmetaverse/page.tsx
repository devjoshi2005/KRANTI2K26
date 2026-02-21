import EventRulesPage from "../../components/EventRulesPage";

export default function StellarMetaversePage() {
  return (
    <EventRulesPage
      eventName="STELLAR-METAVERSE"
      tagline="Think beyond reality. Predict, connect, and create."
      description="Stellar-Metaverse is a non-technical event that tests prediction, logic, creativity, and teamwork. Participants will face engaging analytical and creative challenges across two exciting rounds. Think smart, act fast, and create beyond the obvious to stand out."
      rounds={[
        {
          title: "Round 1 – ParallaxPrime",
          desc: "A visual-based analytical round testing observation, reasoning, and prediction skills."
        },
        {
          title: "Round 2 – Convolunomy",
          desc: "A rapid creative round that challenges speed, originality, and lateral thinking."
        }
      ]}
      requirements={[
        "Team Size: 2–3 members per team",
        "Each team must have at least one laptop or mobile device"
      ]}
      coordinator={[{ name: "Bharathwaj.K", contact: process.env.STELLARMETAVERSE_COORD_1_PHONE!, email: "bharathwaj0712@gmail.com" }]}
      googleForm="https://forms.gle/awKqna6184qZrWfbA"
    />
  );
}
