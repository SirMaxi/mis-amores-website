import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function EditToy(props) {

    //Traemos las propiedades de la card que hicimos con el history push
    const { data } = props.location.state;
    console.log(data.value.titulo);

    const history = useHistory();


    const [titulo, setTitulo] = useState(data.value.titulo);
    const [descripcion, setDescripcion] = useState(data.value.descripcion);
    const [precio, setPrecio] = useState(data.value.precio);

    const onTituloChange = (event) => {
        setTitulo(event.currentTarget.value);
    }

    const onDescripcionChange = (event) => {
        setDescripcion(event.currentTarget.value);
    }

    const onPrecioChange = (event) => {
        setPrecio(event.currentTarget.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        

        if(!titulo || !precio){
            return alert('Titulo, descripcion e imagen son obligatorios');   
        }
        
        const variables = {
            titulo,
            descripcion,
            precio,
        }

        console.log(variables)

        await Axios.put('http://localhost:5000/toys/edit/' + data.value._id, variables)
            .then(response => {
                if(response.data.success) {
                    alert('Producto editado satisfactoriamente');
                    history.push('/');
                } else {
                    console.log(response.data)
                    alert('Hubo un problema al querer editar el producto');
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="container">
            <br/>
            <div className="text-center">
            <h1>Edita el muñeco</h1>
            </div>
            <form 
                onSubmit={onSubmit}
            >
                <div>
                    {/* <FileUpload refreshFunction={updateImagenes}/> */}
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
                        Guardar datos cambiados
                    </button>
                    <br/>
                    <br/>
                </div>
            </form>
        </div>
    )
}
