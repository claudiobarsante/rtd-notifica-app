import axios, { AxiosRequestConfig } from 'axios';
import { getAuthenticationFromLocalStorage } from './../utils/localStorage';

const apiClient = axios.create({
	baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
	const { isAuthenticated, token } = getAuthenticationFromLocalStorage();

	if (isAuthenticated) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

export default apiClient;
