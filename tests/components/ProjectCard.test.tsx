import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../../components/ProjectCard';

describe('Project Card', () => {
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
    it('should render the project card component', () => {
        const project = {
            frontmatter: {
                title: 'test title',
                description: 'test description',
                date: '22/05/2022',
                cover_image: '/images/project/test.jpg',
                alternate_image: '/images/project/test.jpg',
                tags: ['test tag 1', 'test tag 2']
            },
            slug: 'test-slug',
            content: '# test content'
        };

        render(<ProjectCard project={project}></ProjectCard>);

        const title = screen.getByText('test title');
        const description = screen.getByText('test description');
        const cover_image = screen.getByAltText('project image');

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(cover_image).toBeInTheDocument();
    });
});
