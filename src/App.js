import React, { useState } from 'react';
import Header from './components/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Beer from './components/Beer';
import { AppContext } from './context';

const App = () => {

  const [favBeers, setFavBeers] = useState([]);

  const dispatchBeerEvent = (actionType, payload) => {
    switch(actionType) {
      case 'ADD_BEER':
        setFavBeers([ ...favBeers, payload.newBeer ]);
        return;
      case 'REMOVE_BEER':
        setFavBeers(favBeers.filter(
          favBeers => favBeers.id !== payload.beerId
        ));
        return;
      default:
        return;
    }
  }

  return(
    <div className='app' style={{
      backgroundColor: '#E5E5E5',
      minHeight: '97vh'
    }}>
      <AppContext.Provider value={{ 
        favBeers, dispatchBeerEvent
      }}>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={
            <Navigate to="/home"></Navigate>
          }></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/beer" element={<Beer/>}></Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
};

export default App;