import Image from 'next/image';
export default function Posts({ post }) {
	return (
		<section className='dark:gray-900'>
			<div className='flex justify-center gap-12 dark:gray-900'>
				<div className='max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-600 dark:shadow-white'>
					<div className='px-6 py-4 '>
						<h1 className='font-bold text-l mb-2 md:text-1xl lg:text-3xl'>
							{post.frontmatter.title}
						</h1>
						<Image
							src={post.frontmatter.cover_image}
							alt=''
							width={50}
							height={50}
						></Image>
						<p className='text-gray-700 text-center dark:text-white'>
							{post.frontmatter.description}
						</p>
					</div>
					<div className='px-6 pt-4 pb-2'>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							{post.frontmatter.date}
						</span>
					</div>
					<a href={`/blog/${post.slug}`} className='dark:text-white'>
						Read More
					</a>
				</div>
			</div>
		</section>
	);
}
