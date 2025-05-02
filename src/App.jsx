import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import MainLayout from "./layout/MainLayout";
import CtaLayout from "./layout/CtaLayout";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";


function App() {
  return (
    <div className="min-h-screen w-full">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <MainLayout>
              <HomePage />
            </MainLayout>
          </Route>
          <Route path="/shop">
            <MainLayout>
              <ShopPage />
            </MainLayout>
          </Route>
          <Route path="/product/:id">
            <MainLayout>
              <ProductDetailPage />
            </MainLayout>
          </Route>
          <Route path="/contact">
            <CtaLayout>
              <ContactPage />
            </CtaLayout>
          </Route>
          <Route path="/team">
            <CtaLayout>
              <TeamPage />
            </CtaLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
