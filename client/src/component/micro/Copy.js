import React from 'react';
// import copy from '../../assets/images/copy.svg';

function CopyButton({ content }) {
  return (
    <button
      className="border desktop:border-l-0 desktop:p-1.5 
      desktop:border-primarylight cursor-pointer 
      desktop:rounded-r border-primarylight   
      mobile:border-primarylight 
     mobile:rounded mobile:mt-4 
     mobile:flex mobile:p-1 mobile:pr-2"
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(content);
      }}
    >
      Copy link
    </button>
  );
}

export default CopyButton;
