import React from 'react';
import './App.css';
import Header from './Components/Header'
import ItemListContainer from './Components/ItemListContainer'


function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting="Category" />
    </>
  );
}

export default App;
