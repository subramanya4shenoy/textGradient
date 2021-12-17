import React from 'react'
import TextView from '../component/macro/TextView'

function Home() {
    return (
        <>
            <div className='flex flex-nowrap w-screen h-screen dark:text-white'>
                <div className='w-1/2 self-center'>
                    <TextView className='text-6xl px-10 ubuntu ' />
                    <div className='flex w-full p-10'>
                        <div>shuffle font</div>
                        <div>shuffle grad</div>
                    </div>
                </div>
                <div className='w=1/2'>
                    gradientname
                    codeBox
                </div>
            </div>
            <div className='w-full'>
                gardient selection
            </div>
        </>
    )
}

export default Home
