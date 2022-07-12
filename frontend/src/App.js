import React from 'react';
import Header from './components/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return(
    <div className='app' style={{
      backgroundColor: '#E5E5E5',
      minHeight: '97vh'
    }}>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Navigate to="/home"></Navigate>}>
        </Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  );
};

export default App;