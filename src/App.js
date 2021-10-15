import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Page404 from "./pages/Page404";
import NavMenu from "./layout/NavMenu";
import Visits from "./pages/VisitsNew";
import GalleryNew from "./pages/GalleryNew";
import Footer from "./layout/Footer";
import Contact from "./pages/Contact";
import HomeNew from "./pages/HomeNew";
import Wines from "./pages/Wines";
import Cazare from "./pages/Cazare";

// Wines
import CuveeUnchiuPuiu2019 from "./pages/wines/CuveeUnchiuPuiu2019";
import BlauBurg2018 from "./pages/wines/BlauBurg2018";
import CuveeFrancisc2019 from "./pages/wines/CuveeFrancisc2019";
import CuveePaul_Rezerva2019 from "./pages/wines/CuveePaul_Rezerva2019";
import RedKing2019 from "./pages/wines/RedKing2019";

function App() {
    return (
        <Router>
            <NavMenu />
            <Switch>
                <Route exact path="/" component={HomeNew} />
                <Route exact path="/vinuri" component={Wines} />
                <Route exact path="/vizite-si-degustari" component={Visits} />
                <Route exact path="/cazare" component={Cazare} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/galerie" component={GalleryNew} />
                <Route
                    exact
                    path="/vinuri/red-king-2019"
                    component={RedKing2019}
                />
                <Route
                    exact
                    path="/vinuri/cuvee-paul-rezerva-2019"
                    component={CuveePaul_Rezerva2019}
                />
                <Route
                    exact
                    path="/vinuri/cuvee-unchiu-puiu-2019"
                    component={CuveeUnchiuPuiu2019}
                />
                <Route
                    exact
                    path="/vinuri/cuvee-francisc-2019"
                    component={CuveeFrancisc2019}
                />
                <Route
                    exact
                    path="/vinuri/blau-burg-2018"
                    component={BlauBurg2018}
                />
                <Route component={Page404} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
