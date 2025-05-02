import TeamPageNavMenu from "../components/TeamPageComponents/TeamPageNavMenu";
import TeamPageHero from "../components/TeamPageComponents/TeamPageHero";
import TeamPageTeam from "../components/TeamPageComponents/TeamPageTeam";
import TeamPageTrial from "../components/TeamPageComponents/TeamPageTrial";


export default function TeamPage() {
  return (
    <div>
      <TeamPageNavMenu />
      <TeamPageHero />
      <TeamPageTeam />
      <TeamPageTrial />
    </div>
  );
}