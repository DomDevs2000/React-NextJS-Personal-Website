import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Link from 'next/link';
import Image from 'next/image';
type TSlug = {
	slug: string;
};
type TContent = {
	content: string;
};
type TImage = {
	cover_image: string;
};

export default function PostPage({
	frontmatter: { title, date, cover_image },

	content,
}) {
	return (
		<>
			<h1>{title}</h1>
			<p>Posted on:{date}</p>
			<Image src={cover_image} alt='' width={700} height={500}></Image>
			<div>{content}</div>
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
