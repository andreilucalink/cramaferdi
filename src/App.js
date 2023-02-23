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
import WhiteQueen2021 from "./pages/wines/WhiteQueen2021";
import RedKing2020_Legend from "./pages/wines/RedKing2020_Legend";
import CuveeAlexandra2022_Limited from "./pages/wines/CuveeAlexandra2022_Limited";
import RoseCosmina2022_Limited from "./pages/wines/RoseCosmina2022_Limited";
import MisterM_Legend_2020 from "./pages/wines/MisterM_Legend2020";
import CuveeUnchiuPuiu2021 from "./pages/wines/CuveeUnchiuPuiu2021";

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
                    path="/vinuri/cuvee-unchiu-puiu-2021"
                    component={CuveeUnchiuPuiu2021}
                />
                <Route
                    exact
                    path="/vinuri/mister-m-legend-2020"
                    component={MisterM_Legend_2020}
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
                <Route
                    exact
                    path="/vinuri/white-queen-2021"
                    component={WhiteQueen2021}
                />
                <Route component={Page404} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
