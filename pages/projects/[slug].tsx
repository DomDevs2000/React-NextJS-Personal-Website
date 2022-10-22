import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import { FC } from 'react';
import { GetStaticProps } from 'next';

type TProject = {
	frontmatter: { [key: string]: string };
	slug: string;
	content: string;
};

const ProjectPostPage: FC<TProject> = ({
	frontmatter: { title, date, cover_image, alternate_image, tags },
	content,
}) => {
	// loop through each tag and create anchor elements that route to page that renders only projects with that tag
	const projectTags = [];

	tags.forEach((tag) => {
		projectTags.push(
			<p className='text-xl'>
				<a href={`/projects/tags/${tag}`}>{tag}</a>
			</p>
		);
	});
	//
	return (
		<>
			<div className='py-10 px-10 dark:bg-gray-900 dark:text-white'>
				<h1 className='text-xl md:text-2xl lg:text-3xl text-center'>{title}</h1>
				<br></br>
				<p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
					Posted on {date}
				</p>
				<p>Tags: {projectTags}</p>
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

export const getStaticProps: GetStaticProps<TProject> = async ({
	params: { slug },
}) => {
	const markdownWithMeta = fs.readFileSync(
		path.join('projects', slug + '.md'),
		'utf8'
	);
	const { data: frontmatter, content } = matter(markdownWithMeta);
	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
};
export default ProjectPostPage;
