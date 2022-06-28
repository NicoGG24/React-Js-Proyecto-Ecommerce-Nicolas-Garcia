import React from 'react';
import './App.css';
import Header from './Components/Header';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting="Category" />
      <ItemCount stock={5}/>
    </>
  );
}

export default App;
