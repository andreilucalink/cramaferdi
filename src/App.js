import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Page404 from './pages/Page404';
import NavMenu from './layout/NavMenu';
import Visits from './pages/VisitsNew';
// import Gallery from './pages/Gallery';
import GalleryNew from './pages/GalleryNew';
import Footer from './layout/Footer';
import Contact from './pages/Contact';
import Club from './pages/Club';
import HomeNew from './pages/HomeNew';
import Wines from './pages/Wines';
import Cazare from './pages/Cazare';

// Wines
import CuveeAlexandra from './pages/wines/CuveeAlexandra';
import RedKingRez_2018 from './pages/wines/RedKingRez_2018';
import MisterS_Rezerva from './pages/wines/MisterS_Rezerva';
import CuveeUnchiuPuiu2019 from './pages/wines/CuveeUnchiuPuiu2019';
import BlauBurg2018 from './pages/wines/BlauBurg2018';

function App() {
  return (
    <Router>
      <NavMenu />
      <Switch>
        <Route exact path='/' component={HomeNew} />
        <Route exact path='/vinuri' component={Wines} />
        <Route exact path='/vizite-si-degustari' component={Visits} />
        <Route exact path='/club' component={Club} />
        <Route exact path='/cazare' component={Cazare} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/galerie' component={GalleryNew} />
        <Route
          exact
          path='/vinuri/redking-rezerva-2018'
          component={RedKingRez_2018}
        />
        <Route
          exact
          path='/vinuri/cuvee-alexandra'
          component={CuveeAlexandra}
        />
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
        <Route
          exact
          path='/vinuri/blau-burg-2018'
          component={BlauBurg2018}
        />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
