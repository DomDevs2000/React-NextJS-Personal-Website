import Image from 'next/image';
const Projects = () => {
	return (
		<section>
			<div>
				<h3 className='text-3xl py-1 text-center dark:text-white'>Projects</h3>
				<br></br>
			</div>

			<div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 '>
				<div className='max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-600 dark:shadow-white'>
					<Image
						src='/images/projects/img1.jpg'
						className='w-full'
						alt=''
						width={600}
						height={400}
					/>
					<div className='px-6 py-4 '>
						<div className='font-bold text-l mb-2 md:text-1xl lg:text-3xl'>
							Project Name
						</div>
						<p className='text-gray-700 text-center dark:text-white'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatibus quia, nulla! Maiores et perferendis eaque,
							exercitationem praesentium nihil.
						</p>
					</div>
					<div className='px-6 pt-4 pb-2'>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							Javascript
						</span>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							Node
						</span>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							Express
						</span>
					</div>
				</div>

				<div className='max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-600 dark:shadow-white'>
					<Image
						src='/images/projects/img1.jpg'
						className='w-full'
						alt=''
						width={600}
						height={400}
					/>
					<div className='px-6 py-4'>
						<div className='font-bold text-l mb-2 md:text-1xl lg:text-3xl'>
							Project Name
						</div>
						<p className='text-gray-700 text-center  dark:text-white'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatibus quia, nulla! Maiores et perferendis eaque,
							exercitationem praesentium nihil.
						</p>
					</div>
					<div className='px-6 pt-4 pb-2'>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							Javascript
						</span>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							Node
						</span>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							Express
						</span>
					</div>
				</div>
				<div className='max-w-sm rounded overflow-hidden shadow-lg dark:bg-gray-600 dark:shadow-white'>
					<Image
						src='/images/projects/img1.jpg'
						className='w-full'
						alt=''
						width={600}
						height={400}
					/>
					<div className='px-6 py-4'>
						<div className='font-bold text-l mb-2 md:text-1xl lg:text-3xl'>
							Project Name
						</div>
						<p className='text-gray-700 text-center  dark:text-white'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatibus quia, nulla! Maiores et perferendis eaque,
							exercitationem praesentium nihil.
						</p>
					</div>
					<div className='px-6 pt-4 pb-2'>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							Javascript
						</span>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							Node
						</span>
						<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							Express
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
