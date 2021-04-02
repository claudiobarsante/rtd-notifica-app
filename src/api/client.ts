import axios from 'axios';

const apiClient = axios.create({
	baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

/*Como estou usando Sagas a parte do interceptor para setar o header com o token
está lá* */

export default apiClient;
