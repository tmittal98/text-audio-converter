import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBarComponent from "./components/navbar.component";
import HomePage from "./components/screens/HomePage";
import LinkComponent from './components/screens/linkcomponent';
import TextComponent from './components/screens/textcomponent';
import ResultComponent from "./components/screens/resultcomponent";

function App() {
  return (
    <Router>
      <NavBarComponent />
      <Route path="/" exact component={HomePage} />
      <Route path="/link" exact component={LinkComponent} />
      <Route path="/text" exact component={TextComponent} />
      <Route path="/result" exact component={ResultComponent} />
    </Router>
  );
}

export default App;
