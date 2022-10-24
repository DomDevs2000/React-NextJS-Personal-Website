import fs, { readdirSync } from 'fs';
import path from 'path';

import type { TPost } from '../types';
import type { TFrontmatter } from '../types';
import matter from 'gray-matter';
import { sortByDate } from '../utils';

export default async function renderProjects() {
	const files2 = readdirSync(path.join('projects'));
	const posts: TPost[] = files2.map((filename) => {
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
			content,
		};
	});
}
