import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './../pages/SignIn/index';
import ProtectedRoute from './ProtectedRoute';
import Overview from './../pages/Overview/index';

const index = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={SignIn} />
				<ProtectedRoute path='/overview' component={Overview} isProtected />
			</Switch>
		</Router>
	);
};

export default index;
