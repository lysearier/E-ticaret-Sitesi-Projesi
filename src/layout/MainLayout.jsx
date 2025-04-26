import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="lg:mt-40">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout;
