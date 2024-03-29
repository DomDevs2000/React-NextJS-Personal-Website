import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/legacy/image';
import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { TFrontmatter, TProject } from '../../types';
import { Helmet } from 'react-helmet';
import { ParsedUrlQuery } from 'querystring';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

type ProjectPageProp = {
    project: TProject;
};

const ProjectPage: FC<ProjectPageProp> = ({ project }) => {
    const {
        frontmatter: { title, date, cover_image, tags },
        content
    } = project;

    return (
        <>
            <Helmet>
                <title>Dom Devs | {title}</title>
                <meta
                    name="Dom Devs"
                    content="Dom Devs blog portfolio projects"
                />
            </Helmet>
            <div className="py-10 px-10 dark:bg-black dark:text-white grid-cols-2">
                <h1 className="text-xl md:text-2xl lg:text-3xl">{title}</h1>
                <br></br>
                <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Posted on {date}
                </p>
                <p>Tags:</p>
                <ul>
                    {tags.map((tag) => {
                        return (
                            <li
                                key={'project-tags'}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            >
                                <Link href={`/tags/${tag}`}>{tag}</Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="text-sm md:text-lg lg:text-xl flex justify-center flex-col px-3 py-1  text-gray-700 mr-2 mb-2">
                    <ReactMarkdown
                        className="prose dark:text-white dark:prose-a:text-gray-400 dark:prose-code:text-white dark:prose-headings:text-white dark:prose-strong:text-white"
                        remarkPlugins={[remarkGfm]}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </>
    );
};

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('projects'));
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    };
}

interface IPostPageParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps: GetStaticProps<
    ProjectPageProp,
    IPostPageParams
> = (context: any) => {
    const { slug } = context.params;

    const markdownWithMeta = fs.readFileSync(
        path.join('projects', slug + '.md'),
        'utf8'
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
        props: {
            project: {
                frontmatter: {
                    ...frontmatter,

                    tags: frontmatter.tags.split(',')
                } as TFrontmatter,
                slug,
                content
            }
        }
    };
};

export default ProjectPage;
