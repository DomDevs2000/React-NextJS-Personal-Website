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
        <div className="dark:gray-900">
            <div className="max-h-fit max-w-fit rounded overflow-hidden shadow-lg dark:bg-slate-500 dark:shadow-slate-600 hover:scale-105 delay-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                <Link href={`/blog/${slug}`}>
                    <Image
                        src={cover_image}
                        alt=""
                        className="w-full cursor-pointer"
                        width={700}
                        height={300}
                    />
                </Link>

                <div className="px-4 py-2 ">
                    <Link href={`/blog/${slug}`}>
                        <h1 className="font-bold text-center hover:underline lg:text-2xl mb-2 cursor-pointer">
                            {title}
                        </h1>
                    </Link>

                    <p className="text-gray-700 text-sm  dark:text-white">
                        {description}
                    </p>
                </div>
                <div className="px-4 pt-2 pb-2 mb-2 ">
                    <span className="inline-block  bg-gray-200 dark:bg-gray-400 rounded-full px-3 py-1 text-sm dark:text-black text-gray-700 mr-2 mb-2">
                        {read_length} read | {date}
                    </span>
                </div>
            </div>
        </div>
    );
};
