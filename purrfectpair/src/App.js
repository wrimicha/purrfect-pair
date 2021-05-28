import "./App.css";
import Nav from "./nav/nav";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import HomePage from "./HomePage/home";
import Contact from "./ContactPage/contact";
import ViewPet from "./ViewPetPage/viewPet";
import Signin from "./SigninPage/signin";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signin" component={Signin} />
          <Route path="/viewPet/:id" component={ViewPet} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
