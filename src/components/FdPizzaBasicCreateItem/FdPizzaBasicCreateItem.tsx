import React, { FC, useEffect, useState, useRef } from 'react';

import axios from '../../axios';

import UploadImage from '../FdPizzaBasicUpdateImage/FdPizzaBasicUpdateImage';

import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";

import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';
import Offcanvas from 'react-bootstrap/Offcanvas';

import $ from 'jquery';

interface FdPizzaBasicCreateItemProps {}

interface Item {
  clientId: string;
  code: string;
  description: string;
  id: string;
  image: string;
  label: string;
  name: string;
  note: string;
  price: number;
  quantity: number;
  type: string;
}

interface Client {
  additionalInfo: string;
  address: string;
  code: string;
  email: string;
  id: string;
  items: Item[];
  name: string;
  phoneNumber: string;
  type: string;
}

interface Props {
    key: string;
    placement: string;
    name: string;
    code: string;
    clients: Client[];
}

function sendImage(file: any) {

  const creds = {accessKeyId: "AKIARVN2XQEDLNX53XWC", secretAccessKey: "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"};

  const target = { Bucket: "storage-files-general-use", Key: file[0].file.name, Body: file[0].file };
  try {
    const parallelUploads3 = new Upload({
      client: new S3Client({region: "sa-east-1", credentials: creds}),
      leavePartsOnError: false, // optional manually handle dropped parts
      params: target,
    });

    parallelUploads3.on("httpUploadProgress", (progress) => {
      console.log(progress);
    });

    parallelUploads3.done();
  } catch (e) {
    console.log(e);
  }

}

