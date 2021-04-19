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
import Cazare from './pages/Cazare';

// Wines
import CuveeAlexandra_Limited from './pages/wines/CuveeAlexandra_Limited';
import CuveeAlexandra from './pages/wines/CuveeAlexandra';
import MadameS_Limited from './pages/wines/MadameS_Limited';
import RoseCosmina_Limited from './pages/wines/RoseCosmina_Limited';
import RedKingRez_2018 from './pages/wines/RedKingRez_2018';
import CuveePitigaia from './pages/wines/CuveePitigaia';
import LadyBlack from './pages/wines/LadyBlack';
import MisterS_Rezerva from './pages/wines/MisterS_Rezerva';
import CuveeUnchiuPuiu2019 from './pages/wines/CuveeUnchiuPuiu2019';

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
        <Route exact path='/cazare' component={Cazare} />
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
          path='/vinuri/cuvee-alexandra'
          component={CuveeAlexandra}
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
        <Route
          exact
          path='/vinuri/cuvee-pitigaia-2018'
          component={CuveePitigaia}
        />
        <Route exact path='/vinuri/lady-black' component={LadyBlack} />
        <Route
          exact
          path='/vinuri/mister-s-rezerva'
          component={MisterS_Rezerva}
        />
        <Route
          exact
          path='/vinuri/cuvee-unchiu-puiu-2019'
          component={CuveeUnchiuPuiu2019}
        />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
