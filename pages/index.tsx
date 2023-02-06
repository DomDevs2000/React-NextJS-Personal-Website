import fs, { readdirSync } from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import path from 'path';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiArrowDown } from 'react-icons/hi';
import type { GetStaticProps, NextPage } from 'next';
import { PostCard } from '../components/PostCard';
import { sortByDate } from '../utils';
import type { TFrontmatter, TPost, TProject } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { AboutMe } from '../components/AboutMe';
import { Helmet } from 'react-helmet';

type HomeProps = {
    posts: TPost[];
    projects: TProject[];
};

const Home: NextPage<HomeProps> = ({ posts, projects }) => {
    const renderProjectCard = projects.map((project) => {
        return (
            <ProjectCard
                key={`project-${project.slug}`}
                project={project}
            ></ProjectCard>
        );
    });
    const renderPostCard = posts.map((post) => {
        return <PostCard key={`post-${post.slug}`} post={post}></PostCard>;
    });

    return (
        <div>
            <Helmet>
                <title>Dom Devs | Home</title>
                <meta
                    name="Dom Devs"
                    content="Dom Devs blog portfolio projects"
                />
                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-black font-sans">
                <AboutMe />
                <div className="flex flex-row justify-center py-5">
                    <HiArrowDown
                        size={35}
                        className="animate-bounce
                         dark:text-white"
                    />
                </div>
                <section>
                    <Link href="/projects">
                        <h1 className="text-3xl inline-flex  rounded-md px-4 p-2 text-xl font-bold uppercase tracking-wider text-black dark:text-white hover:text-white hover:cursor-pointer hover:scale-110 hover:bg-gray-600">
                            Projects
                        </h1>
                    </Link>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 m-10 a">
                        {renderProjectCard}
                    </div>

                    <Link href="/blog">
                        <h1 className="text-3xl py-1  text-3xl inline-flex  rounded-md px-4 p-2 text-xl font-bold uppercase tracking-wider text-black dark:text-white hover:text-white hover:cursor-pointer hover:scale-110 hover:bg-gray-600">
                            Latest Blog Posts
                        </h1>
                    </Link>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 m-10">
                        {renderPostCard}
                    </div>
                    <br></br>
                </section>
            </main>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
        const { data: frontmatter, content } = matter(markdownWithMeta);
        return {
            slug,
            frontmatter: frontmatter as TFrontmatter,
            content
        };
    });

    const files2 = readdirSync(path.join('projects'));
    const projects: TProject[] = files2.map((filename) => {
        const slug = filename.replace('.md', '');

        // get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('projects', filename),
            'utf-8'
        );
        // parses down data & renames data to frontmatter
        const { data: frontmatter, content } = matter(markdownWithMeta);
        return {
            slug,
            frontmatter: {
                ...frontmatter,

                tags: frontmatter.tags.split(',')
            } as TFrontmatter,
            content
        };
    });

    return {
        props: {
            posts: posts.sort(sortByDate),
            projects: projects
        }
    };
};
