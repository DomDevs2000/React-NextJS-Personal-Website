import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React, { FC } from 'react';
import { TFrontmatter, TPost } from '../../types';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

type PostPageProp = {
    post: TPost;
};
const PostPage: FC<PostPageProp> = ({ post }) => {
    const {
        frontmatter: { title, date, cover_image, tags, read_length },
        content
    } = post;
    return (
        <div>
            <Helmet>
                <title>Dom Devs | {title} </title>
            </Helmet>

            <div className="py-10 px-10 dark:bg-gray-900 dark:text-white ">
                <h1 className="text-xl md:text-2xl lg:text-3xl  text-center ">
                    {title}
                </h1>e
                <br></br>
                <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Posted on {date} | {read_length} read
                </p>
                <p>Tags:</p>
                <ul>
                    {tags.map((tag) => {
                        return (
                            <li
                                key={'blog-tags'}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            >
                                <Link href={`/tags/${tag}`}>{tag}</Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="1 px-15 py-15 flex justify-center ">
                    <Image
                        src={cover_image}
                        alt=""
                        width={700}
                        height={400}
                    ></Image>
                </div>
                <div className="text-sm md:text-lg lg:text-xl  flex justify-center  px-3 py-1  text-gray-700 mr-2 mb-2">
                    <ReactMarkdown
                        className="prose dark:text-white dark:prose-a:text-gray-400 dark:prose-code:text-gray-400 dark:prose-strong:text-white"
                        remarkPlugins={[remarkGfm]}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }));
    return {
        paths,
        fallback: false
    };
}

interface IPostPageParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps: GetStaticProps<PostPageProp, IPostPageParams> = (
    context:any
) => {

    const { slug } = context.params;

    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf8'
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
        props: {
            post: {
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

export default PostPage;
