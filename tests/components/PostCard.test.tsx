import React from 'react';
import { render, screen } from '@testing-library/react';
import { PostCard } from '../../components/PostCard';

describe('Post Card', () => {
    beforeEach(() => {
        // IntersectionObserver isn't available in test environment
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });
    it('should render the blog post card component', () => {
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

        const title = screen.getByText('test title');
        const description = screen.getByText('test description');
        const cover_image = screen.getByAltText('blog post image');

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(cover_image).toBeInTheDocument();
    });
});
