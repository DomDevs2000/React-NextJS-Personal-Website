import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { FC } from 'react';

type TPost = {
	frontmatter: { [key: string]: string };
	slug: string;
	content: string;
};

const PostPage: FC<TPost> = ({
	frontmatter: { title, date, cover_image },
	content,
}) => {
	return (
		<>
			<div className='dark:bg-gray-900 dark:text-white'>
				<h1>{title}</h1>
				<p>Posted on:{date}</p>
				<Image src={cover_image} alt='' width={700} height={500}></Image>
				<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
			</div>
		</>
	);
};

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

export const getStaticProps: GetStaticProps<TPost> = ({ params: { slug } }) => {
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
};

export default PostPage;
