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

function App() {
	return (
		<Router>
			<NavigationBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/products" component={Products} />
				<Route exact path="/contact" component={Contact} />
				<Route component={Page404} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
