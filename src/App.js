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
import CuveeUnchiuPuiu from './pages/wines/CuveeUnchiuPuiu';
import CuveeFrancisc from './pages/wines/CuveeFrancisc';
import CuveePaulPort from './pages/wines/CuveePaulPort';
import MisterS_Limited from './pages/wines/MisterS_Limited';
import MisterMRez from './pages/wines/MisterMRezerva';
import CuveePaul from './pages/wines/CuveePaul';

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
          path='/vinuri/cuvee-unchiu-puiu'
          component={CuveeUnchiuPuiu}
        />
        <Route
          exact
          path='/vinuri/mister-s-editie-limitata'
          component={MisterS_Limited}
        />
        <Route exact path='/vinuri/cuvee-francisc' component={CuveeFrancisc} />
        <Route exact path='/vinuri/cuvee-paul' component={CuveePaul} />
        <Route exact path='/vinuri/mister-m-rezerva' component={MisterMRez} />
        <Route exact path='/vinuri/cuvee-paul-port' component={CuveePaulPort} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
