import React from 'react'
import Link from 'next/link'

 const contactPage = () => {
    return (
       <section className='min-h-screen dark:bg-gray-900 dark:text-white font-semibold text-center '>
        <h1 className=' '>You can contact me on LinkedIn
            </h1>
           <Link href='https://www.linkedin.com/in/aidan-carvalho/'>Here!</Link>
       </section>
    )

}

export default contactPage
