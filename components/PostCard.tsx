import Image from 'next/image';
import React, { FC } from 'react';
import type { TPost } from '../types';
import Link from 'next/link';

type PostCardProp = {
    post: TPost;
};

export const PostCard: FC<PostCardProp> = ({ post }) => {
    const {
        frontmatter: {
            title,
            date,
            description,
            cover_image,
            tags,
            read_length
        },
        slug,
        content
    } = post;
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white dark:bg-gray-600 dark:shadow-red-600 hover:scale-105 delay-100 hover:shadow-xl transition-all duration-150 ease-out hover:ease-in cursor-pointer">
            <Link href={`/blog/${slug}`}>
                <div className="w-full rounded-lg">
                    <Image
                        className=""
                        src={cover_image}
                        width={600}
                        height={300}
                        alt="blog post image"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold text-red-600  cursor-pointer ">
                            <Link href={`/blog/${slug}`}>{title}</Link>
                        </h4>
                        <p className="mb-2 leading-normal">
                            {description}
                        </p>
                        <button className="px-4 py-2 text-sm  inline-block dark:bg-white bg-gray-200 rounded-full px-3 py-1 text-sm dark:text-black text-gray-700 mr-2 mb-2">
                            {date} | {read_length}
                        </button>
                    </div>
                </div>
            </Link>
        </div>

    );
};
