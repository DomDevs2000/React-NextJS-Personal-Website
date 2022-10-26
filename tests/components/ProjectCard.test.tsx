import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from '../components/ProjectCard';

describe('Project Card', () => {
	it('should render the component', () => {
		const project = {
			frontmatter: {
				title: 'test title',
				description: 'test description',
				date: '22/05/2022',
				cover_image: '/images/project/test.jpg',
				alternate_image: '/images/project/test.jpg',
				tags: ['test tag 1', 'test tag 2'],
			},
			slug: 'test-slug',
			content: '# test content',
		};

		render(<ProjectCard project={project}></ProjectCard>);

		// const tags = screen.getByText('test tag 1 test tag 2');
		const title = screen.getByText('test title');
		const description = screen.getByText('test description');
		// const cover_image = screen.getByText('/images/project/test.jpg');

		expect(title).toBeInTheDocument();
		expect(description).toBeInTheDocument();
		// expect(tags).toBeInTheDocument();
		// expect(cover_image).toBeInTheDocument();
	});
});
