import "./App.css";
//import NavBar from "../components/Navbar";
//import { Home } from "./views/Signup";
//import { About } from "./views/Signin";
//import CreateGuide from "./views/Modals/CreateGuide";
//import SignupModal from "./SignupPage/signup";
//import LoginModal from "./views/Modals/Login";
//import Account from "./views/Account";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Nav from "./nav/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import db from "./Firebase";
import { auth } from "./Firebase";
import React, { useState } from "react";
import { AuthProvider } from "./conexts/AuthContext";
//import PrivateRoute from "./components/Nav/PrivateRoute";
import NavMenu from "./nav/nav";
import HomePage from "./HomePage/home";
import Contact from "./ContactPage/contact";
import ViewPet from "./ViewPetPage/viewPet";
import AccountPage from "./AccountPage/Account";
import FavouritesPage from "./FavouritesPage/favourite";

function App() {
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [createModalShow, setCreateModalShow] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUserSignedIn(true);
    }
  });

  return (
    <div>

      <Router>
        <AuthProvider>

          <Nav />
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/favourites" component={FavouritesPage} />
            {/* <Route exact path="/signin" component={Signin} /> */}
            <Route path="/viewPet/:id" component={ViewPet} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;




//////



// import React, { useState } from "react";
// import "./App.css";
// import Nav from "./nav/nav";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";
// import HomePage from "./HomePage/home";
// import Contact from "./ContactPage/contact";
// import ViewPet from "./ViewPetPage/viewPet";
// import Signin from "./SigninPage/signin";
// // import db from "./Firebase";
// // import { auth } from "./Firebase";

// function App() {

//   const [userSignedIn, setUserSignedIn] = useState(false);

//   // auth.onAuthStateChanged((user) => {
//   //   if (user) {
//   //     setUserSignedIn(true);
//   //   }
//   // });

//   return (
//     <div>
//       <Router>
//         <Nav />
//         <Switch>
//           <Route exact path="/home" component={HomePage} />
//           <Route exact path="/">
//             <Redirect to="/home" />
//           </Route>
//           <Route exact path="/contact" component={Contact} />
//           <Route exact path="/signin" component={Signin} />
//           <Route path="/viewPet/:id" component={ViewPet} />
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;

