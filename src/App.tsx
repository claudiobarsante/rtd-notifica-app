import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/configureStore';

import GlobalStyle from './styles/global';
import Routes from '../src/routes/index';

function App() {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<PersistGate persistor={persistor}>
				<Routes />
			</PersistGate>
		</Provider>
	);
}

export default App;
