import React, { useState } from 'react';
// import copy from '../../assets/images/copy.svg';

const CopyButton = ({ content }) => {
    //!refactor
    const copyToClipboard = () => {
        navigator.clipboard.writeText(content);
    };

    return (
        <div className='border desktop:border-l-0 desktop:p-1.5 desktop:border-primarylight cursor-pointer desktop:rounded-r border-primarylight   
                    mobile:border-primarylight mobile:rounded mobile:mt-4 mobile:flex mobile:p-1 mobile:pr-2'
            onClick={() => {
                copyToClipboard();
            }}>
            <div>
                {/* <img
        className={"h-5 " + ((shake) ? "shake" : '')}
        src={copy}
        alt='share'
      /> */}
            </div>
            <div className="text-xs pt-1 pl-1 text-primarymain"> Copy link </div>
        </div>
    );
};

export default CopyButton;