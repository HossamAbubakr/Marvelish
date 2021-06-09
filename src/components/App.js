import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HeroList from "./HeroList";
import Dashboard from "./Dashboard";
import ComicsList from "./ComicsList";
import NotFound from "./NotFound";
function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <a href="/characters">
          <img src="/images/logo.png" alt="marvelish logo" id="main-logo"></img>
        </a>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/characters">
            <HeroList />
          </Route>
          <Route path="/characters/:characterID">
            <ComicsList />
          </Route>
          <Route path="/not-found">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <div className="footer">
        <p>Marvelish. The Comic Catalog App</p>
        <p>Made by Hossam Abubakr.</p>
        <a href="https://github.com/HossamAbubakr" rel="noreferrer" target="_blank">
          <img src="/images/github.png" alt="github"></img>
        </a>
        <a href="https://www.linkedin.com/in/hossamabubakr/" rel="noreferrer" target="_blank">
          <img src="/images/linkedin.png" alt="linkedin"></img>
        </a>
      </div>
    </div>
  );
}

export default App;
