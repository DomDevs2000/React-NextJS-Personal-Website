import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import {marked} from "marked";
import React, {FC} from "react";
import {GetStaticProps} from "next";
import {TFrontmatter, TProject} from "../../types";
import {Helmet} from "react-helmet";
import {ParsedUrlQuery} from "querystring";

type ProjectPageProp = {
    project: TProject;
};

const ProjectPage: FC<ProjectPageProp> = ({project}) => {
    const {
        frontmatter: {title, date, cover_image, alternate_image, tags},
        content,
    } = project;

    return <div>Testing</div>;
};

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("projects"));

    const paths = files.map((tag) => ({
        params: {
            tag,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
}

interface IPostPageParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps: GetStaticProps<ProjectPageProp,
    IPostPageParams> = (context) => {
    // @ts-ignore
    const {slug} = context.params;

    const markdownWithMeta = fs.readFileSync(
        path.join("projects", slug + ".md"),
        "utf8"
    );

    const {data: frontmatter, content} = matter(markdownWithMeta);
    return {
        props: {
            project: {
                frontmatter: {
                    ...frontmatter,

                    tags: frontmatter.tags.split(","),
                } as TFrontmatter,
                // frontmatter,
                slug,
                content,
            },
        },
    };
};

export default ProjectPage;
