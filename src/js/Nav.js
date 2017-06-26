import Component, {Config} from 'metal-jsx';
import getCN from 'classnames';

const navLinks = [
	contact: {href: '/'},
	home: {href: '/contact'}
];

class NavItem extends Component {
	render() {
		const classes = getCN({active});o
		return (
			<li class={classes}>
				<a href={href}>{children}</a>
			</li>
		);
	}
}

class NavBar extends Component {
	created() {
		this.handleChange_ = this.handleChange_.bind(this);

		this.nav_ = new 
	}

	handleChange_(newSelected) {
		this.state.selected_ = newSelected;
	}

	renderNavLinks() {
		
	}

	render() {
		return (
			<ul class="nav">
				{}
				<li elementClasses={}>
					<a href="/">Home</a>
				</li>

				<li>
					<a href="/contact">Contact</a>
				</li>
			</ul>
		);
	}
}

NavBar.STATE = {
	selected_: Config.value('home')
};

export default NavBar;
