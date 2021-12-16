import React from 'react'
import DocumentTitle from 'react-document-title';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Play from './Pages/Play';
import Stats from './Pages/Stats';
import Page404 from './Pages/Page404';
import CommonPageDecoration from './component/macro/CommonPageDecoration';

export const App = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden fixed z-10 dark:bg-primary translate-y-2 transition ease-in duration-700">
        <DocumentTitle title='Text Gradient' />
        <Router>
          <Routes>
            <Route path='/play' element={<Play />} />
            <Route path='/play/:playId' element={<Play />} />
            <Route path='/stats' element={<Stats />} />
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </Router>
        Future is now, oldman

        {/* <div className='w-screen h-screen overflow-visible'>
      <iframe src='https://my.spline.design/noisedisplacecopy-d225e306cbce9953001808f16cc1f798/' frameborder='0' width='100%' height='100%'></iframe>
    </div> */}
      </div>
      <CommonPageDecoration />
    </>
  );
}
