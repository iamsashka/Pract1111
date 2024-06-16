import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import FlowersItem from './components/FlowersItem';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Favourites from './components/Favourites';
import Overlay from './components/Overlay';

export const AppContext = React.createContext({});

function App() {
  const [flowers, setFlowers] = useState([]);
  const [overlayItems, setoverlayItems] = useState([]);
  const [favouritesItems, setfavourites] = useState([]);

  useEffect(() => {
    async function axiosData() {
      const flowersData = await axios.get('http://localhost:3001/flowers');
      const overlayData = await axios.get('http://localhost:3001/overlays');
      const favouritesData = await axios.get('http://localhost:3001/favourites');

      setFlowers(flowersData.data);
      setoverlayItems(overlayData.data);
      setfavourites(favouritesData.data);
    }
    axiosData();
  }, [])

  const isAdded = (myId) => {
    return overlayItems.some((objIsAdded) => objIsAdded.myId === myId);
  }

  const isFab = (myId) => {
    return favouritesItems.some((objIsFab) => objIsFab.myId === myId);
  }

  const addToFavorites = (item) => {
    axios.post('http://localhost:3001/favourites', item);
    setfavourites(prev => [...prev, item]);
  }

  const removeFromFavorites = (id) => {
    axios.delete(`http://localhost:3001/favourites/${id}`);
    setfavourites(prev => prev.filter(item => item.id !== id));
  }

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3001/overlays/${id}`);
    setoverlayItems((over) => overlayItems.filter(item => Number(item.id) !== Number(id)));
  }

  const total_price = overlayItems.reduce((total, obj) => total + parseFloat(obj.price), 0);

  return (
    <AppContext.Provider
      value={{
        flowers,
        setFlowers,
        overlayItems,
        setoverlayItems,
        favouritesItems,
        setfavourites,
        isAdded,
        isFab,
        addToFavorites,
        removeFromFavorites
      }}
    >
      <div>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/flowers'
            element={
              <FlowersItem
                item={flowers}
                overlayItems={overlayItems}
                setoverlayItems={setoverlayItems}
                favouritesItems={favouritesItems}
                setfavourites={setfavourites} />
            }
          />
          <Route
            path='/overlay'
            element={
              <Overlay
                overlayItems={overlayItems}
                deleteItem={deleteItem}
                total_price={total_price}
              />
            }
          />
          <Route
            path='/favourites'
            element={
              <Favourites
                favouritesItems={favouritesItems}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
