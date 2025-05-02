import ContactPageHero from "../components/ContactPageComponents/ContactPageHero";
import ContactPageSupport from "../components/ContactPageComponents/ContactPageSupport";
import ContentPageTryIt from "../components/ContactPageComponents/ContactPageTryIt";

export default function ContactPage() {
  return (
    <div>
      <ContactPageHero />
      <ContactPageSupport />
      <ContentPageTryIt />
    </div>
  );
}