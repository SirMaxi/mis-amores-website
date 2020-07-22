import React, { useState } from 'react';

export default function EditToy(props) {

    //Traemos las propiedades de la carta que hicimos con el history push
    const { data } = props.location.state;
    console.log(data.value.titulo);

    const [titulo, setTitulo] = useState("");

    const onTituloChange = (event) => {
        setTitulo(event.currentTarget.value);
    }

    // const onDescripcionChange = (event) => {
    //     setDescripcion(event.currentTarget.value);
    // }

    // const onPrecioChange = (event) => {
    //     setPrecio(event.currentTarget.value);
    // }

    return (
        <div className="container">
            <br/>
            <div className="text-center">
            <h1>Edita el muñeco</h1>
            </div>
            <form 
                //onSubmit={onSubmit}
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
                        value={data.value.titulo}
                    />
                    <br/>
                    <br/>
                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea
                        className="form-control"
                        id="descripcion" 
                        //onChange={onDescripcionChange} 
                        value={data.value.descripcion}
                    />
                    <br/>
                    <br/>
                    <label htmlFor="precio">Pecio($)</label>
                    <textarea 
                        className="form-control"
                        id="precio"
                        //onChange={onPrecioChange}
                        value={data.value.precio}
                        type="number"
                        />
                    <br/>
                    <br/>
                    <button
                        type="button"
                        className="btn btn-primary" 
                        //onClick={onSubmit}
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
