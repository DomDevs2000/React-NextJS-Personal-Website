import Image from 'next/image';
import React, { FC } from 'react';
import { TProject } from '../types';
import Link from 'next/link';

type ProjectCardProp = {
    project: TProject;
};

export const ProjectCard: FC<ProjectCardProp> = ({ project }) => {
    const {
        frontmatter: { title, date, description, cover_image, tags },
        slug,
        content
    } = project;

    const renderTags = tags.map((tag) => {
        return (
            <li
                key={tag}
                className="px-5 py-5 inline-block dark:bg-gray-400 bg-gray-200 rounded-full px-3 py-1 text-xs dark:text-black text-gray-700 mr-2 mb-2"
            >
                <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
        );
    });
    return (
        <div className="rounded overflow-hidden shadow-lg dark:bg-blue-800 dark:shadow-blue-600 hover:scale-105 delay-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
            <Link href={`/projects/${slug}`}>
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
                        <button className="px-4 py-2 text-sm text-blue-100">
                            {renderTags}
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );

    // <div className="w-full lg:max-w-full lg:flex">
    //     <Image
    //         className="h-52 lg:h-auto lg:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    //         src={cover_image}
    //         width={1000}
    //         height={250}
    //         alt="image"
    //     />
    //     <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    //         <div className="mb-8">
    //             <div className="text-gray-900 font-bold text-xl mb-2">
    //                 {title}
    //             </div>
    //             <p className="text-gray-700 text-base">{description}</p>
    //         </div>
    //         <div className="flex items-center">
    //             <div className="text-sm">
    //                 <p className="text-gray-600">{renderTags}</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // <div className="dark:gray-900 cursor-pointer">
    //     <Link href={`/projects/${slug}`}>
    //         <div className="max-h-fit rounded overflow-hidden shadow-lg dark:bg-violet-700 dark:shadow-purple-600 hover:scale-105 delay-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
    //             <Image
    //                 src={cover_image}
    //                 alt=""
    //                 className="w-full"
    //                 width={650}
    //                 height={350}
    //             />
    //             <div className="px-4 py-2">
    //                 <h1 className="font-bold text-center lg:text-2xl mb-2 hover:underline">
    //                     {title}
    //                 </h1>
    //                 <p className="text-gray-700 text-sm dark:text-white">
    //                     {description}
    //                 </p>
    //             </div>
    //
    //             <div className="grid px-4 pt-3 pb-2">
    //                 <ul> {renderTags}</ul>
    //             </div>
    //         </div>
    //     </Link>
    // </div>
};
