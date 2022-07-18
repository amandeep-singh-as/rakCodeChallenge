import React, { useEffect, useState }  from 'react';
import Header from './components/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Beer from './components/Beer';
import { AppContext } from './context';
import axios from 'axios';

const App = () => {

  const [favBeers, setFavBeers] = useState([]);
  const [allBeers, setAllBeers] = useState([]);
  const [searchParam, setSearchParams] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers').then((response) => {
        setAllBeers(response.data);
        setLoading(false);
    })
  }, [])

  const dispatchLoading = (actionType, payload) => {
    switch(actionType) {
      case 'SET_LOADING':
        setLoading(payload.loading);
        return;
      default:
        return
    }
  }

  const dispatchSearchParamsEvent = (actionType, payload) => {
    switch(actionType) {
      case 'SET_SEARCH_PARAMS':
        setSearchParams(payload);
        return;
      default:
        return
    }
  }

  const dispatchFavBeerEvent = (actionType, payload) => {
    switch(actionType) {
      case 'ADD_BEER':
        setFavBeers([ ...favBeers, payload ]);
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
        favBeers, dispatchFavBeerEvent,
        loading, dispatchLoading,
        searchParam, dispatchSearchParamsEvent,
        allBeers

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