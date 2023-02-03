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
        <div className="rounded overflow-hidden shadow-lg dark:bg-blue-700 dark:shadow-blue-600 hover:scale-105 delay-100 hover:shadow-xl transition-all duration-150 ease-out hover:ease-in cursor-pointer">
            <Link href={`/blog/${slug}`}>
                <div className="w-full rounded-lg">
                    <Image
                        className=""
                        src={cover_image}
                        width={500}
                        height={250}
                        alt="image"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold text-blue-600 dark:text-white cursor-pointer ">
                            <Link href={`/projects/${slug}`}>{title}</Link>
                        </h4>
                        <p className="mb-2 leading-normal dark:text-white">
                            {description}
                        </p>
                        <button className="px-4 py-2 text-sm  inline-block bg-gray-200 dark:bg-gray-400 rounded-full px-3 py-1 text-sm dark:text-black text-gray-700 mr-2 mb-2">
                            {date} | {read_length}
                        </button>
                    </div>
                </div>
            </Link>
        </div>


        // <div className="dark:gray-900 cursor-pointer">
        //     <Link href={`/blog/${slug}`}>
        //         <div className="max-h-fit max-w-fit rounded overflow-hidden shadow-lg dark:bg-violet-700 dark:shadow-purple-600 hover:scale-105 delay-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
        //             <Image
        //                 src={cover_image}
        //                 alt=""
        //                 className="w-full"
        //                 width={700}
        //                 height={350}
        //             />
        //
        //             <div className="px-4 py-2 ">
        //                 <h1 className="font-bold text-center hover:underline lg:text-2xl mb-2">
        //                     {title}
        //                 </h1>
        //
        //                 <p className="text-gray-700 text-sm dark:text-white">
        //                     {description}
        //                 </p>
        //             </div>
        //
        //             <div className="px-4 pt-2 pb-2 mb-2">
        //                 <span className="inline-block bg-gray-200 dark:bg-gray-400 rounded-full px-3 py-1 text-sm dark:text-black text-gray-700 mr-2 mb-2">
        //                     {read_length} read | {date}
        //                 </span>
        //             </div>
        //         </div>
        //     </Link>
        // </div>
    );
};
