import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
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
            </Helmet>
            <div className="py-10 px-10 dark:bg-gray-900 dark:text-white  ">
                <h1 className="text-xl md:text-2xl lg:text-3xl text-center">
                    {title}
                </h1>
                <br></br>
                <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  text-gray-700 mr-2 mb-2">
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
                <div className="flex justify-center  px-15 py-15 ">
                    <Image src={cover_image} alt="" width={700} height={500} />
                </div>

                <div className="text-sm md:text-lg lg:text-xl   flex justify-center  px-3 py-1  text-gray-700 mr-2 mb-2">
                    <ReactMarkdown
                        className="prose dark:text-white dark:prose-a:text-gray-400 dark:prose-headings:text-gray-100- dark:prose-code:text-gray-400"
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
            slug: filename.replace('md', '')
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
> = (context) => {
    // @ts-ignore
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
                // frontmatter,
                slug,
                content
            }
        }
    };
};

export default ProjectPage;
