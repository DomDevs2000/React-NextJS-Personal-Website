import fs, { readdirSync } from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import path from 'path';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import type { GetStaticProps, NextPage } from 'next';
import { PostCard } from '../components/PostCard';
import { sortByDate } from '../utils';
import type { TFrontmatter, TPost, TProject } from '../types';
import { ProjectCard } from '../components/ProjectCard';

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
            <Head>
                <title>Dom Devs | Home</title>
                <meta
                    name="Dom Devs"
                    content="Dom Devs blog portfolio projects"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 font-sans">
                <div className="text-center p-10 dark:text-white">
                    <h2 className="text-5xl text-gray-700 py-2 dark:text-slate-400 md:text-6xl">
                        Aidan Dominic Carvalho
                    </h2>
                    <h3 className="text-2xl">Junior Full-Stack Developer</h3>
                    <p className="text-md py-5 leading-8 text-gray md:text-xl max-w-lg mx-auto">
                        Programming enthusiast with experience in design,
                        testing and implementation. Equipped with a diverse
                        skill-set and experience with development tools and
                        procedures. Take a look at my projects or click the
                        icons to view my GitHub or Linkedin!
                    </p>
                </div>

                <div className="text-5xl flex justify-center gap-12 py-3">
                    <Link href="#">
                        <AiFillLinkedin
                            color="gray"
                            className="cursor-pointer"
                        />
                    </Link>
                    <Link href="https://github.com/DomDevs2000">
                        <AiFillGithub color="gray" className="cursor-pointer" />
                    </Link>
                </div>
                <section className="">
                    <h1 className="text-3xl py-1 text-center dark:text-white ">
                        Projects
                    </h1>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 m-10">
                        {renderProjectCard}
                    </div>
                </section>
                <section>
                    <h1 className="text-3xl py-1 text-center dark:text-white">
                        Latest Blog Posts
                    </h1>

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
