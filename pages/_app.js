import React from 'react';
import Init from './_init';
import {store} from '../store';
import {Provider} from 'react-redux';
import {AnimatePresence} from 'framer-motion'; 
import "../public/css/global.css";

function App({Component, pageProps}) {

  return (
    <Provider store={store}>
      <Init>
        <AnimatePresence exitBeforeEnter={true}>
          <div className='app'>
            <Component {...pageProps}/>
          </div>
        </AnimatePresence>
      </Init>
    </Provider>
  )
}

export default App;