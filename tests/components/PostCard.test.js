// import { PostCard } from '../components/PostCard';
import React from 'react';
import { render } from '@testing-library/react';

import { PostCard } from '../../components/PostCard.tsx';

describe('it renders', () => {
	it('should renter the component', ({ post }) => {
		const test = render(<PostCard post={post}></PostCard>);
		expect(test).toBeTruthy();
	});
});
