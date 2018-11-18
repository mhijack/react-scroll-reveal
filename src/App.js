import React, { Fragment } from 'react';
import Reveal from './Reveal';

import './App.css';

const App = () => (
  <Fragment>
    <div style={{ height: '2000px' }} />
    <Reveal
      render={reveal => (
        <div className="App" display={{ opacity: reveal ? 1 : 0 }}>
          scroll-to-review-in-action
        </div>
      )}
    />
  </Fragment>
);

export default App;
