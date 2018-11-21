import React, { Fragment } from 'react';
import Reveal from './Reveal';

import './App.css';

const App = () => (
  <Fragment>
    <div style={{ height: '2000px' }} />
    <Reveal
      render={({ reveal, style }) => (
        <div className="App" style={style}>
          rendered with: props
        </div>
      )}
    />

    <Reveal>
      {({ reveal, style }) => (
        <div className="App" style={style}>
          rendered with: children
        </div>
      )}
    </Reveal>
  </Fragment>
);

export default App;
