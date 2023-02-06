import Image from 'next/image';
import React, { FC } from 'react';
import type { TPost } from '../types';
import Link from 'next/link';
import SlideUp from '../components/animations/SlideUp';

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
        <>
            <SlideUp offset="-300px 0px -300px 0px">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Link href={`/blog/${slug}`}>
                        <Image
                            className="rounded-t-lg"
                            src={cover_image}
                            width={500}
                            height={250}
                            alt=""
                        />
                    </Link>
                    <div className="p-5">
                        <a href={`/blog/${slug}`}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {title}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {description}
                        </p>

                        <a
                            href={`/blog/${slug}`}
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Read more
                            <div>
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 ml-2 -mr-1"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </SlideUp>
        </>
    );
};
