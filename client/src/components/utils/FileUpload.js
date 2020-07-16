import React, { useState } from "react";
import Dropzone from "react-dropzone";
import Axios from 'axios';

function FileUpload(props) {

    const [Images, setImages] = useState([]);

    //Esta funcion es para cuando se selecciona la imagen, que la envie por axios con la constante config a toys/uploadImage
    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        //append es para subir imagenes
        formData.append('file', files[0])

        //Guardamos la imagen en el servidor de Node
        Axios.post('http://localhost:5000/toys/uploadImage', formData, config)
            .then(response => {
                if(response.data.success) {
                    setImages([...Images, response.data.image])
                    props.refreshFunction([...Images, response.data.image])
                } else{
                    alert('Fallo al guardar la imagen en el server');
                }
            })
    }

    const onDelete = (image) => {
        //En currentIndex ponemos el indice de la imagen que vamos a borrar
        const currentIndex = Images.indexOf(image);

        //Usamos splice para eliminar la imagen
        let newImages = [...Images];
        newImages.splice(currentIndex, 1);

        //Refrescamos el nuevo array de imagenes
        setImages(newImages);
        props.refreshFunction(newImages);
    }

  return (
    <div className="row">
        <Dropzone 
            onDrop={onDrop}
            multiple={false}
            maxSize={90000000}
        >
        {({ getRootProps, getInputProps }) => (
            <div
                className="card"
                style={{ width: '300px', height: '240px', border: '1px solid lightgray', justifyContent: 'center', alignItems: 'center', display: 'flex'}}
                {...getRootProps()}
            >
            <input {...getInputProps()} />
            <svg 
                width="4em" viewBox="0 0 16 16" className="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                <path fillRule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
            </svg>
            </div>
        )}
      </Dropzone>

        <div style={{ display:'flex', width:'350px', height: '240px', overflowX: 'scroll' }}>
            {Images.map((image, index) => (
                <div onClick={() => onDelete(image)} key={index}>
                    <img
                        style={{ minWidth: '300px', width: '300px', height: '240px'}} 
                        src={`http://localhost:5000/${image}`} 
                        alt={`productImg-${index}`} 
                    />
                </div>
            ))}
            
        </div>
    </div>
  );
}

export default FileUpload;