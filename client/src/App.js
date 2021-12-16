import React from 'react'
import ThemeSwitch from './component/micro/themSwitch';

export const App = () => {
  return (
  <div className="w-screen h-screen dark:bg-primary ">
    <ThemeSwitch />
    Future is now, oldman

    <div className='w-screen h-screen overflow-visible'>
      <iframe src='https://my.spline.design/noisedisplacecopy-d225e306cbce9953001808f16cc1f798/' frameborder='0' width='100%' height='100%'></iframe>
    </div>
  </div>
  );
}
