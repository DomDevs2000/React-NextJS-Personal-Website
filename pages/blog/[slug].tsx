import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

import Link from 'next/link';

export default function PostPage({
	frontmatter: { title, date },
	slug,
	content,
}) {
	return (
		<>
			<h1>{title}</h1>
			<p>Posted on:{date}</p>
		</>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('posts'));
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

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join('posts', slug + '.md'),
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
}
