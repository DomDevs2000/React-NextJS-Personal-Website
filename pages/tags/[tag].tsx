import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import type { TProject } from '../../types';
import { ParsedUrlQuery } from 'querystring';
import { ProjectCard } from '../../components/ProjectCard';

type ProjectPageProp = {
    projects: TProject[];
};

const TagsPage: FC<ProjectPageProp> = ({ projects }) => {
    const cards = projects.map((project, index) => {
        return (
            <div className="dark:bg-gray-900  sm:p-20 py-10 px-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard key={`project-${index}`} project={project} />
            </div>
        );
    });
    return <>{cards}</>;
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

export const getStaticProps: GetStaticProps<ProjectPageProp, ITagPageParams> = (
    context
) => {
    // @ts-ignore
    const { tag } = context.params;
    const fileObjs = fs.readdirSync('projects', { withFileTypes: true });
    // const paths = fileObjs.map((projects) => ({
    //         slug: filename.replace('.md', '')
    //
    // }));
    const metaMarkdowns: TProject[] = fileObjs.map(({ name }) => {
        const markdownWithMeta = fs.readFileSync(
            path.join('projects', name),
            'utf8'
        );
        const { data: frontmatter, content } = matter(markdownWithMeta);
        return { frontmatter, content };
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
