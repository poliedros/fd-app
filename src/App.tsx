import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

/* import axios from './axios'; */

import FdPizzaBasicNavMenu from './components/FdPizzaBasicNavMenu/FdPizzaBasicNavMenu';
import FdPizzaBasicCreateItem from './components/FdPizzaBasicCreateItem/FdPizzaBasicCreateItem';
import FdPizzaBasicIntro from './components/FdPizzaBasicIntro/FdPizzaBasicIntro';
import FdPizzaBasicSelect from './components/FdPizzaBasicSelect/FdPizzaBasicSelect';
import FdPizzaBasicCartShopping from './components/FdPizzaBasicCartShopping/FdPizzaBasicCartShopping';
import FdPizzaBasicFinalizeTransaction from './components/FdPizzaBasicFinalizeTransaction/FdPizzaBasicFinalizeTransaction';

import itemsFile from './files/items.json';

interface Item {
  id: string,
  name: string,
  description: string,
  type: string,
  price: number,
  quantity: number,
  clientId: string, //unnecessary
  code: string, //unnecessary
  image: string,
  label: string,
  note: string
}

interface Client {
  additionalInfo: string,
  address: string,
  code: string, //unnecessary
  email: string,
  id: string,
  name: string,
  phoneNumber: string,
  items: Item[],
  type: string
}

interface Product {
  type: string;
  image: string | undefined;
  description: string;
  id: number;
  label: string;
  title: string;
  name: string;
  half: string;
  quantity: number;
  price: number;
  note: string;
}

interface Data {
  url: string,
  client: Client,
  products: Product[]
}

function App() {
  let address = window.location.href;
  
  const url = address.substring(address.lastIndexOf("/") + 1, address.length); //window.location.href.split("http://localhost:3000/").pop() ?? '';
  console.log(url);
/*   let client = {
    additionalInfo: '',
    address: '',
    code: '', //unnecessary
    email: '',
    id: '',
    name: '',
    phoneNumber: '',
    items: [],
    type: ''
  } */

/*   const [clients, setClients] = useState<Client[]>([]);

  const getData = async () => {
    await axios.get('clients').then(result => setClients(result.data));
  };

  useEffect(() => {
    getData();
  }, []); */

  let data: Data = { url: url, client: {
    additionalInfo: '',
    address: '',
    code: '', //unnecessary
    email: '',
    id: '',
    name: '',
    phoneNumber: '',
    items: [],
    type: ''
  },
  products: [] };

  console.log(data);

  return (
    <div className="App">
      <div style={{ width: "100vw" }}>
        <Router>
          <Routes>
            <Route path={ "/" + url } element={ url != '' ? <><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicIntro data={ data } /></> : <><FdPizzaBasicCreateItem /></> } />
            <Route path="/selector" element={ <div><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicSelect data={ data }/></div> } />
            <Route path="/cartshopping" element={ <div><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicCartShopping /></div> } />
            <Route path="/finalizeTransaction" element={ <div><FdPizzaBasicNavMenu data={ data } /><FdPizzaBasicFinalizeTransaction /></div> } />
            {/* <Route path={ "/" + url } element={ url != "" ? <div><FdPizzaBasicNavMenu props={ url ? itemsFile.clients.filter(f => f.urlName == url) : '' } /><FdPizzaBasicIntro url={itemsFile.clients[0].name ?? ""} /></div> : <><FdPizzaBasicCreateItem /></> } />
            <Route path="/adm" element={ <div><FdPizzaBasicNavMenu props={ url ? itemsFile.clients.filter(f => f.urlName == url) : '' } /><FdPizzaBasicCreateItem /></div> } />
            <Route path="/selector" element={ <div><FdPizzaBasicNavMenu props={ url ? itemsFile.clients.filter(f => f.urlName == url) : '' } /><FdPizzaBasicSelect client={ itemsFile.clients.filter(f => f.urlName == url)[0] }/></div> } />
            <Route path="/cartshopping" element={ <div><FdPizzaBasicNavMenu props={ url ? itemsFile.clients.filter(f => f.urlName == url) : '' } /><FdPizzaBasicCartShopping /></div> } />
            <Route path="/finalizeTransaction" element={ <div><FdPizzaBasicNavMenu props={ url ? itemsFile.clients.filter(f => f.urlName == url) : '' } /><FdPizzaBasicFinalizeTransaction /></div> } /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;