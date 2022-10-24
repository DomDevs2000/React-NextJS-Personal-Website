import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';

type TPost = {
	post: {
		frontmatter: { [key: string]: string };
		slug: string;
		content: string;
	};
};

const Posts: FC<TPost> = ({ post }) => {
	return (
		<div className=' dark:gray-900 '>
			<a href={`/blog/${post.slug}`}>
				<div className='dark:gray-900'>
					<div className='max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-600 dark:shadow-white hover:scale-110 delay-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in '>
						<Image
							src={post.frontmatter.cover_image}
							alt=''
							className='w-full'
							width={600}
							height={300}
						/>
						<div className='px-6 py-4 '>
							<h1 className='font-bold text-l mb-2 md:text-1xl lg:text-3xl'>
								{post.frontmatter.title}
							</h1>

							<p className='text-gray-700 text-center dark:text-white'>
								{post.frontmatter.description}
							</p>
						</div>
						<div className='px-6 pt-4 pb-2'>
							<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
								{post.frontmatter.date}
							</span>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Posts;
