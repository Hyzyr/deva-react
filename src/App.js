import React from 'react';
import Home from 'containers/Home';
import { Routes, Route, Link, Redirect } from 'react-router-dom';
import Welcome from 'containers/welcome/Welcome';

function App(props) {
     return (
          <Routes>
               <Route path="/" element = { <Home />} />
               <Route path="/signin" element = {<Welcome />} />
          </Routes>
     );
}

export default App;
