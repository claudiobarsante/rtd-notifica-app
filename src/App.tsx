import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/storeConfig';
import SignIn from './pages/SignIn';
import Overview from './pages/Overview/index';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path='/' exact component={SignIn} />
					<Route path='/overview' component={Overview} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
