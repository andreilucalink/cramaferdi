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
import RedKing2020_Legend from "./pages/wines/RedKing2020_Legend";
import CuveeAlexandra2022_Limited from "./pages/wines/CuveeAlexandra2022_Limited";
import RoseCosmina2022_Limited from "./pages/wines/RoseCosmina2022_Limited";
import MisterS_Legend2020 from "./pages/wines/MisterS_Legend2020";
import CuveeUnchiuPuiu2021 from "./pages/wines/CuveeUnchiuPuiu2021";
import LadyBlack2021 from "./pages/wines/LadyBlack2021";
import CuveeFrancisc2021 from "./pages/wines/CuveeFrancisc2021";
import CuveeFario from "./pages/wines/CuveeFario";

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
                    path="/vinuri/cuvee-fario-2019"
                    component={CuveeFario}
                />
                <Route
                    exact
                    path="/vinuri/cuvee-francisc-2021"
                    component={CuveeFrancisc2021}
                />
                <Route
                    exact
                    path="/vinuri/lady-black-2021"
                    component={LadyBlack2021}
                />
                <Route
                    exact
                    path="/vinuri/cuvee-unchiu-puiu-2021"
                    component={CuveeUnchiuPuiu2021}
                />
                <Route
                    exact
                    path="/vinuri/mister-s-legend-2020"
                    component={MisterS_Legend2020}
                />
                <Route
                    exact
                    path="/vinuri/cuvee-alexandra-2022"
                    component={CuveeAlexandra2022_Limited}
                />
                <Route
                    exact
                    path="/vinuri/rose-cosmina-2022"
                    component={RoseCosmina2022_Limited}
                />
                <Route
                    exact
                    path="/vinuri/red-king-2020-legend"
                    component={RedKing2020_Legend}
                />
                <Route component={Page404} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
