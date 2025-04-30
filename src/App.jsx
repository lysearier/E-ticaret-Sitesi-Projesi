import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetailPage";
import MainLayout from "./layout/MainLayout";


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
              <ProductDetail />
            </MainLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
