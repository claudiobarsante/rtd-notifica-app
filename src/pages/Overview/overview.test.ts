import { lavai } from './index';

test('lavai', () => {
	const result = lavai(2);
	expect(result).toEqual(4);
});
