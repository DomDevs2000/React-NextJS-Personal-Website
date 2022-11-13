import { PostCard } from '../../components/PostCard';
import matter from 'gray-matter';
import { FC, useState } from 'react';
import Link from 'next/link';
import fs, { readdirSync } from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
import { TFrontmatter, TPost } from '../../types';
import { sortByDate } from '../../utils';
import { Helmet } from 'react-helmet';

type BlogPageProp = {
    posts: TPost[];
};
const BlogPage: FC<BlogPageProp> = ({ posts }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const renderPostCard = posts.map((post) => {
        return (
            <>
                <PostCard post={post}></PostCard>
            </>
        );
    });

    const searchBar = posts
        .filter((val) => {
            if (searchTerm == '') {
                return val;
            } else if (
                val.frontmatter.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
            ) {
                return val;
            }
        })
        .map((val, key) => {
            if (searchTerm)
                return (
                    <div
                        className={'dark:text-white dark:bg-gray-900'}
                        key={key}
                    >
                        <Link href={`/blog/${val.slug}`}>
                            {val.frontmatter.title}
                        </Link>
                    </div>
                );
        });

    return (
        <>
            <Helmet>
                <title>Dom Devs | Blog</title>
            </Helmet>

            <div className="text-center  dark:bg-gray-900  p-3">
                <input
                    className="inline-block dark:bg-gray-200 dark:text-black bg-gray-200 rounded-full m-5 px-3 py-1 text-sm font-semibold  mr-2 mb-2"
                    type="text"
                    placeholder="Search Blog Posts..."
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />

                {searchBar}
            </div>
            <div className="dark:bg-gray-900 sm:p-20 py-10 px-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {renderPostCard}
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps<BlogPageProp> = async () => {
    const files = readdirSync(path.join('posts'));
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

    return {
        props: {
            posts: posts.sort(sortByDate)
        }
    };
};

export default BlogPage;
