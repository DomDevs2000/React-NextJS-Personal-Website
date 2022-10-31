import {PostCard} from '../../components/PostCard';
import matter from 'gray-matter';
import {useState} from 'react';

import fs, {readdirSync} from 'fs';
import path from 'path';
import type {GetStaticProps} from 'next';
import {FC} from 'react';
import {TFrontmatter, TPost} from '../../types';
import {sortByDate} from '../../utils';
import {Helmet} from 'react-helmet';

type BlogPageProp = {
    posts: TPost[];
};
const BlogPage: FC<BlogPageProp> = ({posts}) => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <>
            <Helmet>
                <title>Dom Devs | Blog</title>
            </Helmet>
            <div className=' py-10 px-10 dark:bg-gray-900 grid gap-10 md:grid-cols-2 lg:grid-cols-3 '>
                <div>
                    <input
                        type='text'
                        placeholder='search..'
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />

                    {posts
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
                                return <div key={key}>{val.frontmatter.title}</div>;
                        })}
                </div>
                {posts.map((post) => {
                    return (
                        <>
                            <PostCard post={post}></PostCard>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps<BlogPageProp> = async () => {
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
        const {data: frontmatter, content} = matter(markdownWithMeta);
        return {
            slug,
            frontmatter: frontmatter as TFrontmatter,
            content,
        };
    });

    return {
        props: {
            posts: posts.sort(sortByDate),
        },
    };
};

export default BlogPage;
