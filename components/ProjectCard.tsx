import Image from 'next/image';
import React, { FC } from 'react';
import { TProject } from '../types';
import Link from 'next/link';

type ProjectCardProp = {
    project: TProject;
};
export const ProjectCard: FC<ProjectCardProp> = ({ project }) => {
    const {
        frontmatter: {
            title,
            date,
            description,
            cover_image,
            alternate_image,
            tags
        },
        slug,
        content
    } = project;

    console.log(project);
    return (
        <div className="dark:gray-900 cursor-pointer">
            <Link href={`/projects/${slug}`}>
                <div className="lg:max-h-96 lg:min-w-96 rounded overflow-hidden shadow-lg dark:bg-gray-600  dark:shadow-slate-600 hover:scale-105 delay-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                    <Image
                        src={cover_image}
                        alt=""
                        className="w-full"
                        width={600}
                        height={300}
                    />

                    <div className="px-6 py-4 ">
                        <h1 className="font-bold  lg:text-2xl mb-2 ">
                            {title}
                        </h1>

                        <p className="text-gray-700 text-sm  text-center dark:text-white">
                            {description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <ul>
                            {tags.map((tag) => {
                                return (
                                    <li
                                        key={tag}
                                        className="px-5 py-5 inline-block bg-gray-200 rounded-full px-3 py-1 text-xs  text-gray-700 mr-2 mb-2"
                                    >
                                        <Link href={`/tags/${tag}`}>{tag}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </Link>
        </div>
    );
};
