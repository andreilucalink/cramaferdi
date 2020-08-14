import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import NavigationBar from "./layout/Navbar";
// import Nav from './layout/Nav';
import Footer from "./layout/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Page404 from "./pages/Page404";
import Gallery from "./pages/Gallery";

/* Wines */
// import RoseCos from "./pages/wines/RoseCos";
import UnchiuPwyw from "./pages/wines/UnchiuPwyw";
import CuveeFrancisc from "./pages/wines/CuveeFrancisc";
import CuveePitigaia from "./pages/wines/CuveePitigaia";
import RedKing from "./pages/wines/RedKing";
import MisterS from "./pages/wines/MisterS";
import CuveePaulPort from "./pages/wines/CuveePaulPort";
// import BlauBurg from "./pages/wines/BlauBurg";

function App() {
  return (
    <Router>
      <NavigationBar />
      {/* <Nav/> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vinuri" component={Products} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/galerie" component={Gallery} />
        {/* <Route exact path="/vinuri/rose-cosmina" component={RoseCos} /> */}
        {/* <Route exact path="/vinuri/blau-burg" component={BlauBurg}/> */}
        <Route exact path="/vinuri/unchiu-puiu" component={UnchiuPwyw} />
        <Route exact path="/vinuri/cuvee-francisc" component={CuveeFrancisc} />
        <Route exact path="/vinuri/cuvee-pitigaia" component={CuveePitigaia} />
        <Route exact path="/vinuri/red-king" component={RedKing} />
        <Route exact path="/vinuri/mister-s" component={MisterS} />
        <Route exact path="/vinuri/cuvee-paul-port" component={CuveePaulPort} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
