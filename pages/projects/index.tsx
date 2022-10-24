import ProjectCard from '../../components/ProjectCard';
import matter from 'gray-matter';
import fs, { readdirSync } from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
import { ThemeContext } from '.././_app';
import { useContext, FC } from 'react';
import { TProject } from '../../types';
import { sortByDate } from '../../utils';
import { Helmet } from 'react-helmet';
type ProjectsPageProp = {
	projects: TProject[];
};

const ProjectsPage: FC<ProjectsPageProp> = ({ projects }) => {
	return (
		<>
			<Helmet>
				<title>Dom Devs | Projects</title>
			</Helmet>
			<div className='dark:bg-gray-900  sm:p-20 py-10 px-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3  md:gap-2 lg:gap-4'>
				{projects.map((project) => {
					return (
						<>
							<ProjectCard project={project}></ProjectCard>
						</>
					);
				})}
			</div>
		</>
	);
};

export const getStaticProps: GetStaticProps<ProjectsPageProp> = async () => {
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

	return {
		props: {
			projects: projects.sort(sortByDate),
		},
	};
};

export default ProjectsPage;
