export const sortByDate = (a, b) => {
	return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};

//ISO DATE FORMAT https://en.wikipedia.org/wiki/ISO_8601

//  new Date('2022-10-19T16:28:42+00:00') .getFullYear()
//format to front end in posts.tsx
