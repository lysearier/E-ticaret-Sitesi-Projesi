import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Router>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
