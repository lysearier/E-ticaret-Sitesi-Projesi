import CtaHeader from "../components/CtaHeader";
import Footer from "../components/Footer";

const CtaLayout = ({ children }) => {
  return (
    <>
      <CtaHeader />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default CtaLayout;
