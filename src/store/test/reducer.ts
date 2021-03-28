import { Reducer } from 'redux';

type Teste = {
	valor: string;
};
const INITIAL_STATE: Teste = {
	valor: 'comecei',
};

const test: Reducer<Teste> = (state = INITIAL_STATE, action) => {
	return state;
};

export default test;
