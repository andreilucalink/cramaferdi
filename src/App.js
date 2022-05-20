import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Page404 from "./pages/Page404";
import NavMenu from "./layout/NavMenu";
import Visits from "./pages/VisitsNew";
import Gallery from "./pages/Gallery";
import Footer from "./layout/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Wines from "./pages/Wines";
import Cazare from "./pages/Cazare";
import About from "./pages/About";

// Wines
import CuveeAlexandra2021_Limited from "./pages/wines/CuveeAlexandra2021_Limited";
import CuveeAlexandra2021 from "./pages/wines/CuveeAlexandra2021";
import MadameS_2021_Limited from "./pages/wines/MadameS_2021_Limited";
import LadyBlack2020 from "./pages/wines/LadyBlack2020";
import CuveeUnchiuPuiu2020 from "./pages/wines/CuveeUnchiuPuiu2020";

function App() {
    return (
        <Router>
            <NavMenu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/vinuri" component={Wines} />
                <Route exact path="/vizite-si-degustari" component={Visits} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/galerie" component={Gallery} />
                <Route exact path="/despre-noi" component={About} />
                <Route exact path="/cazare" component={Cazare} />
                <Route
                    exact
                    path="/vinuri/cuvee-unchiu-puiu-2020"
                    component={CuveeUnchiuPuiu2020}
                />
                <Route
                    exact
                    path="/vinuri/lady-black-2020"
                    component={LadyBlack2020}
                />
                <Route
                    exact
                    path="/vinuri/cuvee-alexandra-2021"
                    component={CuveeAlexandra2021}
                />
                <Route
                    exact
                    path="/vinuri/madame-s-2021-editie-limitata"
                    component={MadameS_2021_Limited}
                />
                <Route
                    exact
                    path="/vinuri/cuvee-alexandra-2021-editie-limitata"
                    component={CuveeAlexandra2021_Limited}
                />

                <Route component={Page404} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
