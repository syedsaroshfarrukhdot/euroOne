import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Step2 from "./pages/Step2";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";
import Step6 from "./pages/Step6";
import Step7 from "./pages/Step7";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Step2" component={Step2} />
      <Route path="/Step4" component={Step4} />
      <Route path="/Step5" component={Step5} />
      <Route path="/Step6" component={Step6} />
      <Route path="/Step7" component={Step7} />
    </Switch>
  );
}

export default App;
