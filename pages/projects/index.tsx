import { ProjectCard } from '../../components/ProjectCard';
import matter from 'gray-matter';
import fs, { readdirSync } from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';
import { TFrontmatter, TProject } from '../../types';
import { sortByDate } from '../../utils';
import { Helmet } from 'react-helmet';
import { FC, useState } from 'react';

type ProjectsPageProp = {
    projects: TProject[];
};

const ProjectsPage: FC<ProjectsPageProp> = ({ projects }) => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <Helmet>
                <title>Dom Devs | Projects</title>
            </Helmet>
            <div className="text-center mr-5 p-3  ">
                <input
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    type="text"
                    placeholder="Search For A Project.."
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />

                {projects
                    .filter((val) => {
                        if (searchTerm == '') {
                            return val;
                        } else if (
                            val.frontmatter.title
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        ) {
                            return val;
                        }
                    })
                    .map((val, key) => {
                        if (searchTerm)
                            return (
                                <div>
                                    <a href={`/projects/${val.slug}`} key={key}>
                                        {val.frontmatter.title}
                                    </a>
                                </div>
                            );
                    })}
            </div>
            <div className="dark:bg-gray-900  sm:p-20 py-10 px-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-3 lg:gap-4">
                {projects.map((project) => {
                    return (
                        <>
                            <ProjectCard project={project}></ProjectCard>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps<ProjectsPageProp> = async () => {
    const files = readdirSync(path.join('projects'));
    // get slug and front matter from posts
    const projects: TProject[] = files.map((filename) => {
        const slug = filename.replace('.md', '');

        // get frontmatter
        const markdownWithMeta = fs.readFileSync(
            path.join('projects', filename),
            'utf-8'
        );
        // parses down data & renames data to frontmatter
        const { data: frontmatter, content } = matter(markdownWithMeta);
        return {
            slug,
            frontmatter: frontmatter as TFrontmatter,
            content
        };
    });

    return {
        props: {
            projects: projects.sort(sortByDate)
        }
    };
};

export default ProjectsPage;
