import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import NavigationBar from './layout/Navbar';
import Footer from './layout/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
import Page404 from './pages/Page404';
import SwitchLanguage from './layout/SwitchLanguage';

/* wines */
import Wine1 from './pages/wines/Wine1';

function App() {
	return (
		<Router>
			<NavigationBar />
			<SwitchLanguage />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/products" component={Products} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/products/wine1" component={Wine1} />
				<Route component={Page404} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
