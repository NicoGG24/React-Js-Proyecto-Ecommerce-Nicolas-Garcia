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



// UN COMPONENTE SE ACTUALIZARA CUANDO UNA DE ESTAS 3 CONDICIONES SEA VERDADERA:  1-SE ACTUALIZA EL COMPONENTE PADRE
//                                                                                2-SE EJECUTA UN STATE  
//                                                                                2-CAMBIA UNA PROP  