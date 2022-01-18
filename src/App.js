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
// import Cazare from "./pages/Cazare";
import About from "./pages/About";

// Wines
import CuveeAlexandra2021 from "./pages/wines/CuveeAlexandra2021";
import RoseCosmina2021 from "./pages/wines/RoseCosmina2021";
import CuveePitigaia2019 from "./pages/wines/CuveePitigaia2019";
import CuveeFrancisc2019 from "./pages/wines/CuveeFrancisc2019";

function App() {
    return (
        <Router>
            <NavMenu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/vinuri" component={Wines} />
                <Route exact path="/vizite-si-degustari" component={Visits} />
                {/* <Route exact path="/cazare" component={Cazare} /> */}
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/galerie" component={Gallery} />
                <Route exact path="/despre-noi" component={About} />
                <Route
                    exact
                    path="/vinuri/cuvee-alexandra-2021"
                    component={CuveeAlexandra2021}
                />
                <Route
                    exact
                    path="/vinuri/cuvee-pitigaia-2019"
                    component={CuveePitigaia2019}
                />
                <Route
                    exact
                    path="/vinuri/rose-cosmina-2021"
                    component={RoseCosmina2021}
                />
                <Route
                    exact
                    path="/vinuri/cuvee-francisc-2019"
                    component={CuveeFrancisc2019}
                />
                <Route component={Page404} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
