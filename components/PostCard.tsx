import Image from 'next/image';
import {FC} from 'react';
import type {TPost} from '../types';

type PostCardProp = {
    post: TPost;
};

export const PostCard: FC<PostCardProp> = ({post}) => {
    const {
        frontmatter: {
            title,
            date,
            description,
            cover_image,
            alternate_image,
            tags,
        },
        slug,
        content,
    } = post;
    return (
        <div className=' dark:gray-900 '>
            <a href={`/blog/${slug}`}>
                <div className='dark:gray-900'>
                    <div
                        className='max-w-md rounded overflow-hidden shadow-lg dark:bg-gray-600 dark:shadow-slate-400 hover:scale-105 delay-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in '>
                        <Image
                            src={cover_image}
                            alt=''
                            className='w-full'
                            width={600}
                            height={300}
                        />
                        <div className='px-6 py-4 '>
                            <h1 className='font-bold  mb-2  lg:text-2xl'>
                                {title}
                            </h1>

                            <p className='text-gray-700 text-center dark:text-white'>
                                {description}
                            </p>
                        </div>
                        <div className='px-6 pt-4 pb-2'>
							<span
                                className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
								{date}
							</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};
