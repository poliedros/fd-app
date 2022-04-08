import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import FdPizzaBasicNavMenu from './components/FdPizzaBasicNavMenu/FdPizzaBasicNavMenu';
import FdPizzaBasicCreateItem from './components/FdPizzaBasicCreateItem/FdPizzaBasicCreateItem';
import FdPizzaBasicIntro from './components/FdPizzaBasicIntro/FdPizzaBasicIntro';
import FdPizzaBasicSelect from './components/FdPizzaBasicSelect/FdPizzaBasicSelect';
import FdPizzaBasicCartShopping from './components/FdPizzaBasicCartShopping/FdPizzaBasicCartShopping';
import FdPizzaBasicFinalizeTransaction from './components/FdPizzaBasicFinalizeTransaction/FdPizzaBasicFinalizeTransaction';

/* import itemsFile from './files/items.json'; */

import { Data } from '../src/interfaces/Interfaces';

function App() {

  const address = window.location.href;
  
  const url = address.substring(address.lastIndexOf("/") + 1, address.length); //window.location.href.split("http://localhost:3000/").pop() ?? '';

  let data: Data = {
    url: url,
    firstName: 'fd-app',
    client: {
      additionalInfo: '',
      address: '',
      code: '',           //unnecessary
      email: '',
      id: '',
      name: '',
      phoneNumber: '',
      items: [],
      type: ''
    },
    products: []
  };

  let data2: Data = {
    url: 'PizzaABeca',
    firstName: 'fd-app',
    client: {
      additionalInfo: '',
      address: '',
      code: '',           //unnecessary
      email: '',
      id: '',
      name: '',
      phoneNumber: '',
      items: [],
      type: ''
    },
    products: []
  };

  return (

    <div className="App">
      <div style={{ width: "100vw" }}>
        <Router>
          <Routes>

            <Route path={ "/" } element={ <><h1 style={{ color: "white" }}>Anderson</h1><FdPizzaBasicNavMenu data={ data2 } /><FdPizzaBasicCreateItem /></> } />
            <Route path={ data.firstName + "/" } element={ <><h1 style={{ color: "white" }}>Mendes</h1><FdPizzaBasicNavMenu data={ data2 } /><FdPizzaBasicCreateItem /></> } />
            
            <Route path={ data.firstName + "/" + url } element={ url != '' ? <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicIntro data={ data } /></> : <><FdPizzaBasicCreateItem /></> } />
            <Route path={ data.firstName + "/selector"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicSelect data={ data }/></> } />
            <Route path={ data.firstName + "/cartshopping"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicCartShopping /></> } />
            <Route path={ data.firstName + "/finalizeTransaction"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicFinalizeTransaction /></> } />
            <Route path={ data.firstName + "/adm" } element={ <><FdPizzaBasicCreateItem /></> } />

          </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;