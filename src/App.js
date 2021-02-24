import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Page404 from './pages/Page404';
import NavMenu from './layout/NavMenu';
import Visits from './pages/VisitsNew';
import Gallery from './pages/Gallery';
import Footer from './layout/Footer';
import Contact from './pages/Contact';
import Club from './pages/Club';
import HomeNew from './pages/HomeNew';
import Wines from './pages/Wines';

// Wines
// import CuveeUnchiuPuiu from './pages/wines/CuveeUnchiuPuiu';
// import CuveePaul from './pages/wines/CuveePaul';
import CuveeAlexandra_Limited from './pages/wines/CuveeAlexandra_Limited';
import MadameS_Limited from './pages/wines/MadameS_Limited';
// import CuveeFerdi_Unique from './pages/wines/CuveeFerdi_Unique';
import RoseCosmina_Limited from './pages/wines/RoseCosmina_Limited';
import RedKingRez_2018 from './pages/wines/RedKingRez_2018';
import CuveeFrancisc from './pages/wines/CuveeFrancisc';
import CuveePitigaia from './pages/wines/CuveePitigaia';

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path='/' component={HomeNew} />
        <Route exact path='/vinuri' component={Wines} />
        <Route exact path='/vizite-si-degustari' component={Visits} />
        <Route exact path='/club' component={Club} />
        <Route exact path='/galerie' component={Gallery} />
        <Route exact path='/contact' component={Contact} />
        <Route
          exact
          path='/vinuri/redking-rezerva-2018'
          component={RedKingRez_2018}
        />
        <Route
          exact
          path='/vinuri/cuvee-alexandra-editie-limitata'
          component={CuveeAlexandra_Limited}
        />
        <Route
          exact
          path='/vinuri/madame-s-editie-limitata'
          component={MadameS_Limited}
        />
        <Route
          exact
          path='/vinuri/rose-cosmina-editie-limitata'
          component={RoseCosmina_Limited}
        />
        <Route exact path='/vinuri/cuvee-francisc' component={CuveeFrancisc} />
        <Route
          exact
          path='/vinuri/cuvee-pitigaia-2018'
          component={CuveePitigaia}
        />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
