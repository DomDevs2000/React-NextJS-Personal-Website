import PostsCard from '../../components/PostsCard';
import matter from 'gray-matter';
import fs, { readdirSync } from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
import { ThemeContext } from '.././_app';
import { useContext, FC } from 'react';
import Link from 'next/link';

import { sortByDate } from '../../utils';

type TPosts = {
	posts: TPost[];
};

type TPost = {
	frontmatter: { [key: string]: string };
	slug: string;
};

const BlogPage: FC<TPosts> = ({ posts }) => {
	return (
		<div className=' py-10 px-10 dark:bg-gray-900 grid gap-10 md:grid-cols-2 lg:grid-cols-3 '>
			{posts.map((post) => {
				return (
					<>
						<PostsCard post={post}></PostsCard>
					</>
				);
			})}
		</div>
	);
};

export const getStaticProps: GetStaticProps<TPosts> = async () => {
	const files = readdirSync(path.join('posts'));
	// get slug and front matter from posts
	const posts: TPost[] = files.map((filename) => {
		const slug = filename.replace('.md', '');

		// get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join('posts', filename),
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
			posts: posts.sort(sortByDate),
		},
	};
};

export default BlogPage;
