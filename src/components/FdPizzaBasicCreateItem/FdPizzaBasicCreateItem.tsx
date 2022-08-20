import React, { FC, useEffect, useState, useRef } from 'react';

import axios from '../../axios';

import UploadImage from '../FdPizzaBasicUpdateImage/FdPizzaBasicUpdateImage';

import { BlobServiceClient, ContainerClient, StorageSharedKeyCredential } from '@azure/storage-blob';

import { Buffer } from "buffer";

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

import CreateItemList from '../FdPizzaBasicCreateItemList/FdPizzaBasicCreateItemList';

import $ from 'jquery';

import ListItems from '../FdPizzaBasicCreateItemList/FdPizzaBasicCreateItemList';
import Monitor from '../FdPizzaBasicCreateItemMonitor/FdPizzaBasicCreateItemMonitor';
import { pointerPress } from '@testing-library/user-event/dist/types/pointer/pointerPress';
import { setSyntheticLeadingComments } from 'typescript';

interface FdPizzaBasicCreateItemProps { }

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

function sendImage(file: any) {
  console.log("FILE");
  console.log(file);
}

type Props = {
  key: any;
  placement: any;
  name: string;
}

const FdPizzaBasicCreateItem: FC<FdPizzaBasicCreateItemProps> = () => {

  const [clients, setClients] = useState<Client[]>([]);
  const [clientCopy, setClientCopy] = useState<Client>({
    additionalInfo: "",
    address: "",
    code: "",
    email: "",
    id: "",
    items: [],
    name: "",
    phoneNumber: "",
    type: ""
  });

  const [code, setCode] = useState('');

  function OffCanvasExample({ key, placement, name }: Props) {

    let props: Props = {
      key: key,
      placement: placement,
      name: name
    }

    async function sendImage(image: any) {

      console.log(image);

      const account = "catalogv2";
      const sas = "?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2022-06-22T06:23:11Z&st=2022-04-21T22:23:11Z&spr=https&sig=QCTSjQ1U9WZRANRllagBELSK0NaNkJi%2FSkuQsds%2B%2BKQ%3D";
      const containerName = "storage-images";

      const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net${sas}`);

      const containerClient = blobServiceClient.getContainerClient(containerName);

      const content: any = image;
      console.log(content);
      let blobName = content[0].file.name + new Date().getTime(); //content[0].file.name;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      const matches = content[0].data_url.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      const buffer = new Buffer(matches![2], 'base64');
      const uploadBlobResponse = await blockBlobClient.uploadData(buffer, { blobHTTPHeaders: { blobContentType: matches![1] } });

      console.log(`Upload block blob ${blobName} successfully`, uploadBlobResponse.requestId);
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
        name: name
      };
      await axios.post("/items", request);
      alert("enviou");
      console.log(imagesState);
    }

    const [name2, setName2] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const [imagesState, setImagesState] = useState<any[]>([]);

    const [index, setIndex] = useState(0);

    const [show, setShow] = useState(false);

    const [stateClientCopy, setStateClientCopy] = useState<Client>(clientCopy);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(imagesState[0]);

    console.log(props);
    console.log(stateClientCopy);

    return (
      <>

        <Button variant="outline-secondary" onClick={clients ? handleShow : undefined} className="me-2">
          Validar Código
        </Button>
        {clients ?
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
                        { /* ; setClientPhone(p.phoneNumber) */}
                        {code ? clients.filter((f: Client) => f.code == code).map((p: Client) => {
                          return <ListGroup.Item action href={"#linkAccount"} onClick={() => { setStateClientCopy(p) /* clientcopy.name = p.name */ }}>
                            {p.name}
                          </ListGroup.Item>
                        }) : null}
                      </ListGroup>
                      <br />
                      <ListGroup style={{ alignItems: "center" }}>
                        <ListGroup.Item action href="#link+"
                          style={{
                            borderRadius: "100px",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                            textAlign: "center",
                            aspectRatio: "1 / 1",
                            width: "auto", //"calc(3vw + 6vh)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                          </svg>
                        </ListGroup.Item>
                      </ListGroup>
                      <br />
                      <ListGroup>
                        {code ? clients.filter((c: Client) => c.code == code).length > 0 ? clients.filter((c: Client) => c.code == code)[0].items ? clients.filter((c: Client) => c.code == code)[0].items.map((p: Item, i: number) => {
                          return <ListGroup.Item action href={"#link" + i} onClick={() => setIndex(i)}>
                            {p.name}
                          </ListGroup.Item>
                        }) : null : null : null}
                      </ListGroup>
                      <br />
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        {code ? clients.filter((c: Client) => c.code == code).length > 0 ? clients.filter((c: Client) => c.code == code)[0].items ? clients.filter((c: Client) => c.code == code)[0].items.map((p: Item, i: number) => {
                          return <Tab.Pane eventKey={"#link" + i}>

                          </Tab.Pane>
                        }) : null : null : null}
                        {code ? clients.filter((f: Client) => f.code == code).map((p: Client) => {
                          return <Tab.Pane eventKey="#linkAccount">
                            <Form>
                              <InputGroup className="mb-3">
                                <Form.Label style={{ width: '100%' }}>Nome</Form.Label>
                                <FormControl
                                  className="inputName"
                                  aria-label="Example text with button addon"
                                  aria-describedby="basic-addon1"
                                  value={stateClientCopy.name ?? ''}
                                  onChange={(event: any) => { setStateClientCopy({ ...stateClientCopy, name: event.target.value }) /* setClientName(event.target.value); */ /* setName(event.target.value) */; }}
                                  disabled
                                />
                                <Button variant="outline-secondary" id="button-addon1" onClick={() => $(".inputName").prop("disabled", true) ? $(".inputName").prop("disabled", false) : $(".inputName").add("disabled")}> {/* updateStorage() */}
                                  Editar
                                </Button>
                              </InputGroup>

                              <InputGroup className="mb-3">
                                <Form.Label style={{ width: '100%' }}>Telefone</Form.Label>
                                <FormControl
                                  className="inputPhone"
                                  aria-label="Example text with button addon"
                                  aria-describedby="basic-addon1"
                                  value={stateClientCopy.phoneNumber ?? ''}
                                  onChange={(event: any) => { setStateClientCopy({ ...stateClientCopy, phoneNumber: event.target.value }) /* setClientPhone(event.target.value) */ }}
                                  disabled
                                />
                                <Button variant="outline-secondary" id="button-addon1" onClick={() => $(".inputPhone").prop("disabled", true) ? $(".inputPhone").prop("disabled", false) : $(".inputPhone").add("disabled")}>
                                  Editar
                                </Button>
                              </InputGroup>

                              <InputGroup className="mb-3">
                                <Form.Label style={{ width: '100%' }}>Email</Form.Label>
                                <FormControl
                                  className="inputEmail"
                                  aria-label="Example text with button addon"
                                  aria-describedby="basic-addon1"
                                  value={stateClientCopy.email ?? ''}
                                  onChange={(event: any) => { setStateClientCopy({ ...stateClientCopy, email: event.target.value }) /* setClientPhone(event.target.value) */ }}
                                  disabled
                                />
                                <Button variant="outline-secondary" id="button-addon1" onClick={() => $(".inputEmail").prop("disabled", true) ? $(".inputEmail").prop("disabled", false) : $(".inputEmail").add("disabled")}>
                                  Editar
                                </Button>
                              </InputGroup>

                              <InputGroup className="mb-3">
                                <Form.Label style={{ width: '100%' }}>Endereço</Form.Label>
                                <FormControl
                                  className="inputAddress"
                                  aria-label="Example text with button addon"
                                  aria-describedby="basic-addon1"
                                  value={stateClientCopy.address ?? ''}
                                  onChange={(event: any) => { setStateClientCopy({ ...stateClientCopy, address: event.target.value }) /* setClientPhone(event.target.value) */ }}
                                  disabled
                                />
                                <Button variant="outline-secondary" id="button-addon1" onClick={() => $(".inputAddress").prop("disabled", true) ? $(".inputAddress").prop("disabled", false) : $(".inputAddress").add("disabled")}>
                                  Editar
                                </Button>
                              </InputGroup>

                              <InputGroup className="mb-3">
                                <Form.Label style={{ width: '100%' }}>Informações Adicionais</Form.Label>
                                <FormControl
                                  className="inputAdditionalInfo"
                                  aria-label="Example text with button addon"
                                  aria-describedby="basic-addon1"
                                  value={stateClientCopy.additionalInfo ?? ''}
                                  onChange={(event: any) => { setStateClientCopy({ ...stateClientCopy, additionalInfo: event.target.value }) /* setClientPhone(event.target.value) */ }}
                                  disabled
                                />
                                <Button variant="outline-secondary" id="button-addon1" onClick={() => $(".inputAddionalInfo").prop("disabled", true) ? $(".inputAddionalInfo").prop("disabled", false) : $(".inputAddionalInfo").add("disabled")}>
                                  Editar
                                </Button>
                              </InputGroup>

                              <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Imagem</Form.Label>
                                <UploadImage /* value={ imageState } */ onChange={(e: any) => { /* sendImage(e); */ /* setImagesState(e); */ /* console.log(imagesState) */ }}></UploadImage>
                              </Form.Group>

                              <InputGroup className="mb-3">
                                <Form.Label style={{ width: '100%' }}>Código do Estabelecimento | Pergunta Chave</Form.Label>
                                <FormControl aria-label="Example text with two button addons" placeholder="Reinsira Código do Estabelecimento" />
                                <FormControl aria-label="Example text with two button addons" placeholder="Telefone do estabelecimento?" />
                                <Button variant="outline-secondary" /* type="submit" */ onClick={() => { setClientCopy(stateClientCopy) }/* ; onChange */ /* () => { updateStorage() } */}>Salvar Loja</Button>
                              </InputGroup>
                            </Form>
                          </Tab.Pane>
                        }) : null}
                        <Tab.Pane eventKey="#link+">
                          <Form onSubmit={postItem}>

                          </Form>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Container>
            </Offcanvas.Body>
          </Offcanvas> : null}

      </>
    );
  }

  async function updateStorage() {
    const request = clientCopy;
    console.log(request);
    await axios.patch("/storage/624fb30f570d98201f131685", request);
    await axios.get('items').then(async result => {
      await axios.get('storage').then(result1 => {
        console.log(result.data);
        result1.data.map((r: Client) => r.items = []);
        result.data.map((r: Item) => result1.data.filter((f: Client) => f.id == r.clientId).map((m: Client) => m.items.push(r)));
        setClients(result1.data);
      })
    });
  }

  const getData = async () => {
    await axios.get('items').then(async result => {
      await axios.get('storage').then(result1 => {
        console.log(result.data);
        result1.data.map((r: Client) => r.items = []);
        result.data.map((r: Item) => result1.data.filter((f: Client) => f.id == r.clientId).map((m: Client) => m.items.push(r)));
        console.log(result1.data);
        setClients(result1.data);
        setClientCopy(result1.data[0]);
      })
    });

  }

  useEffect(() => {
    getData();

  }, []);

  useEffect(() => {
  }, [clients]);

  let didMount = useRef(0);

  useEffect(() => {
    console.log(didMount)
    if (didMount.current <= 1) {
      didMount.current++;
    } else
      updateStorage();
  }, [clientCopy]);

  const OffCanvas = (idx: React.Key | null | undefined, placement: string) => { return <OffCanvasExample key={idx} placement={placement} name={placement} /> };

  return (
    <div>
      <Container style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Código do Estabelecimento"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e: any) => { setCode(e.target.value) }}
          />
          {clients ? ['bottom'].map((placement, idx) => (
            OffCanvas(idx, placement)
          )) : null}
        </InputGroup>

      </Container>
      <Container>

      </Container>
    </div>);
}

export default FdPizzaBasicCreateItem;