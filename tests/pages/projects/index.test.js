import { getStaticProps } from '../../../pages/projects/index.tsx';

describe('test', () => {
	it('should test', async () => {
		const projects = await getStaticProps;
		expect(projects).toBeTruthy();
	});
});
