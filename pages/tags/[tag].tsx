import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React, {FC} from 'react';
import {GetStaticProps} from 'next';
import {Helmet} from 'react-helmet';
import type {TProject, TPost} from '../../types';
import {ParsedUrlQuery} from 'querystring';
import {ProjectCard} from '../../components/ProjectCard';
import {TFrontmatter} from '../../types';
import {PostCard} from '../../components/PostCard';

type TagPageProp = {
	projects: TProject[];
	// posts: TPost[];
};
const TagsPage: FC<TagPageProp> = ({projects}) => {
	const projectCard = projects.map((project, index) => {
		return <ProjectCard key={`project-${index}`} project={project}/>;
	});
	// const postCard = posts.map((post, index) => {
	//     return <PostCard key={`post-${index}`} post={post} />;
	// });
	return (
		<>
			<Helmet>
				<title>Dom Devs | Tags</title>
				<meta
					name="Dom Devs"
					content="Dom Devs blog portfolio projects"
				/>
			</Helmet>

			<div className="dark:bg-black min-h-screen">
				<div
					className="dark:bg-black sm:p-20 py-10 px-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
					{projectCard}
				</div>
				{/*<div>{postCard}</div>*/}
			</div>
		</>
	);
};

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('projects'));

	const paths = files.map((tag) => ({
		params: {
			tag
		}
	}));

	return {
		paths,
		fallback: 'blocking'
	};
}

interface ITagPageParams extends ParsedUrlQuery {
	slug: string;
}

export const getStaticProps: GetStaticProps<TagPageProp, ITagPageParams> = (
	context
) => {
	// @ts-ignore
	const {tag} = context.params;
	const projectSlug = fs
		.readdirSync('projects', {withFileTypes: true})
		.map((file) => file.name.replace('.md', ''));
	const metaMarkdowns = projectSlug.map((slug) => {
		const projectMetaMarkdowns = fs.readFileSync(
			path.join('projects', slug + '.md'),
			'utf8'
		);
		const {data: frontmatter, content} = matter(projectMetaMarkdowns);
		const fm: TFrontmatter = {
			tags: frontmatter.tags.split(','),
			date: frontmatter.date,
			title: frontmatter.title,
			description: frontmatter.description,
			cover_image: frontmatter.cover_image
		};
		return {frontmatter: fm, slug, content};
	});
	const projects: TProject[] = metaMarkdowns.filter(({frontmatter}) => {
		const tags: string[] = frontmatter.tags;
		return tags
			.map((tag) => tag.toLowerCase().trim())
			.includes(tag.toLowerCase());
	});
	//gets slug and frontmatter by tags for posts

	// const postSlug = fs
	//     .readdirSync('projects', { withFileTypes: true })
	//     .map((file) => file.name.replace('.md', ''));
	// const postMetaMarkdowns = postSlug.map((slug) => {
	//     const markdownWithMeta = fs.readFileSync(
	//         path.join('projects', slug + '.md'),
	//         'utf8'
	//     );
	//     const { data: frontmatter, content } = matter(markdownWithMeta);
	//     return {
	//         frontmatter: {
	//             ...frontmatter,
	//
	//             tags: frontmatter.tags.split(',')
	//         } as TFrontmatter,
	//         slug,
	//         content
	//     };
	// });
	//
	// const posts = postMetaMarkdowns.filter(({ frontmatter }) => {
	//     const tags: string[] = frontmatter.tags.split(',');
	//     if (
	//         tags
	//             .map((tag) => tag.toLowerCase().trim())
	//             .includes(tag.toLowerCase())
	//     ) {
	//         return true;
	//     }
	//     return false;
	// });

	return {
		props: {
			projects
		}
	};
};

export default TagsPage;
