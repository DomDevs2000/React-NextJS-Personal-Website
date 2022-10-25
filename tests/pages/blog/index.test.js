import { getStaticProps } from '../../../pages/blog/index.tsx';

describe('test', () => {
	it('should test', async () => {
		const post = await getStaticProps;
		expect(post).toBeTruthy();
	});
});
