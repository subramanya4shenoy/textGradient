import React from 'react'

function CodeBox({ css }) {
    return (
        <div className='w-auto mx-auto rounded-2xl h-auto bg-secondary p-6'>
            <div className='mx-auto rounded-2xl  mx-auto w-full h-full border-0 bg-white p-4'>
            <code className='text-primary text-xs'>
            <pre>{css}</pre>
            </code>
            </div>
            copy CSS
        </div>
    )
}

export default CodeBox
