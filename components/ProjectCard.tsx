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
                // style={{font-variant: small-caps}}
                className="px-5 py-5 inline-block dark:bg-gray-400 bg-gray-200 rounded-full px-3 py-1 text-xs dark:text-black text-gray-700 mr-2 mb-2"
            >
                <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
        );
    });
    return (
        <div className="dark:gray-900 ">
            <div className="max-h-fit rounded overflow-hidden shadow-lg dark:bg-slate-500 dark:shadow-slate-600 hover:scale-105 delay-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                <Link href={`/projects/${slug}`}>
                    <Image
                        src={cover_image}
                        alt=""
                        className="w-full cursor-pointer"
                        width={650}
                        height={350}
                    />
                </Link>

                <div className="px-4 py-2">
                    <Link href={`/projects/${slug}`}>
                        <h1 className="font-bold text-center lg:text-2xl mb-2 hover:underline cursor-pointer">
                            {title}
                        </h1>
                    </Link>
                    <Link href={`/projects/${slug}`}>
                    <p className="text-gray-700 text-sm dark:text-white cursor-pointer">
                        {description}
                    </p>
                    </Link>
                </div>

                <div className="grid px-4 pt-3  pb-2">
                    <ul> {renderTags}</ul>
                </div>
            </div>
        </div>
    );
};
