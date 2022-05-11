import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* import { HashRouter as Router } from "react-router-dom"; */

import axios from '../src/axios';

import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
/* import 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'; */

/* import "bootswatch/dist/quartz/bootstrap.min.css"; */

import { Data, Client } from './interfaces/Interfaces';

/* function main() {
  const [client, setClient] = useState<Client>({
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
  });

  const getData = async () => {
    //await axios.get('clients/' + props.data.url).then(result => setClients(result.data));
    await axios.get('storage/').then(result => setClient(result.data[0]));
  };

  useEffect(() => {
    getData();
  }, []);
} */

/* const Initial = () => {

  function main() {
    const [client, setClient] = useState<Client>({
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
    });
  
    const getData = async () => {
      //await axios.get('clients/' + props.data.url).then(result => setClients(result.data));
      await axios.get('storage/').then(result => setClient(result.data[0]));
    };
  
    useEffect(() => {
      getData();
    }, []);
  }

  return <></>
} */

ReactDOM.render(
  <>
    {/* <Initial /> */}
    <React.StrictMode>
      {/* <Router> */}
      
      {/* <p>{client.theme}</p> */}
        
        <App />
      {/* </Router> */}
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

function moveToSelected(element: any) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected: JQuery<HTMLElement> = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
