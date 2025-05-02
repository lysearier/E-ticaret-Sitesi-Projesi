import AboutUsPageHero from "../components/AboutUsPageComponents/AboutUsPageHero";
import AboutUsPageContent from "../components/AboutUsPageComponents/AboutUsPageContent";
import AboutUsPageStats from "../components/AboutUsPageComponents/AboutUsPageStats";
import AboutUsPageVideo from "../components/AboutUsPageComponents/AboutUsPageVideo";
import AboutUsPageTeam from "../components/AboutUsPageComponents/AboutUsPageTeam";
import AboutUsPageClients from "../components/AboutUsPageComponents/AboutUsPageClients";
import AboutUsPageTestimonials from "../components/AboutUsPageComponents/AboutUsPageTestimonials";

export default function AboutUsPage() {
  return (
    <div>
      <AboutUsPageHero />
      <AboutUsPageContent />
      <AboutUsPageStats />
      <AboutUsPageVideo />
      <AboutUsPageTeam />
      <AboutUsPageClients />
      <AboutUsPageTestimonials />
    </div>
  );
}