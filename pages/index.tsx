import fs, { readdirSync } from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import path from 'path';
import { useContext } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Projects from '../components/projects';
import { ThemeContext } from './_app';
import type { NextPage, GetStaticProps } from 'next';
import Posts from '../components/posts';

type TPosts = {
	posts: TPost[];
};

type TPost = {
	frontmatter: { [key: string]: string };
	slug: string;
};

const Home: NextPage<TPosts> = ({ posts }) => {
	const theme = useContext(ThemeContext);

	return (
		<div className={theme}>
			<Head>
				<title>Aidan C</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={'bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'}>
				<div className='text-center p-10 dark:text-white'>
					<h2 className='text-5xl text-gray-700 py-2 text-grey-800 md:text-6xl'>
						Aidan Dominic Carvalho
					</h2>
					<h3 className='text-2xl'>Junior Full-Stack Developer</h3>
					<p className='text-md py-5 leading-8 text-gray md:text-xl max-w-lg mx-auto'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
						veritatis natus recusandae eligendi, doloremque consectetur
						voluptate tempora quasi ratione itaque totam assumenda dicta ab
						eaque eum eveniet? Illum, consequatur iure.
					</p>
				</div>
				<div className='text-5xl flex justify-center gap-12 py-3'>
					<a href='#'>
						<AiFillLinkedin color='gray' />
					</a>
					<a href='https://github.com/AidanC2000'>
						<AiFillGithub color='gray' />
					</a>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<Projects></Projects>
				<br></br>
				<br></br>
				<br></br>

				<section>
					<h1 className='text-3xl py-1 text-center dark:text-white'>
						Blog Posts:
					</h1>
					<div className='dark:text-white'>
						{posts.map((post) => {
							return (
								<>
									<Posts post={post}></Posts>
								</>
							);
						})}
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;

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
