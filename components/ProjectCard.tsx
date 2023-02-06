import Image from 'next/image';
import React, { FC } from 'react';
import { TProject } from '../types';
import Link from 'next/link';
import SlideUp from '../components/SlideUp';
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
                className="px-5 py-5 inline-block bg-gray-200 dark:bg-white rounded-full px-3 py-1 text-xs dark:text-black text-gray-700 mr-2 mb-2"
            >
                <Link href={`/tags/${tag}`}>{tag}</Link>
            </li>
        );
    });
    return (
        <>
        <SlideUp offset="-300px 0px -300px 0px">
        <div className="rounded overflow-hidden shadow-lg bg-white dark:bg-gray-600  dark:shadow-red-600 hover:scale-105 delay-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in  animate-slideUpCubiBezier animation-delay-2 cursor-pointer">
            <Link href={`/projects/${slug}`}>
                <div className="w-full rounded-lg">
                    <Image
                        className=""
                        src={cover_image}
                        width={600}
                        height={300}
                        alt="project image"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold text-red-600 ">
                            <Link href={`/projects/${slug}`}>{title}</Link>
                        </h4>
                        <p className="mb-2 leading-normal">{description}</p>
                        <button className="px-4 py-2 text-sm text-gray-700">
                            {renderTags}
                        </button>
                    </div>
                </div>
            </Link>
        </div>
        </SlideUp>
        </>
    );
};