function OffCanvasExample({ ...props }) {

  async function updateStorage() {
    const request = {
      /* id: "",
      code: "",
      type: type,
      urlName: "anderson",
      phoneNumber: "1155082980",
      email: "sr.andersonmendesribeiro@gmail.com",
      socialMedia: "",
      address: "Moreno 3028 8C",
      city: "Buenos Aires",
      additionalInfo: "informação adicional", */
      name: clientName
    };
    await axios.patch("/storage/624fb30f570d98201f131685", request);
    alert("enviou");
  }

  async function postItem() {
    const request = {
      id: "",
      code: "",
      description: description,
      type: type,
      price: price,
      quantity: quantity,
      image: "https://storage-files-general-use.s3.sa-east-1.amazonaws.com/" + imagesState[0].file.name,
      clientId: "",
      name: name/* ,
      description: description,
      amountCents: price,
      width: width,
      height: height */
    };
    /* const token = res2.data.token;
    const headers =  {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }; */
    await axios.post("/items", request/* , { headers: headers } */);
    alert("enviou");
    console.log(imagesState);
  }

  const [clientName, setClientName] = useState(props.code ? props.clients.filter((f: Client) => f.code == props.code /* props.code */).map( (p: Client) => { console.log(p); return p.name }) : null);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [imagesState, setImagesState] = useState<any[]>([]);

  const [index, setIndex] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(imagesState[0]);

  console.log(props);

  /* const getData = async () => {
    /* const {data} = await axios.get('ad-formats');
    setAdFormatList(data); /
    await props.clients.filter((f: Client) => f.code == "PZBC031" /* props.code /).map( (p: Client) => {
      console.log("Nando Moura"); console.log(props); setClientName(p.name)
    } )
  }; */

  /* useEffect(() => {
    setClientName(props.clients.filter((f: Client) => f.code == "PZBC031" /* props.code /).map( (p: Client) => { console.log(p); return p.name }))
    /* document.title = `You clicked ${clientName} times`;
    $(".inputName").html(`You clicked ${clientName} times`); /
  }, []); */ 

  return ( 
    <>

      <Button variant="outline-secondary" onClick={ props.clients ? handleShow : undefined } className="me-2">
        Validar Código
      </Button>
      { console.log(props) }
      { props.clients ? 
      <Offcanvas style={{ height: "100vh" }} show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sua conta</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Container>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link+">
          <Row>
            <Col sm={4}>
              <ListGroup>
                { props.code ? props.clients.filter((f: Client) => f.code == props.code).map((p: Client) => {
                  return <ListGroup.Item action href={ "#linkAccount" } onClick={ () => { setClientName(p.name) } }>
                    { p.name }
                  </ListGroup.Item>
                } ) : null }
              </ListGroup>
              <br/>
              <ListGroup style={{ alignItems: "center" }}>
                <ListGroup.Item action href="#link+"
                style={{ borderRadius: "100px",
                  width: "58px",
                  paddingLeft: "8px",
                  paddingRight: "8px",
                  height: "58px",
                  textAlign: "center"
                }}>
                  <h3 style={{ marginBottom: "0" }}><b>+</b></h3>
                </ListGroup.Item>
              </ListGroup>
              <br/>
              <ListGroup>
                { console.log(props.clients.filter((c: Client) => c.code == props.code) !== 'undefined' && props.clients.filter((c: Client) => c.code == props.code).length > 0) }
                { props.code ? props.clients.filter((c: Client) => c.code == props.code) !== 'undefined' && props.clients.filter((c: Client) => c.code == props.code).length > 0 ? props.clients.filter((c: Client) => c.code == props.code)[0].items ? props.clients.filter((c: Client) => c.code == props.code)[0].items.map( (p: Item, i: number) => {
                  return <ListGroup.Item action href={ "#link" + i } onClick={ () => setIndex(i) }>
                    { p.name }
                  </ListGroup.Item>
                } ) : null : null : null }
              </ListGroup>
              <br/>
            </Col>
            <Col sm={8}>
              <Tab.Content>
              { props.code ? props.clients.filter((c: Client) => c.code == props.code) !== 'undefined' && props.clients.filter((c: Client) => c.code == props.code).length > 0 ? props.clients.filter((c: Client) => c.code == props.code)[0].items ? props.clients.filter((c: Client) => c.code == props.code)[0].items.map( (p: Item, i: number) => {
                return <Tab.Pane eventKey={ "#link" + i }>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Tarja</Form.Label>
                      <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={ p.name }
                        disabled
                      />
                      <Button variant="outline-secondary" id="button-addon1">
                        Editar
                      </Button>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Nome</Form.Label>
                      <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={ p.name }
                        disabled
                      />
                      <Button variant="outline-secondary" id="button-addon1">
                        Editar
                      </Button>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Tipo</Form.Label>
                      <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={ p.type }
                        disabled
                      />
                      <Button variant="outline-secondary" id="button-addon1">
                        Editar
                      </Button>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Descrição</Form.Label>
                      <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={ p.description }
                        disabled
                      />
                      <Button variant="outline-secondary" id="button-addon1">
                        Editar
                      </Button>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Preço</Form.Label>
                      <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={ p.price }
                        disabled
                      />
                      <Button variant="outline-secondary" id="button-addon1">
                        Editar
                      </Button>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Quantidade</Form.Label>
                      <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={ p.quantity }
                        disabled
                      />
                      <Button variant="outline-secondary" id="button-addon1">
                        Editar
                      </Button>
                    </InputGroup>

                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src="/chat.png"
                      />
                      <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                      </Figure.Caption>
                    </Figure>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Código do Estabelecimento | Pergunta Chave</Form.Label>
                      <FormControl aria-label="Example text with two button addons" placeholder="Reinsira Código do Estabelecimento" />
                      <FormControl aria-label="Example text with two button addons" placeholder="Telefone do estabelecimento?" />
                      <Button variant="outline-secondary">Salvar Item</Button>
                    </InputGroup>

                </Tab.Pane>
                } ) : null : null : null }
                { props.code ? props.clients.filter((f: Client) => f.code == props.code).map( (p: Client) => {
                return <Tab.Pane eventKey="#linkAccount">
                  <Form /* onSubmit={updateStorage} */>
                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Nome</Form.Label>
                      <FormControl
                        className="inputName"
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={ clientName ?? "" }
                        onChange={ event => setClientName(event.target.value) }
                        disabled
                      />
                      <Button variant="outline-secondary" id="button-addon1" onClick={ () => $(".inputName").prop("disabled", true) ? $(".inputName").prop("disabled", false) : $(".inputName").add("disabled") }> {/* updateStorage() */}
                        Editar
                      </Button>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Telefone</Form.Label>
                      <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={ p.phoneNumber }
                        disabled
                      />
                      <Button variant="outline-secondary" id="button-addon1">
                        Editar
                      </Button>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Email</Form.Label>
                      <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={ p.email }
                        disabled
                      />
                      <Button variant="outline-secondary" id="button-addon1">
                        Editar
                      </Button>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Endereço</Form.Label>
                      <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={ p.address }
                        disabled
                      />
                      <Button variant="outline-secondary" id="button-addon1">
                        Editar
                      </Button>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Informações Adicionais</Form.Label>
                      <FormControl
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                        value={ p.additionalInfo }
                        disabled
                      />
                      <Button variant="outline-secondary" id="button-addon1">
                        Editar
                      </Button>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Código do Estabelecimento | Pergunta Chave</Form.Label>
                      <FormControl aria-label="Example text with two button addons" placeholder="Reinsira Código do Estabelecimento" />
                      <FormControl aria-label="Example text with two button addons" placeholder="Telefone do estabelecimento?" />
                      <Button variant="outline-secondary" /* type="submit" */ onClick={ () => { updateStorage() } }>Salvar Loja</Button>
                    </InputGroup>
                  </Form>
                </Tab.Pane>
                } ) : null }
                <Tab.Pane eventKey="#link+">
                  <Form onSubmit={postItem}>
                    <Form.Group className="mb-3" controlId="formBasicLabel">
                      <Form.Label>Tarja</Form.Label>
                      <Form.Control type="text" placeholder="Insira tarja" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control value={ name } type="text" placeholder="Insira nome" onChange={ event => setName(event.target.value) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicType">
                      <Form.Label>Tipo</Form.Label>
                      <Form.Control value={ type } type="text" placeholder="Insira tipo" onChange={ event => setType(event.target.value) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control value={ description } type="text" placeholder="Insira descrição" onChange={ event => setDescription(event.target.value) }/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                      <Form.Label>Preço</Form.Label>
                      <Form.Control value={ price } type="number" placeholder="Insira preço" onChange={ event => setPrice(parseInt(event.target.value)) }/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                      <Form.Label>Quantidade</Form.Label>
                      <Form.Control value={ quantity } type="number" placeholder="Insira estoque" onChange={ event => setQuantity(parseInt(event.target.value)) } />
                    </Form.Group>

                    {/* <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Imagem</Form.Label>
                      <Form.Control type="file" onChange={ (e) => console.log(e.target.value) } />
                    </Form.Group> */}

                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Imagem</Form.Label>
                      <UploadImage /* value={ imageState } */ onChange={ (e: any) => { setImagesState(e) } }></UploadImage>
                    </Form.Group>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Código do Estabelecimento | Pergunta Chave</Form.Label>
                      <FormControl aria-label="Example text with two button addons" placeholder="Reinsira Código do Estabelecimento" />
                      <FormControl aria-label="Example text with two button addons" placeholder="Telefone do estabelecimento?" />
                      <Button variant="outline-secondary" type="submit" onClick={ () => sendImage(imagesState) }>Salvar Item</Button>
                    </InputGroup>

                  </Form>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </Container>
        </Offcanvas.Body>
      </Offcanvas> : null }
      
    </>
  );
}

const FdPizzaBasicCreateItem: FC<FdPizzaBasicCreateItemProps> = () => {
  
  
  const [clients, setClients] = useState<Client[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  const getData3 = async () => {
    await axios.get('items').then(async result => {
      await axios.get('storage').then(result1 => {
        console.log(result.data);
        result1.data.map((r: Client) => r.items = []);
        result.data.map((r: Item) => result1.data.filter((f: Client) => f.id == r.clientId).map((m: Client) => m.items.push(r)));
        console.log(result1.data);
        setClients(result1.data);
      })
    });
  }

  /* const getData3 = async () => {
    await axios.get('items').then(result => {
      console.log(result.data);
      setItems(result.data);
      console.log(items);
    }).then( async () =>
    await axios.get('storage').then(result1 => {
      console.log(items);
      console.log(result1.data);
    }) );
  } */

  const getData2 = async () => {
    //await axios.get('clients').then(result => {
    await axios.get('storage').then(result => {
      result.data.map((r: any) => r.items = []);
      setClients(result.data, /* (async () => await axios.get('items').then(result1 => {
        let clientsCopy = result1.data;
        console.log(clientsCopy);
        result1.data.map((r: Item) => clientsCopy.filter(f => f.id == r.clientId).map(m => m.items.push(r)))
        setClients(clientsCopy);
      })) */ );
    });
   
  }

  const getData1 = async () => {
    //await axios.get('clients').then(result => {
    /* await axios.get('items').then(result => {
      setItems(result.data);
    }); */
    await axios.get('items').then(result => {
      getData2();
      let clientsCopy = clients;
      /* clientsCopy.map(m => m.items = []); */
      console.log(clientsCopy);
      result.data.map((r: Item) => clientsCopy.filter(f => f.id == r.clientId).map(m => m.items.push(r)))
      setClients(clientsCopy);
    });
  }

  useEffect(() => {
    getData3();
  }, []);

/*   const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      console.log("PASSOU AQUI NÃO")
      isInitialMount.current = false;
    } else {
      console.log("PASSOU AQUI")
      getData1();
    }
    //getData2();
  }, []); */

  const [image, setImage] = useState("");

  const [code, setCode] = useState('');

  //let code: string;

  const OffCanvas = (idx: React.Key | null | undefined, placement: string) => { return <OffCanvasExample key={idx} placement={placement} name={placement} code={code} clients={clients} /> }; 

  return (
  <div>
    <Container style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Código do Estabelecimento"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => { setCode(e.target.value) }}
        />
        { clients ? ['bottom'].map((placement, idx) => (
          OffCanvas(idx, placement)
        )) : null }
      </InputGroup>

    </Container>
    <Container>

    </Container>
  </div>);
}

export default FdPizzaBasicCreateItem;