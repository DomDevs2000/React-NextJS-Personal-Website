import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import type { TProject } from '../../types';
import { ParsedUrlQuery } from 'querystring';
import { ProjectCard } from '../../components/ProjectCard';

type TagPageProp = {
    projects: TProject[];
};

const TagsPage: FC<TagPageProp> = ({ projects }) => {
    const cards = projects.map((project, index) => {
        return <ProjectCard key={`project-${index}`} project={project} />;
    });
    return (
        <>
            <div className="dark:bg-gray-900  sm:p-20 py-10 px-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {cards}
            </div>
        </>
    );
    // return (
    //     <div className="dark:bg-gray-900  sm:p-20 py-10 px-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
    //         {projects.map((project) => {
    //             return (
    //                 <>
    //                     <ProjectCard project={project}></ProjectCard>
    //                 </>
    //             );
    //         })}
    //     </div>
    // );
};

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('projects'));

    const paths = files.map((tag) => ({
        params: {
            tag
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    };
}

interface ITagPageParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps: GetStaticProps<TagPageProp, ITagPageParams> = (
    context
) => {
    // @ts-ignore
    const { tag } = context.params;
    const slugs = fs
        .readdirSync('projects', { withFileTypes: true })
        .map((file) => file.name.replace('.md', ''));
    const metaMarkdowns = slugs.map((slug) => {
        const markdownWithMeta = fs.readFileSync(
            path.join('projects', slug + '.md'),
            'utf8'
        );
        const { data: frontmatter, content } = matter(markdownWithMeta);
        return { frontmatter, slug, content };
    });

    const projects = metaMarkdowns.filter(({ frontmatter }) => {
        const tags: string[] = frontmatter.tags.split(',');
        if (
            tags
                .map((tag) => tag.toLowerCase().trim())
                .includes(tag.toLowerCase())
        ) {
            return true;
        }
        return false;
    });

    return {
        props: {
            projects
        }
    };
};

export default TagsPage;
