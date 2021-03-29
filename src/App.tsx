import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/configureStore';
import SignIn from './pages/SignIn';
import Overview from './pages/Overview/index';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<PersistGate persistor={persistor}>
					<Switch>
						<Route path='/' exact component={SignIn} />
						<Route path='/overview' component={Overview} />
					</Switch>
				</PersistGate>
			</Router>
		</Provider>
	);
}

export default App;
