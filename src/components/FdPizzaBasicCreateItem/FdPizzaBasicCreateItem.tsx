import React, { FC, useEffect, useState } from 'react';

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

  const [index, setIndex] = useState(0);

  const [show, setShow] = useState(false);

  const [imagesState, setImagesState] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(imagesState[0]);

  console.log(props);

  return ( 
    <>

      <Button variant="outline-secondary" onClick={ props.clients ? handleShow : undefined } className="me-2">
        Validar Código
      </Button>
      { console.log(props.clients) }
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
                { props.clients.filter((f: Client) => f.code == "PZBC031" /* props.code */).map((p: Client) => {
                  return <ListGroup.Item action href={ "#linkAccount" }>
                    { p.name }
                  </ListGroup.Item>
                } ) }
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
                { props.clients.filter((c: Client) => c.code == props.code)[0] ? props.clients.filter((c: Client) => c.code == props.code)[0].items.map( (p: Item, i: number) => {
                  return <ListGroup.Item action href={ "#link" + i } onClick={ () => setIndex(i) }>
                    { p.name }
                  </ListGroup.Item>
                } ) : null }
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                { props.clients.filter((c: Client) => c.code == props.code)[0] ? props.clients.filter((c: Client) => c.code == props.code)[0].items.map( (p: Item, i: number) => {
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
                } ) : null }
                { props.clients.filter((f: Client) => f.code == "PZBC031" /* props.code */).map( (p: Client) => {
                return <Tab.Pane eventKey="#linkAccount">

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
                      <Button variant="outline-secondary">Salvar Item</Button>
                    </InputGroup>

                </Tab.Pane>
                } ) }
                <Tab.Pane eventKey="#link+">
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicLabel">
                      <Form.Label>Tarja</Form.Label>
                      <Form.Control type="text" placeholder="Insira tarja" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control type="text" placeholder="Insira nome" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicType">
                      <Form.Label>Tipo</Form.Label>
                      <Form.Control type="text" placeholder="Insira tipo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescription">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control type="text" placeholder="Insira descrição" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPrice">
                      <Form.Label>Preço</Form.Label>
                      <Form.Control type="number" placeholder="Insira preço" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                      <Form.Label>Quantidade</Form.Label>
                      <Form.Control type="number" placeholder="Insira estoque" />
                    </Form.Group>

                    {/* <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Imagem</Form.Label>
                      <Form.Control type="file" onChange={ (e) => console.log(e.target.value) } />
                    </Form.Group> */}

                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Imagem</Form.Label>
                      <UploadImage onChange={ (e: any) => { setImagesState(e) } }></UploadImage>
                    </Form.Group>

                    <InputGroup className="mb-3">
                      <Form.Label style={{ width: '100%' }}>Código do Estabelecimento | Pergunta Chave</Form.Label>
                      <FormControl aria-label="Example text with two button addons" placeholder="Reinsira Código do Estabelecimento" />
                      <FormControl aria-label="Example text with two button addons" placeholder="Telefone do estabelecimento?" />
                      <Button variant="outline-secondary" onClick={ () => sendImage(imagesState) }>Salvar Item</Button>
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
  //const [items, setItems] = useState<Item[]>();

  const getData2 = async () => {
    //await axios.get('clients').then(result => {
    await axios.get('storage').then(result => {
      setClients(result.data);
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
      clientsCopy.map(m => m.items = []);
      console.log(clientsCopy);
      result.data.map((r: Item) => clientsCopy.filter(f => f.id == r.clientId).map(m => m.items.push(r)))
      setClients(clientsCopy);
    });
  }

  useEffect(() => {
    //getData2();
    getData1();
  }, []);

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