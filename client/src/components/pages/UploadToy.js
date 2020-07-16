import React, { useState } from 'react';
import FileUpload from '../utils/FileUpload';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';


export default function UploadToy() {

    const history = useHistory();

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0);
    const [images, setImages] = useState([]);
        
    const onTituloChange = (event) => {
        setTitulo(event.currentTarget.value);
    }

    const onDescripcionChange = (event) => {
        setDescripcion(event.currentTarget.value);
    }

    const onPrecioChange = (event) => {
        setPrecio(event.currentTarget.value);
    }

    const updateImages = (newImages) => {
        setImages(newImages);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const variables = {
            titulo,
            descripcion,
            precio,
            images
        }

        console.log(variables);

        await Axios.post('http://localhost:5000/toys/create', variables)
            .then(response => {
                if(response.data.success) {
                    alert('Producto subido satisfactoriamente');
                    history.push('/');
                } else {
                    alert('Hubo un problema al querer subir el producto');
                }
            })
    }

    return (
        <div className="container">
            <br/>
            <div className="text-center">
            <h1>Crea un nuevo muñeco</h1>
            </div>
            <form 
                onSubmit={onSubmit}
            >
                <div>
                    <FileUpload refreshFunction={updateImages}/>
                    <br/>
                    <br/>
                    <label htmlFor="titulo">Titulo</label>
                    <textarea
                        className="form-control"
                        id="titulo" 
                        onChange={onTituloChange}
                        value={titulo}
                    />
                    <br/>
                    <br/>
                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea
                        className="form-control"
                        id="descripcion" 
                        onChange={onDescripcionChange} 
                        value={descripcion}
                    />
                    <br/>
                    <br/>
                    <label htmlFor="precio">Pecio($)</label>
                    <textarea 
                        className="form-control"
                        id="precio"
                        onChange={onPrecioChange}
                        value={precio}
                        type="number"
                        />
                    <br/>
                    <br/>
                    <button
                        type="button"
                        className="btn btn-primary" 
                        onClick={onSubmit}
                        >
                        Enviar
                    </button>
                    <br/>
                    <br/>
                </div>
            </form>
        </div>
    )
}
