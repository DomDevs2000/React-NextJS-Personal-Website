import { getStaticProps } from '../../pages/index';

describe('test', () => {
	it('should test', async () => {
		const post = await getStaticProps;
		expect(post).toBeTruthy();
	});
});
