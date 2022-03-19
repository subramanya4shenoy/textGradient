import React from 'react';
import ShuffleButton from './ShuffleButton';

function CopyButton({ css }) {
  return (
    <ShuffleButton
      text="Copy CSS"
      shouldShowIcon="false"
      handleClick={() => navigator.clipboard.writeText(css)}
    />
  );
}

export default CopyButton;
