import axios, { AxiosRequestConfig } from 'axios';

const apiClient = axios.create({
	baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

const temp = localStorage.getItem('persist:root');
const auth = temp ? JSON.parse(temp) : {};

var keys = Object.keys(auth);
console.log('keys ', auth.auth);
console.log('parse ', JSON.parse(auth.auth));
const teste = JSON.parse(auth.auth);
console.log('teste ', teste.token);
//console.log('--> ', auth[1]);
// Object.keys(auth).forEach(function (key) {
// 	console.log('--> ', auth[key]);
// 	console.log('parse ', JSON.parse(auth[key]));
// 	// ...
// });

// apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
// 	const authStorage = localStorage.getItem('persist:root');

// 	const {token} = JSON.parse(authStorage);

// 	if (isAuthenticated) {
// 		config.headers.Authorization = `Bearer ${token}`;
// 	}

// 	return config;
// });

export default apiClient;
