import React from 'react'
import CopyButton from '../micro/Copy'

function CodeBox({ css }) {
    
    return (
        <div className='w-auto mx-auto rounded-2xl h-auto bg-secondary p-6'>
            <div className='mx-auto rounded-2xl w-full h-full border-0 bg-white p-4'>
                <code className='text-primary text-xs'>
                    <pre>{css}</pre>
                </code>
            </div>
            <div>
                <CopyButton content={css}/>
            </div>
        </div>
    )
}

export default CodeBox
