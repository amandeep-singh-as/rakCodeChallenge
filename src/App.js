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
  const [searchParam, setSearchParams] = useState({
    searchType: 'all',
    payload: ''
  });
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if(searchParam.searchType !== 'fermentation') {
      getAll();
    } else {
      if(searchParam.payload === 'topFermentation') {
        searchTopFermentatedBeer()
      } else {
        searchBottomFermentatedBeer()
      }
    }
  }, [page]);


  useEffect(() => {
    if(typeof searchParam != 'undefined' && searchParam.searchType === 'food-pairing') {
      console.log("In food");
      searchByFood(searchParam.payload);
    } else if(typeof searchParam != 'undefined' && searchParam.searchType === 'bitterness'){
      console.log("In bitterness")
      searchByBitterness(parseInt(searchParam.payload))
    } else if (typeof searchParam != 'undefined' && searchParam.payload === 'topFermentation'){
      setPage(1)
      searchTopFermentatedBeer()
    } else if (typeof searchParam != 'undefined' && searchParam.payload === 'bottomFermentation') {
      setPage(1)
      searchBottomFermentatedBeer()
    } else {
      setPage(1);
      getAll();
    }
  }, [searchParam]);

  const getAll = () => {
    axios.get('https://api.punkapi.com/v2/beers?page=' + page + '&per_page=15').then((response) => {
        setAllBeers(response.data);
        setLoading(false);
      }).catch((error) => {
        console.log("Error at all beers ", error);
      })
  }

  const searchByBitterness = (ibu) => {
    setLoading(true);
    axios.get('https://api.punkapi.com/v2/beers/?ibu_gt=' + (ibu - 1).toString()).then((response) => {
      setAllBeers(response.data.filter((beer) => beer.ibu === ibu));
      setLoading(false);
    }).catch((error) => {
      console.log("Error");
    })
  }

  const searchTopFermentatedBeer = () => {
    setLoading(true);
    axios.get('https://api.punkapi.com/v2/beers?page=' + page + '&per_page=15').then((response) => {
      setAllBeers(response.data.filter((beer) => beer.method.fermentation.temp.value >= 10 
      && beer.method.fermentation.temp.value <= 25));
      if(setAllBeers.length === 0) {
        setPage((page + 1))
      }
      setLoading(false);
    }).catch((error) => {
      console.log("Error", error);
    })
  }

  const searchBottomFermentatedBeer = () => {
    setLoading(true);
    axios.get('https://api.punkapi.com/v2/beers?page=' + page + '&per_page=15').then((response) => {
      setAllBeers(response.data.filter((beer) => beer.method.fermentation.temp.value >= 7 
      && beer.method.fermentation.temp.value <= 15));
      setLoading(false)
    }).catch((error) => {
      console.log("Error", error);
    })
  }

  const searchByFood = (terms) => {
    console.log("In the function")
    setLoading(true);
    axios.get('https://api.punkapi.com/v2/beers/?food=' + terms.replaceAll(" ", "_")).then((response) => {
      setAllBeers(response.data);
      setLoading(false);
    }).catch((error) => {
      console.log("Error");
    })
  }

  const dispatchPageEvent = (actionType, payload) => {
    switch(actionType) {
      case 'SET_PAGE':
        setPage(payload);
        return;
      default:
        return;
    }
  }

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
        setAllBeers([]);
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
          beer => beer.id !== payload
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
        allBeers, dispatchPageEvent, page

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