import React, { FC } from 'react';

import ImageUploading from 'react-images-uploading';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

interface FdPizzaBasicUpdateImageProps { onChange: any }

const FdPizzaBasicUpdateImage: FC<FdPizzaBasicUpdateImageProps> = (props) => {
  
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    return props.onChange(imageList);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={3}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <div className="upload__image-wrapper">
            <Button id="upload" variant="dark" /* style={isDragging ? { color: "red" } : null} */ onClick={onImageUpload} {...dragProps}>
              <span id="span-center">
                {/* <img className="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/user_circle_icon_172814.svg"} width="32px" /> */}
                Click ou Arraste a Imagem para esse Botão
              </span>
            </Button>
            &nbsp;
            <Button id="removeAll" variant="dark" onClick={()=>{ onImageRemoveAll(); /* document.getElementById("upload").toggleAttribute("enabled"); document.getElementById("upload").removeAttribute("disabled") */ }}>
              <span id="span-center">
                {/* <img className="icon ion-md-arrow-forward" src={ process.env.PUBLIC_URL + "/user_circle_icon_172814.svg" } width="32px" /> */}
                Eliminar Todas as Imagens
              </span>
            </Button>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center", margin: "1.5rem", maxHeight: "70vh", overflowY: "scroll" }}>
            {
              imageList.map((image, index) => (
                
                <Card key={index} border="dark" style={{ width: '10rem', marginBottom: '10px' }}>
                  <Card.Body>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Image style={{ width: "100px", margin: "0px" }}
                            className='unique'
                            src={ image.data_url }
                            alt={''}
                            title={''}
                      ></Image>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "-1rem", marginTop: "1rem" }}>
                      <Button id="submit" variant="danger" className="button-mini" onClick={() => onImageRemove(index)}>Remover</Button>
                    </div>
                  </Card.Body>
                </Card>
              ))
            }
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default FdPizzaBasicUpdateImage;

/* import React, { FC } from 'react';

import ImageUploading from 'react-images-uploading';

interface FdPizzaBasicUpdateImageProps { }

const FdPizzaBasicUpdateImage: FC<FdPizzaBasicUpdateImageProps> = (props) => {
  
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    return props.onChange(imageList);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default FdPizzaBasicUpdateImage; */