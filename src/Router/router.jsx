import React from 'react';
import {
    Route,
    Routes,
    BrowserRouter as Router,
  }
  from 'react-router-dom';

import MyPost from '../myPost/myPost';
import MyBoard from '../Board/MyBoard/myBoard';

function Routers() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<MyBoard />}/>
          <Route path ='/post' element={<MyPost/>}/>
      </Routes>
    </Router>
  )
}

export default Routers;
