import ContactPageHeader from "../components/ContactPageComponents/ContactPageHeader";
import ContactPageHero from "../components/ContactPageComponents/ContactPageHero";
import ContactPageSupport from "../components/ContactPageComponents/ContactPageSupport";
import ContentPageTryIt from "../components/ContactPageComponents/ContactPageTryIt";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div>
      <ContactPageHeader />
      <ContactPageHero />
      <ContactPageSupport />
      <ContentPageTryIt />
      <Footer />
    </div>
  );
}