import React from 'react'
import CodeBox from './CodeBox'

function RightRail({ className, selectedGradient, styleCSS }) {

    const overrideClass = className || ''

    return (
        <div className={'' + overrideClass}>
            Gradient name - <span className='capitalize text-xl roboto'>{selectedGradient?.name}</span>
            <CodeBox css={styleCSS} />
            <div className='absolute bottom-0 right-0 w-1/2 z-50 mx-auto -mt-28 pointer-events-none overflow-hidden'>
                <iframe className="overflow-hidden"
                    src='https://my.spline.design/noisedisplacecopy-d225e306cbce9953001808f16cc1f798/'
                    frameborder='0'
                    width='100%'
                    height='100%'>
                </iframe>
            </div>
        </div>
    )
}

export default RightRail
