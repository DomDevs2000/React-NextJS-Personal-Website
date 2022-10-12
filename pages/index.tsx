import type { NextPage } from 'next';
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Nav from '../components/nav';
import Projects from '../components/projects';
import fs, { readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Home: NextPage = (posts) => {
	console.log(posts);
	const [darkMode, setDarkMode] = useState(false);

	const theme = darkMode ? 'dark' : 'light';
	return (
		<div className={theme}>
			<Head>
				<title>Aidan C</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={'bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'}>
				<Nav theme={darkMode} setTheme={setDarkMode}></Nav>
				<Projects></Projects>
				<section>
					{/* <div className='posts'>
						{posts.map((post, index) => {
							<h3>{post.frontmatter.title}</h3>;
						})}
					</div> */}
				</section>
			</main>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	// get files from post dir
	const files = readdirSync(path.join('posts'));
	// get slug and front matter from posts
	const posts = files.map((filename) => {
		const slug = filename.replace('.md', '');

		// get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join('posts', filename),
			'utf-8'
		);
		const { data: frontmatter } = matter(markdownWithMeta);
		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			posts: posts,
		},
	};
}
