import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
