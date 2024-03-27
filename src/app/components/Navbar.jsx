import React from 'react'

export default function Navbar() {
    return (<>

        <nav className='bg-black'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <a href="/" className='text-white'>Logo</a>
                        </div>
                    </div>
                    <div className='ml-4 flex items-center space-x-4'>
                        <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Home</a>
                    </div>
                    <div className='ml-4 flex items-center space-x-4'>
                        <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Home</a>
                    </div>
                    <div className='ml-4 flex items-center space-x-4'>
                        <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Home</a>
                    </div>
                    <div className='ml-4 flex items-center space-x-4'>
                        <a href="/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'>Home</a>
                    </div>
                </div>
            </div>
        </nav>
    </>

    )
}
