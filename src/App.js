import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/Contact';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
  	<Router>
		<div className="App">
			<Header />
			<div className="content">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
				</Switch>
			</div>
			<CTA />
		</div>
	</Router>
  );
}

export default App;