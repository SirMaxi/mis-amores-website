import React, { useState } from "react";
import FileUpload from "../../utils/FileUpload";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./style.css";

const Categorias = [
  { key: 1, value: "Disney" },
  { key: 2, value: "Pixar" },
  { key: 3, value: "Marvel" },
  { key: 4, value: "Videojuegos" },
  { key: 5, value: "Mascotas" },
  { key: 6, value: "Personas" },
  { key: 7, value: "Otros" },
];

export default function UploadToy() {
  const history = useHistory();

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState(1);
  const [precio, setPrecio] = useState(0);
  const [imagenes, setImagenes] = useState([]);

  const onTituloChange = (event) => {
    setTitulo(event.currentTarget.value);
  };

  const onDescripcionChange = (event) => {
    setDescripcion(event.currentTarget.value);
  };

  const onPrecioChange = (event) => {
    setPrecio(event.currentTarget.value);
  };

  const onCategoriaChange = (event) => {
    setCategoria(event.currentTarget.value);
  };

  const updateImagenes = (newImagenes) => {
    setImagenes(newImagenes);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !precio || !imagenes) {
      return alert("Titulo, descripcion e imagen son obligatorios");
    }

    const variables = {
      titulo,
      descripcion,
      precio,
      imagenes,
      categoria,
    };

    await Axios.post("http://localhost:5000/toys/create", variables).then(
      (response) => {
        if (response.data.success) {
          alert("Producto subido satisfactoriamente");
          history.push("/");
        } else {
          alert("Hubo un problema al querer subir el producto");
        }
      }
    );
  };

  return (
    <div className="container">
      <br />
      <div className="text-center" id="tituloUpload">
        <h1>Subi un nuevo muñeco</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Imagen</label>
          <FileUpload refreshFunction={updateImagenes} />
          <label htmlFor="titulo">Titulo</label>
          <input
            className="form-control"
            id="tituloUpload"
            onChange={onTituloChange}
            value={titulo}
          />
          <label htmlFor="descripcion">Descripcion</label>
          <textarea
            className="form-control"
            id="descripcionUpload"
            onChange={onDescripcionChange}
            value={descripcion}
          />
          <label htmlFor="precio">Pecio($)</label>
          <input
            className="form-control col-md-2"
            id="precioUploadS"
            onChange={onPrecioChange}
            value={precio}
          />
          <label htmlFor="categoria">Categoria</label>
          <select
            onChange={onCategoriaChange}
            value={categoria}
            className="form-control col-sm-2"
          >
            {Categorias.map((item) => (
              <option key={item.key} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
          <button type="button" className="btn btn-primary" onClick={onSubmit}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
