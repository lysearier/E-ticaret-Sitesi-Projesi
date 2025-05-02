import React from "react";
import leftPhoto from "../../assets/photos/TeamHeroPhoto1.jpg";
import team1 from "../../assets/photos/TeamHeroPhoto2.jpg";
import team2 from "../../assets/photos/TeamHeroPhoto3.jpg";
import team3 from "../../assets/photos/TeamHeroPhoto4.jpg";
import team4 from "../../assets/photos/TeamHeroPhoto5.jpg";

export default function TeamPageHero() {
  return (
    <div className="flex flex-col w-full gap-2 md:flex-row md:h-[600px]">
      {/* Sol: Büyük Fotoğraf */}
      <div className="w-full h-64 md:w-1/2 md:h-full">
        <img
          src={leftPhoto}
          alt="Main Team Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sağ: 2x2 Küçük Fotoğraflar */}
      <div className="flex flex-col w-full px-0 gap-2 md:px-2 md:w-1/2 md:justify-center md:items-center">
        <div className="flex w-full h-40 gap-2 md:h-1/2">
          <img
            src={team1}
            alt="Team Member 1"
            className="w-1/2 h-full object-cover"
          />
          <img
            src={team2}
            alt="Team Member 2"
            className="w-1/2 h-full object-cover"
          />
        </div>
        <div className="flex w-full h-40 gap-2 md:h-1/2">
          <img
            src={team3}
            alt="Team Member 3"
            className="w-1/2 h-full object-cover"
          />
          <img
            src={team4}
            alt="Team Member 4"
            className="w-1/2 h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
