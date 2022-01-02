import React from 'react'

function GradientList({gradient}) {
    return (
        <div className='flex'>
            <div className='h-4 w-10 rounded-sm bg-accent'></div>
            <div className='ml-2 mr-8 text-white ubuntu text-xs'> {gradient.name} </div>
        </div>
    )
}

export default GradientList
