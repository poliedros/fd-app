import React, { FC, useEffect, useState } from 'react';
import { HashRouter, BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import './App.css';

import axios from '../src/axios';

import FdPizzaBasicNavMenu from './components/FdPizzaBasicNavMenu/FdPizzaBasicNavMenu';
import FdPizzaBasicCreateItem from './components/FdPizzaBasicCreateItem/FdPizzaBasicCreateItem';
import FdPizzaBasicIntro from './components/FdPizzaBasicIntro/FdPizzaBasicIntro';
import FdPizzaBasicSelect from './components/FdPizzaBasicSelect/FdPizzaBasicSelect';
import FdPizzaBasicCartShopping from './components/FdPizzaBasicCartShopping/FdPizzaBasicCartShopping';
import FdPizzaBasicFinalizeTransaction from './components/FdPizzaBasicFinalizeTransaction/FdPizzaBasicFinalizeTransaction';

import { Data, Client, Item } from './interfaces/Interfaces';

function App() {

  const urlName = window.location.hash.substring(2);
  const [client, setClient] = useState<Client>();

  console.log("URLNAME");
  console.log(urlName);

  let data: Data = {
    urlName: urlName,
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
      urlName: ''
    },
    products: []
  };

  const getData = async () => {
    await axios.get('items').then(async itRes => {
      await axios.get('storage').then(stRes => {
        stRes.data.map((cl: Client) => cl.items = []);
        itRes.data.map((it: Item) => stRes.data.filter((clFil: Client) => clFil.id == it.clientId).map((clMp: Client) => clMp.items.push(it)));
        setClient(stRes.data.filter((clUn: Client) => (clUn.urlName == urlName))[0]);
      })
    })
  }

  useEffect(() => {
    getData();
  }, []);

  if(client)
    require("bootswatch/dist/" + client.theme + "/bootstrap.min.css");
  else
    require("bootswatch/dist/cyborg/bootstrap.min.css");

  return (
    <HashRouter>
      <Routes> 
        <Route path={ '/' } element={ <><Link to={ '/pizzaabeca' } style={{ color: "white" }}>Pizza a Beça</Link><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicCreateItem /></> } />
        <Route path={ '/pizzaabeca' } element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicIntro data={ data } /></> } />
        <Route path={ '/czardev' } element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicIntro data={ data } /></> } />

        <Route path={ "/selector" } element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicSelect data={ data }/></> } />
        <Route path={ "/cartshopping" } element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicCartShopping /></> } />
        <Route path={ "/finalizeTransaction" } element={ <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicFinalizeTransaction /></> } />
      </Routes>
    </HashRouter>
  );
}

export default App;