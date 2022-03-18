import React from 'react'

function GradientList({gradient, setstyleCSS}) {
    
    return (
            <div className='h-3 w-3 rounded-full m-2 cursor-pointer flex' 
                onClick={(e) => { setstyleCSS(gradient)}}
                style={{background: gradient.colors[0], 
                        background: `linear-gradient(45deg, ${[...gradient.colors]} 100%)`}}></div>
    )
}

export default GradientList