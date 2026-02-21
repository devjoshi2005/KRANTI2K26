import EventRulesPage from "../../components/EventRulesPage";

export default function CodeRIdPage() {
  return (
    <EventRulesPage
      eventName="C0DE R∑D"
      tagline="Hack, Defend & Dominate"
      description="A cybersecurity challenge consisting of rounds on data breaches, phishing detection, and cryptographic puzzles. Participants analyze cyber threats and propose defense strategies. This flagship event tests your ability to think like both attacker and defender in the digital realm. Teams are judged on accuracy, strategy, and problem-solving speed."
      rounds={[
        {
          title: "Round 1 – CTF Questions + Viva",
          desc : `• every team will be provided with a total of 20 CTF related questions ranging from subtopics like binary exploitation,reverse engineering,cryptography,forensics,steganography and miscellaneous (like reconnaissance) with different set of difficulties
          • more the difficulty , more you can earn points (easy = 5 points,medium = 10 points,hard = 20 points )
          • Inbetween round 1, coordinators can wish to select a particular team and ask them a technical cybersecurity question (with no choice) . If team answers correctly in 1 try team gets bonus point of 10 points else -15 points if wrongly answered else no point gain if team members choose to withdraw to answer
          • top 10 teams with maximum number of points accumulated at the end, proceeds to round 2
          • With in 10:00 to 10:15 the shortlisted teams will be announced.`
        },
        {
          title: "Round 2 - Cybersecurity Final CTF + Rapid fire",
          desc: `• Top 10 teams will be assigned another set of 10 tough CTF questions (each of points 10) A team need not have to complete all set of  10 questions, it just a matter of who has accumulated highest number of points within half an hour time period .
                • Out of 10 teams, top 5 teams  which will solve the ten question in short amount of time or will score the more points will be moving forward to rapid fire.
                • Out of top 5 teams , the 3 teams which answer the most question and will be announced as winners.`
        }
      ]}
      requirements={[
        "Team Size: 1-2 Members",
        "Laptop Mandatory",
        "Basic knowledge of cybersecurity concepts recommended"
      ]}
      duration="90 Minutes"
      evaluationMetrics={[
        "Accuracy of threat analysis",
        "Defense strategy effectiveness",
        "Problem-solving speed",
        "Technical understanding"
      ]}
      prize={[
        { position: "1st Place", reward: "₹2000" },
        { position: "2nd Place", reward: "₹1000" },
        { position: "3rd Place", reward: "₹750" }
      ]}
      coordinator={[
        { name: "Pradosh Gopalakrishnan", contact: process.env.CODERID_COORD_1_PHONE! },
        { name: "Dev Vikram Joshi", contact: process.env.CODERID_COORD_2_PHONE! }
      ]}
    />
  );
}
