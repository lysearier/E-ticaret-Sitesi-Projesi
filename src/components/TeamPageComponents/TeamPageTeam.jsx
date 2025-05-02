import TeamCard from "../cards/TeamCard";
import team1 from "../../assets/photos/Team1.jpg";
import team2 from "../../assets/photos/Team2.jpg";
import team3 from "../../assets/photos/Team3.jpg";
import team4 from "../../assets/photos/Team4.jpg";
import team5 from "../../assets/photos/Team5.jpg";
import team6 from "../../assets/photos/Team6.jpg";
import team7 from "../../assets/photos/Team7.jpg";
import team8 from "../../assets/photos/Team8.jpg";
import team9 from "../../assets/photos/Team9.jpg";

const teamMembers = [
  { name: "Georgia Young", role: "Product Designer", image: team1 },
  { name: "John Smith", role: "UX Researcher", image: team2 },
  { name: "Emily Johnson", role: "Frontend Developer", image: team3 },
  { name: "Michael Brown", role: "Backend Developer", image: team4 },
  { name: "Sofia Davis", role: "Scrum Master", image: team5 },
  { name: "William Martinez", role: "QA Engineer", image: team6 },
  { name: "Isabella Garcia", role: "Project Manager", image: team7 },
  { name: "James Wilson", role: "DevOps Engineer", image: team8 },
  { name: "Olivia Anderson", role: "UI Designer", image: team9 },
];

export default function TeamPageTeam() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}
