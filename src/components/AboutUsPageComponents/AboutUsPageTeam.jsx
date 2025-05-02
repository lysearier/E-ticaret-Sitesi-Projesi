import React from "react";
import TeamCard from "../cards/TeamCard";

import team7 from "../../assets/photos/Team7.jpg";
import team8 from "../../assets/photos/Team8.jpg";
import team9 from "../../assets/photos/Team9.jpg";

export default function AboutUsPageTeam() {
  const team = [
    { name: "Isabella Garcia", role: "Project Manager", image: team7 },
    { name: "James Wilson", role: "DevOps Engineer", image: team8 },
    { name: "Olivia Anderson", role: "UI Designer", image: team9 },
  ];

  return (
    <div className="flex flex-col items-center justify-start px-4 py-8">
      <div className="text-center max-w-2xl mb-10">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 w-full max-w-6xl">
        {team.map((member, index) => (
          <div key={index} className="w-full sm:w-[45%] lg:w-[30%]">
            <TeamCard
              image={member.image}
              name={member.name}
              role={member.role}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
