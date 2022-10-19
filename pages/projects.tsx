import Posts from '../components/posts';
import matter from 'gray-matter';
import fs, { readdirSync } from 'fs';
import path from 'path';
import type { NextPage, GetStaticProps } from 'next';
import { ThemeContext } from './_app';
import { useContext } from 'react';

import { sortByDate } from '../utils';

type TProjects = {
	projects: TProject[];
};

type TProject = {
	frontmatter: { [key: string]: string };
	slug: string;
};

// NEEDS TO BE ITS OWN COMPONENT LIKE POSTS

const ProjectsPage: NextPage<TProject> = ({ projects }) => {
	const theme = useContext(ThemeContext);
	return (
		<section className={theme}>
			<div>
				{projects.map((project) => {
					return (
						<>
							<Posts post={project}></Posts>
						</>
					);
				})}
			</div>
		</section>
	);
};

export const getStaticProps: GetStaticProps<TProjects> = async () => {
	const files = readdirSync(path.join('projects'));
	// get slug and front matter from posts
	const projects: TProject[] = files.map((filename) => {
		const slug = filename.replace('.md', '');

		// get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join('projects', filename),
			'utf-8'
		);
		// parses down data & renames data to frontmatter
		const { data: frontmatter } = matter(markdownWithMeta);
		return {
			slug,
			frontmatter,
		};
	});
	console.log(files);

	return {
		props: {
			projects: projects.sort(sortByDate),
		},
	};
};

export default ProjectsPage;
