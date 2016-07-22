/**
 * @author haw
 * demo
 */

import React, {
	PropTypes,
	Component,
	cloneElement
} from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Route,
	IndexRoute,
	Link,
	hashHistory
} from 'react-router';
import {
	Page,
	Scene,
	Badge,
	Icon,
	NavBar,
	NavBarItem,
	Button,
	Segmented,
	TabBar,
	SearchBar,
	CellsTitle,
	Cells,
	Cell,
	CellHeader,
	CellBody,
	CellDesc,
	CellFooter
} from '../src';
import ButtonPage from './views/button';
import TabBarPage from './views/tabbar';
import SegmentedPage from './views/segmented';
import CellsPage from './views/cells';
import AlertPage from './views/alert';
import ActionSheetPage from './views/actionsheet';
import IndicatorPage from './views/indicator';
import SearchBarPage from './views/searchbar';
import PickerPage from './views/picker';
import './style';

function Home(props) {

	return (
		<Page hasNavBar={true}>
			<header className="header">
				<h1>IOS-UI</h1>
				<p>仿原生 ios 组件所设计的 web 组件</p>
			</header>
			<section className="body">
				<div className="grids">
					<Link className="grid" to="/button">
						<Icon value="bookoutline" />
						<span>Button</span>
					</Link>
					<Link className="grid" to="/tabbar">
						<Icon value="bookoutline" />
						<span>TabBar</span>
					</Link>
					<Link className="grid" to="/segmented">
						<Icon value="bookoutline" />
						<span>Segmented</span>
					</Link>
					<Link className="grid" to="/cells">
						<Icon value="bookoutline" />
						<span>Cells</span>
					</Link>
					<Link className="grid" to="/alert">
						<Icon value="bookoutline" />
						<span>Alert</span>
					</Link>
					<Link className="grid" to="/actionsheet">
						<Icon value="bookoutline" />
						<span>ActionSheet</span>
					</Link>
					<Link className="grid" to="/indicator">
						<Icon value="bookoutline" />
						<span>Indicator</span>
					</Link>
					<Link className="grid" to="/searchbar">
						<Icon value="bookoutline" />
						<span>SearchBar</span>
					</Link>
					<Link className="grid" to="/picker">
						<Icon value="bookoutline" />
						<span>Picker</span>
					</Link>
				</div>
			</section>
		</Page>
	);
}

function App(props) {
	const {
		location,
		children
	} = props;

	console.log(location.action);
	return (
		<Scene animation={location.action}>
			{cloneElement(children, {
				key: location.pathname
			})}
		</Scene>
	);
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="button" component={ButtonPage} />
			<Route path="tabbar" component={TabBarPage} />
			<Route path="segmented" component={SegmentedPage} />
			<Route path="cells" component={CellsPage} />
			<Route path="alert" component={AlertPage} />
			<Route path="actionsheet" component={ActionSheetPage} />
			<Route path="indicator" component={IndicatorPage} />
			<Route path="searchbar" component={SearchBarPage} />
			<Route path="picker" component={PickerPage} />
		</Route>
	</Router>
), document.getElementById('app-container'));
