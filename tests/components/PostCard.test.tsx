import React from 'react';
import { render, screen } from '@testing-library/react';
import { PostCard } from '../../components/PostCard';

describe('Post Card', () => {
    it('should render the component', () => {
        const post = {
            frontmatter: {
                title: 'test title',
                description: 'test description',
                date: '22/05/2022',
                cover_image: '/images/post/test.jpg',
                alternate_image: '/images/post/test.jpg',
                tags: ['test tag 1', 'test tag 2']
            },
            slug: 'test-slug',
            content: '# test content'
        };

        render(<PostCard post={post}></PostCard>);

        const date = screen.getByText('22/05/2022');
        const title = screen.getByText('test title');
        const description = screen.getByText('test description');

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(date).toBeInTheDocument();
    });
});
