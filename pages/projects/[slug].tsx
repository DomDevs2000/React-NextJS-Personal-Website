import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { TProject } from '../../types';

type ProjectPageProp = {
	project: TProject;
};
const ProjectPage: FC<ProjectPageProp> = ({ project }) => {
	const {
		frontmatter: { title, date, cover_image, alternate_image, tags },
		content,
	} = project;

	return (
		<>
			<div className='py-10 px-10 dark:bg-gray-900 dark:text-white'>
				<h1 className='text-xl md:text-2xl lg:text-3xl text-center'>{title}</h1>
				<br></br>
				<p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
					Posted on {date}
				</p>
				<p>Tags:</p>
				<ul>
					{tags.map((tag) => {
						return (
							<li key={tag} className=''>
								<a href={`/projects/tags/${tag}`}>{tag}</a>
							</li>
						);
					})}
				</ul>
				<Image src={cover_image} alt='' width={700} height={500} />
				<Image src={alternate_image} alt='' width={700} height={500} />
				<div className='text-center text-sm md:text-lg lg:text-xl'>
					{content}
				</div>
			</div>
		</>
	);
};

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('projects'));
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('md', ''),
		},
	}));

	return {
		paths,
		fallback: 'blocking',
	};
}
interface TParams {
	slug: string;
}

export const getStaticProps: GetStaticProps<ProjectPageProp> = async ({
	params: { slug },
}) => {
	const markdownWithMeta = fs.readFileSync(
		path.join('projects', slug + '.md'),
		'utf8'
	);
	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			project: {
				frontmatter: {
					...frontmatter,

					tags: frontmatter.tags.split(','),
				},
				// frontmatter,
				slug,
				content,
			},
		},
	};
};

// const renderTags = (tags: string[]) => {
// 	{
// 		tags.forEach((tag) => {
// 			return (
// 				<li className='text-xl'>
// 					<a href={`/projects/tags/${tag}`}>{tag}</a>
// 				</li>
// 			);
// 		});
// 	}
// };
export default ProjectPage;
