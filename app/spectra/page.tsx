import EventRulesPage from "../../components/EventRulesPage";

export default function SpectraPage() {
  return (
    <EventRulesPage
      eventName="SPECTRA"
      tagline="A Challenge Across Vision and Sound"
      description="An immersive stage challenge where participants enter a world of visuals and sound, testing their observation, listening, and reaction abilities. Through artistic visual frames and dynamic audio cues, teams must prove their awareness, speed, and coordination. Only those with the sharpest minds and fastest reactions will rise above the rest."
      rounds={[
        { title: "Round 1 – Frame to Fame", desc: "The screen reveals artistic frames inspired by iconic visual scenes. Teams must observe carefully and identify the correct source before time runs out. Every correct answer brings them closer to the next stage. Only the most observant teams with the highest scores will advance to the final round." },
        { title: "Round 2 – Tune & Grab", desc: "The arena comes alive with powerful audio cues. Before the teams lies a collection of props, each holding a hidden connection. As the sound plays, teams must react instantly and claim the prop that matches the cue. Speed, awareness, and instinct will decide who conquers the challenge." }
      ]}
      requirements={[
        "Team Size: 2 to 3 members",
        "Preparation time: No preparation time will be provided",
        "Response time: Limited time per visual frame and audio cue"
      ]}
    />
  );
}
