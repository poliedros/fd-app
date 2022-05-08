import React, { FC, useEffect, useState } from 'react';


import { Client, Item } from '../../interfaces/Interfaces';

import ListGroup from 'react-bootstrap/ListGroup';

interface FdPizzaBasicCreateItemListProps { code: string, clients: Client[] }

const FdPizzaBasicCreateItemList: FC<FdPizzaBasicCreateItemListProps> = (props) => {

  const [clientName, setClientName] = useState(props.code ? props.clients.filter((f: Client) => f.code == props.code /* props.code */).map( (p: Client) => { console.log(p); return p.name }) : null);

  const [clients, setClients] = useState<Client[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  console.log("CreateItemList");
  console.log(props);

  const getData = async () => {
    let clientsCopy = props.clients;
    console.log(clientsCopy);
    setClients(clientsCopy);
    setClientName(clientName);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ListGroup>
      { props.code ? props.clients.filter((f: Client) => f.code == props.code).map((p: Client) => {
        /* setClients(props.clients) */ 
        return <ListGroup.Item action href={ "#linkAccount" } onClick={ () => { /* p.name = 'Mendes'; */ /* setClients(props.clients) */ } }> {/*  */}
          { p.name }
        </ListGroup.Item>
      } ) : null }
    </ListGroup>
  )
};

export default FdPizzaBasicCreateItemList;
