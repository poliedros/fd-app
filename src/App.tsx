import React, { FC, useEffect, useState } from 'react';
import { HashRouter, BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
/* import { HashRouter, Route, Routes } from 'react-router-dom'; */

import './App.css';

import FdPizzaBasicNavMenu from './components/FdPizzaBasicNavMenu/FdPizzaBasicNavMenu';
import FdPizzaBasicCreateItem from './components/FdPizzaBasicCreateItem/FdPizzaBasicCreateItem';
import FdPizzaBasicIntro from './components/FdPizzaBasicIntro/FdPizzaBasicIntro';
import FdPizzaBasicSelect from './components/FdPizzaBasicSelect/FdPizzaBasicSelect';
import FdPizzaBasicCartShopping from './components/FdPizzaBasicCartShopping/FdPizzaBasicCartShopping';
import FdPizzaBasicFinalizeTransaction from './components/FdPizzaBasicFinalizeTransaction/FdPizzaBasicFinalizeTransaction';

/* import itemsFile from './files/items.json'; */

import { Data, Client } from './interfaces/Interfaces';

function App() {

  const address = window.location.pathname;
  
  //const url = address.substring(address.lastIndexOf("/") + 1, address.length); //window.location.href.split("http://localhost:3000/").pop() ?? '';

  const url = address.split('/');

  const url2 = window.location.origin;

  console.log(url);
  console.log(url2);

  let data: Data = {
    url: url[2],
    firstName: 'fd-app',
    client: {
      additionalInfo: '',
      address: '',
      city: '',
      code: '',           //unnecessary
      deliveryPrice: '',
      email: '',
      id: '',
      items: [],
      logoImage: '',
      name: '',
      paymentMethods: '',
      phoneNumber: '',
      socialMedia: '',
      theme: '',
      type: '',
      _id: ''
    },
    products: []
  };

  let data2: Data = {
    url: 'PizzaABeca',
    firstName: '/fd-app',
    client: {
      additionalInfo: '',
      address: '',
      city: '',
      code: '',           //unnecessary
      deliveryPrice: '',
      email: '',
      id: '',
      items: [],
      logoImage: '',
      name: '',
      paymentMethods: '',
      phoneNumber: '',
      socialMedia: '',
      theme: '',
      type: '',
      _id: '',
    },
    products: []
  };

  const [clients, setClients] = useState<Client[]>([]);

  return (
    /* <div className="App">
      <div style={{ width: "100vw" }}> */
        <HashRouter>
          <Routes> 

            {/* <Route path={ "/" } element={ <><h1 style={{ color: "white" }}>Anderson</h1><FdPizzaBasicNavMenu data={ data2 } /><FdPizzaBasicCreateItem /></> } />
            <Route path={ data.firstName + "/" } element={ <><h1 style={{ color: "white" }}>Mendes</h1><FdPizzaBasicNavMenu data={ data2 } /><FdPizzaBasicCreateItem /></> } /> */}

            <Route path={ "/" } element={ <><Link to={ '/624fb30f570d98201f131685' } style={{ color: "white" }}>Anderson</Link><FdPizzaBasicNavMenu data={ data2 } /><FdPizzaBasicCreateItem /></> } />
            <Route path={ "/624fb30f570d98201f131685" } element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicIntro data={ data } /></> } />

            <Route path={ "/selector"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicSelect data={ data }/></> } />
            <Route path={ "/cartshopping"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicCartShopping /></> } />
            <Route path={ "/finalizeTransaction"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicFinalizeTransaction /></> } />
            
            {/* <Route path={ data.firstName + "/" } element={ <><Link to={ '/fd-app/624fb30f570d98201f131685' } style={{ color: "white" }}>Anderson</Link><FdPizzaBasicNavMenu data={ data2 } /><FdPizzaBasicCreateItem /></> } />
            <Route path={ data.firstName + "/" + url[2] } element={ url[2] != '' ? <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicIntro data={ data } /></> : <><FdPizzaBasicCreateItem /></> } />
            <Route path={ data.firstName + "/624fb30f570d98201f131685" } element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicIntro data={ data } /></> } />
            <Route path={ data.firstName + "/selector"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicSelect data={ data }/></> } />
            <Route path={ data.firstName + "/cartshopping"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicCartShopping /></> } />
            <Route path={ data.firstName + "/finalizeTransaction"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicFinalizeTransaction /></> } />
            <Route path={ data.firstName + "/adm" } element={ <><FdPizzaBasicCreateItem /></> } /> */}

          </Routes>
        </HashRouter>
      /* </div>
    </div> */
  );
}

export default App;

{/* <Router>
  <Routes> 

    {/* <Route path={ "/" } element={ <><h1 style={{ color: "white" }}>Anderson</h1><FdPizzaBasicNavMenu data={ data2 } /><FdPizzaBasicCreateItem /></> } />
    <Route path={ data.firstName + "/" } element={ <><h1 style={{ color: "white" }}>Mendes</h1><FdPizzaBasicNavMenu data={ data2 } /><FdPizzaBasicCreateItem /></> } /> /}
    
    <Route path={ data.firstName + "/" } element={ <><Link to={ '/fd-app/624fb30f570d98201f131685' } style={{ color: "white" }}>Anderson</Link><FdPizzaBasicNavMenu data={ data2 } /><FdPizzaBasicCreateItem /></> } />
    <Route path={ data.firstName + "/" + url[2] } element={ url[2] != '' ? <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicIntro data={ data } /></> : <><FdPizzaBasicCreateItem /></> } />
    <Route path={ data.firstName + "/624fb30f570d98201f131685" } element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicIntro data={ data } /></> } />
    <Route path={ data.firstName + "/selector"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicSelect data={ data }/></> } />
    <Route path={ data.firstName + "/cartshopping"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicCartShopping /></> } />
    <Route path={ data.firstName + "/finalizeTransaction"} element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicFinalizeTransaction /></> } />
    <Route path={ data.firstName + "/adm" } element={ <><FdPizzaBasicCreateItem /></> } />

  </Routes>
</Router> */}