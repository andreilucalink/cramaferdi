import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Page404 from './pages/Page404';
import NavigationBar from './layout/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
// import Club from './pages/Club';
import Gallery from './pages/Gallery';
import Footer from './layout/Footer';

//Testing
// import HomeNew from './pages/HomeNew';
// import Nav from './layout/Nav';

// Wines
import UnchiuPwyw from './pages/wines/UnchiuPwyw';
import CuveeFrancisc from './pages/wines/CuveeFrancisc';
import RedKing from './pages/wines/RedKing';
import MisterS from './pages/wines/MisterS';
import CuveePaulPort from './pages/wines/CuveePaulPort';
import LadyBlack from './pages/wines/LadyBlack';
import MisterS_Limited from './pages/wines/MisterS_Limited';

function App() {
  return (
    <Router>
      <NavigationBar />
      {/* <Nav/> */}
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/1' component={Home} /> */}
        <Route exact path='/vinuri' component={Products} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/galerie' component={Gallery} />
        {/* <Route exact path='/club' component={Club} /> */}

        <Route exact path='/vinuri/lady-black' component={LadyBlack} />
        <Route exact path='/vinuri/unchiu-puiu' component={UnchiuPwyw} />
        <Route exact path='/vinuri/cuvee-francisc' component={CuveeFrancisc} />
        <Route
          exact
          path='/vinuri/mister-s-editie-limitata'
          component={MisterS_Limited}
        />
        <Route exact path='/vinuri/red-king' component={RedKing} />
        <Route exact path='/vinuri/mister-s' component={MisterS} />
        <Route exact path='/vinuri/cuvee-paul-port' component={CuveePaulPort} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
