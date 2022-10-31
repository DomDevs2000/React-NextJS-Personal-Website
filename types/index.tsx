export type TPost = {
    frontmatter: TFrontmatter;
    slug: string;
    content: string;
};

// export type TPosts = {
// 	posts: TPost[];

// };

export type TProject = {
    frontmatter: TFrontmatter;
    slug: string;
    content: string;
};

export type TFrontmatter = {
    tags: string[];
    date: string;
    title: string;
    description: string;
    cover_image: string;
    alternate_image: string;
    read_length: string;
};
