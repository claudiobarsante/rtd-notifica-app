import axios, { AxiosRequestConfig } from 'axios';
import apiClient from './../api/client';
import { getAuthenticationFromLocalStorage } from './localStorage';

const interceptor = () => {
	apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
		const { isAuthenticated, token } = getAuthenticationFromLocalStorage();
		console.log('token ', token, isAuthenticated);

		if (isAuthenticated) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	});
};

export default interceptor;
