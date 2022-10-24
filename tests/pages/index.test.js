import { getStaticProps } from '../../pages/index';
import React from 'react';

describe('test', () => {
	it('should test', async () => {
		const post = await getStaticProps;
		expect(post).toBeTruthy();
	});
});
