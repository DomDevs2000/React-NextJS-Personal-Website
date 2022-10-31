import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { FC } from 'react';
import { TFrontmatter, TPost } from '../../types';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type PostPageProp = {
    post: TPost;
};
const PostPage: FC<PostPageProp> = ({ post }) => {
    const {
        frontmatter: { title, date, cover_image },
        content
    } = post;
    return (
        <div>
            <Helmet>
                <title>Dom Devs | {title} </title>
            </Helmet>
            <div className="dark:bg-gray-900 dark:text-white">
                <h1>{title}</h1>
                <p className="text-center">Posted on:{date}</p>
                <Image
                    src={cover_image}
                    alt=""
                    width={700}
                    height={500}
                ></Image>
                <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
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
    context
) => {
    // @ts-ignore
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
