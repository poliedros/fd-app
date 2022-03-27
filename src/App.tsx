import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import logo from './logo.svg'; */
import './App.css';

import axios from './axios';

import ReactDOMServer from "react-dom/server";

import FdNavbarMain from './components/FdNavbarMain/FdNavbarMain';
import FdNavbarShopping from './components/FdNavbarShopping/FdNavbarShopping';
import FdOptionsMainMenu from './components/FdOptionsMainMenu/FdOptionsMainMenu';
import FdSelectPizza from './components/FdSelectPizza/FdSelectPizza';

import FdPizzaBasicIntro from './components/FdPizzaBasicIntro/FdPizzaBasicIntro';

import FdPizzaBasicCreateItem from './components/FdPizzaBasicCreateItem/FdPizzaBasicCreateItem';

import FdPizzaBasicNavMenu from './components/FdPizzaBasicNavMenu/FdPizzaBasicNavMenu';
import FdPizzaBasicCartShopping from './components/FdPizzaBasicCartShopping/FdPizzaBasicCartShopping';

import FdPizzaBasicSelect from './components/FdPizzaBasicSelect/FdPizzaBasicSelect';
import FdPatrickPage from './components/FdPatrickPage/FdPatrickPage';
import FdPizzaBasicFinalizeTransaction from './components/FdPizzaBasicFinalizeTransaction/FdPizzaBasicFinalizeTransaction';

import itemsFile from '../src/files/items.json';

/* const Hello = () => <FdPatrickPage />;

const html = ReactDOMServer.renderToStaticMarkup(<Hello />);

console.log(html.toString()); */

function App() {

  const url = window.location.href.split("http://localhost:3000/").pop();
  console.log("URL");
  console.log(url);

  const [clients, setClients] = useState<any[]>([]);

  const getData2 = async () => {
    const {data} = await axios.get('clients');
    setClients(data);
  };

  useEffect(() => {
    getData2();
  }, clients);

  console.log("CLIENTE");
  console.log(clients);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div style={{
        width: "100vw",
        //height: "100vh",
        backgroundColor: "black"
      }}>
        { clients.map(m => { return <h1>{ m.name }</h1>} )}
        {/* <FdPizzaBasicNavMenu />
        <FdPizzaBasicIntro /> */}

        {/* <FdPizzaBasicNavMenu />
        <FdPizzaBasicSelect /> */}

        {/* <FdNavbarMain />
        <FdNavbarShopping />
        <FdOptionsMainMenu />
        <FdSelectPizza /> */}

        {/* <FdPatrickPage /> */}

        <Router>
          <Routes>
            <Route path={ "/" + url } element={<div><FdPizzaBasicNavMenu props={ url ? itemsFile.clients.filter(f => f.urlName == url) : '' } /><FdPizzaBasicIntro /></div>} />

            <Route path="/manage" element={<div><FdPizzaBasicNavMenu props={ url ? itemsFile.clients.filter(f => f.urlName == url) : '' } /><FdPizzaBasicCreateItem /></div>} />

            <Route path="/selector" element={<div><FdPizzaBasicNavMenu props={ url ? itemsFile.clients.filter(f => f.urlName == url) : '' } /><FdPizzaBasicSelect client={ itemsFile.clients.filter(f => f.urlName == url)[0] }/></div>} />
            <Route path="/cartshopping" element={<div><FdPizzaBasicNavMenu props={ url ? itemsFile.clients.filter(f => f.urlName == url) : '' } /><FdPizzaBasicCartShopping /></div>} />
            <Route path="/finalizeTransaction" element={<div><FdPizzaBasicNavMenu props={ url ? itemsFile.clients.filter(f => f.urlName == url) : '' } /><FdPizzaBasicFinalizeTransaction /></div>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
