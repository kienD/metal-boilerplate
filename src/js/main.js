import Component, {Config} from 'metal-jsx';
import Router from 'metal-router';

import '../css/styles.scss';

import Contact from './pages/Contact';
import Home from './pages/Home';
import NavBar from './Nav';

class App extends Component {
	attached() {
		Router.router().dispatch();
	}

	render() {
		return (
			<div id="app">
				<NavBar />

				<Router component={Home} onClick={this.handleClick_} path="/" />

				<Router component={Contact} onClick={this.handleclick_} path="/contact" />
			</div>
		);
	}
}

export const Apple = new App({element:  '#app'});
