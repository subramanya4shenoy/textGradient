import React from 'react'
import GradientList from '../micro/GradientList'

function GradientRunner({gradients}) {
    return (
        <div className='flex flex-nowrap mx-10'>
            <div className='self-center text-sm text-white ubuntu shrink-0 w-auto whitespace-nowrap'> Try some gradients :</div>
            <div className='self-center ml-4'>
                <marquee>
                    <div className='flex'>
                        { gradients.map((gradient) => { return <GradientList gradient={gradient}/> } ) }
                    </div>
                </marquee>
            </div>
        </div>
    )
}

export default GradientRunner
