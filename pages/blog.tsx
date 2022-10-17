import Posts from '../components/posts';
import matter from 'gray-matter';
import fs, { readdirSync } from 'fs';
import path from 'path';
import type { NextPage, GetStaticProps } from 'next';
import { ThemeContext } from './_app';
import { useContext } from 'react';
type TPosts = {
	posts: TPost[];
};

type TPost = {
	frontmatter: { [key: string]: string };
	slug: string;
};

const BlogPage: NextPage<TPosts> = ({ posts }) => {
	const theme = useContext(ThemeContext);
	return (
		<section className={theme}>
			<div>
				{posts.map((post) => {
					return (
						<>
							<Posts post={post}></Posts>
						</>
					);
				})}
			</div>
		</section>
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
	console.log(files);
	console.log(posts);
	return {
		props: {
			posts,
		},
	};
};

export default BlogPage;
