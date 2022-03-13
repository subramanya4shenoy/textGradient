import React from 'react'

function GradientList({gradient}) {
    
    return (
        <div className='flex'>
            <div className='h-4 w-10 rounded-sm' 
                style={{background: gradient.colors[0], 
                        background: `linear-gradient(45deg, ${[...gradient.colors]} 100%)`}}></div>
            <div className='ml-2 mr-8 text-white ubuntu text-xs'> {gradient.name} </div>
        </div>
    )
}

export default GradientList
// catching up